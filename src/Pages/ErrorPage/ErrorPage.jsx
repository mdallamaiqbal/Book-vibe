import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold tracking-widest drop-shadow-lg">
          404
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </p>

        {/* Description */}
        <p className="mt-2 text-sm md:text-base opacity-80">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Go Back Home
          </a>
        </div>

        {/* Decorative Blur Circle */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white opacity-10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default ErrorPage;