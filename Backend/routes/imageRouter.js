const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Route to get images from Picsum Photos API
router.get('/images', imageController.getPictures);

// Route to save an image to MongoDB
router.post("/images/save", imageController.saveImage);

// Route to fetch saved images from MongoDB
router.get('/images/saved', imageController.getSavedImages);

// Export the router
module.exports = router;
