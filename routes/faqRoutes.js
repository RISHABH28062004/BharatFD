const express = require('express');
const { getFAQs, createFAQ } = require('../controllers/faqController');

const router = express.Router();

router.get('/', getFAQs);
router.post('/', createFAQ);

module.exports = router;
