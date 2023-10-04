import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-pink-600 animate__animated animate__bounceIn">
          404
        </h1>
        <p className="text-2xl text-gray-700 my-4 animate__animated animate__fadeIn">
          Oops! The page you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-600 transform hover:scale-110 transition-transform duration-300 ease-in-out animate__animated animate__fadeInUp"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound