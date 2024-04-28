import React from 'react';

const ImageCard = ({ image,innerRef }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" ref={innerRef}>
      <img src={image.url} alt={image.alt} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{image.title}</h3>
        <p className="text-gray-600">{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
