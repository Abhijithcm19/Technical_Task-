const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Endpoint to fetch paginated pictures
router.get('/images', imageController.getPictures);

module.exports = router;