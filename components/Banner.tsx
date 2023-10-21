import React from "react";

const Banner = () => {
  return (
    <div className="text-center">
      <h1 className="mb-2 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50">
        {/* <span>Explore</span>{" "} */}
        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-500 lg:inline">
          Physics-Based Animation
        </span>{" "}
        {/* <span>Build 🚀</span> */}
      </h1>
      {/* <p>
        All problems in computer graphics can be solved with a matrix inversion.
      </p> */}
    </div>
  );
};

export default Banner;
