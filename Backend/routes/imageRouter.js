const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Route to handle GET requests for fetching images
router.get('/images', imageController.getPictures);

module.exports = router;
