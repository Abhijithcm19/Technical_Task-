import React, { useState, useEffect } from "react";
import { getSavedImages } from "../services/api";
import SavedImgCard from "../components/Cards/SavedImgCard";

const SavedImages = () => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    const fetchSavedImages = async () => {
      try {
        const images = await getSavedImages();
        setSavedImages(images);
      } catch (error) {
        console.error("Error fetching saved images:", error);
      }
    };

    fetchSavedImages();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Saved Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {savedImages.map((savedImage) => (
          <SavedImgCard key={savedImage._id} savedImage={savedImage} />
        ))}
      </div>
    </div>
  );
};

export default SavedImages;
