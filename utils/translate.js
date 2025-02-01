const axios = require('axios');
const cache = require('./cache'); // Redis caching

async function translateText(text, targetLang) {
    if (!text) return null;

    const cacheKey = `translate_${text}_${targetLang}`;
    const cachedTranslation = await cache.get(cacheKey);
    if (cachedTranslation) return cachedTranslation;

    try {
        const response = await axios.get(`https://translate.googleapis.com/translate_a/single`, {
            params: {
                client: 'gtx',
                sl: 'en',
                tl: targetLang,
                dt: 't',
                q: text
            }
        });

        const translation = response.data[0][0][0];
        await cache.set(cacheKey, translation, 86400); // Cache for 24 hours
        return translation;
    } catch (error) {
        console.error("Translation failed:", error);
        return text;
    }
}

module.exports = translateText;
