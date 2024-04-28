import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api.snapshow.com';

// Function to fetch images from the API
const fetchImages = async (page) => {
  console.log("Pagesss :",page.pageParam);
  const limit = 9;
  const offset = (page - 1) * limit;
  const url = `${BASE_URL}/images?page=${page.pageParam}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images');
  }
};


export { fetchImages };
