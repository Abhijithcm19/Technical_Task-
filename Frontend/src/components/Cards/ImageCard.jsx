import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { saveImage } from "../../services/api";
import Swal from "sweetalert2";

const ImageCard = ({ image, innerRef }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveClick = async () => {
    try {
      const savedImage = await saveImage({
        id: image.id,
        author: image.author,
        dimensions: image.dimensions,
        url: image.url,
      });
      console.log("Image saved:", savedImage);
      // Show success message using Swal
      Swal.fire({
        icon: "success",
        title: "Image Saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error saving image:", error);
      // Show error message using Swal
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      ref={innerRef}
      className="relative bg-white rounded-lg shadow-sm overflow-hidden h-full "
    >
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="relative w-1/2 h-300 bg-white rounded-lg shadow-md p-4">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover rounded-sm"
            />
            <button
              className="absolute top-2 right-2 text-white p-2 rounded-full bg-gray-800"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      <div style={{ height: "250px" }} onClick={handleImageClick}>
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-semibold">{image.title}</h3>
        <p className="text-gray-600">{image.description}</p>
        <button
          onClick={handleSaveClick}
          className="flex items-center mt-2 text-gray-600 hover:text-gray-800 hover:underline"
        >
          <FaRegBookmark className="mr-1" /> Save
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
