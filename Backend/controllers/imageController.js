const axios = require('axios');
const asyncHandler = require('express-async-handler');
const imageModel = require('../models/imageSchame');

// Description: Get images from Picsum Photos API
// Route: GET /api.snapshow.com/images
const getPictures = asyncHandler(async (req, res) => {
  // Pagination parameters
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || DEFAULT_LIMIT;
  const offset = (page - 1) * limit;

  try {
    // Fetch data from Picsum Photos API
    const response = await axios.get('https://picsum.photos/v2/list');

    // Extract pictures based on pagination parameters
    const pictures = response.data.slice(offset, offset + limit);

    const transformedPictures = pictures.map((picture) => ({
      id: picture.id,
      author: picture.author,
      dimensions: `${picture.width}x${picture.height}`,
      url: picture.download_url,
    }));

    res.status(200).json(transformedPictures);
  } catch (error) {
    console.error('Error fetching pictures:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Constants
const DEFAULT_LIMIT = 9;

module.exports = {
  getPictures,
};
