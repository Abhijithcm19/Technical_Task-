import axios from "axios";

// Base URL for the API
const BASE_URL = "http://localhost:3000/api.snapshow.com";

// Function to fetch images from the API
const fetchImages = async (page) => {
  console.log("Page Param:", page.pageParam);
  const limit = 9;
  const offset = (page - 1) * limit;
  const url = `${BASE_URL}/images?page=${page.pageParam}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Failed to fetch images");
  }
};

// Function to save an image to the API and local storage
const saveImage = async (imageData) => {
  try {
    
    const response = await axios.post(`${BASE_URL}/images/save`, imageData);
    const savedImage = response.data;

    
    let savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
    savedImages.push(savedImage);
    localStorage.setItem('savedImages', JSON.stringify(savedImages));

    return savedImage; 
  } catch (error) {
    console.error('Error saving image:', error);
    throw new Error('Failed to save image');
  }
};

// Function to fetch saved images from the API
const getSavedImages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/images/saved`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching saved images:', error);
    throw new Error('Failed to fetch saved images');
  }
};

export { fetchImages, saveImage, getSavedImages };
