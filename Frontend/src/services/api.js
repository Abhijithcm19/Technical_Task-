import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api.snapshow.com';

const fetchImages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/images`, { timeout: 5000 }); // Timeout set to 5 seconds
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Server responded with error status:', error.response.status);
      console.error('Error message:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error:', error.message);
    }
    throw new Error('Failed to fetch images');
  }
};

export { fetchImages };
