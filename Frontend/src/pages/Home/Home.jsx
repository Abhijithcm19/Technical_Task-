import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '../../services/api';


const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey:["images"],
    queryFn:fetchImages,
  });


    console.log("Data:", data);


  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      <div className='flex flex-col items-center gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'> Welcome To Snap Show</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
       hai
        {/* Render images here */}
      </div>
    </div>
  );
};

export default Home;