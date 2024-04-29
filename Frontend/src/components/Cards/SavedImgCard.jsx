import React from 'react';

const SavedImgCard = ({ savedImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={savedImage.url} alt={savedImage.author} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Author: {savedImage.author}</h3>
        <p className="text-gray-600">Dimensions: {savedImage.dimensions}</p>
      </div>
    </div>
  );
};

export default SavedImgCard;
