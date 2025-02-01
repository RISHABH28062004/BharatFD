const FAQ = require('../models/FAQ');
const translateText = require('../utils/translate');
const cache = require('../utils/cache');

exports.getFAQs = async (req, res) => {
    try {
        const lang = req.query.lang || 'en';
        const cacheKey = `faqs_${lang}`;
        const cachedData = await cache.get(cacheKey);

        if (cachedData) return res.json(JSON.parse(cachedData));

        const faqs = await FAQ.find();
        const translatedFAQs = await Promise.all(
            faqs.map(async (faq) => ({
                id: faq._id,
                question: lang === 'hi' ? faq.question_hi || faq.question : lang === 'bn' ? faq.question_bn || faq.question : faq.question,
                answer: faq.answer
            }))
        );

        await cache.set(cacheKey, JSON.stringify(translatedFAQs), 86400);
        res.json(translatedFAQs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const question_hi = await translateText(question, 'hi');
        const question_bn = await translateText(question, 'bn');

        const newFAQ = new FAQ({ question, answer, question_hi, question_bn });
        await newFAQ.save();

        res.status(201).json(newFAQ);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create FAQ' });
    }
};
