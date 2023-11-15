/** @format */

import React, { useState, useEffect } from "react";
import search from "../assets/search.png";
import { carouselData } from "../carouselData";
import wallpaper from "../assets/wallpaper.jpg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = carouselData.map((data) => data.image);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically slide to the next image every 3000 milliseconds (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="h-screen w-full relative">
        <img
          src={wallpaper}
          alt="wallpaper"
          className="h-full object-cover w-full absolute -z-10 dark:z-10"
        />
        <div className="w-11/12 md:w-10/12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-8 z-30">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl text-white md:text-4xl font-playfair">
              Exquisite Miniature Marvels: Elevate Your Collection with the
              Pinnacle of Nendoroid Craftsmanship.
            </h1>
            <p className="text-white pt-8 pb-10 md:text-lg">
              Where Artistry Meets Play: Discover the Epitome of Nendoroid
              Excellence, Each Figurine a Symphony of Precision and Charm.
            </p>
            <button className="bg-orange-400 px-12 py-4 text-white hover:bg-orange-500">
              Get Started
            </button>
          </div>
          {/* <div className=" overflow-hidden w-full relative">
            <img
              src={images[currentIndex]}
              alt={`image ${currentIndex + 1}`}
              className=""
            />
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between">
              <button onClick={prevImage} className="bg-white p-2">
                &#8249;
              </button>
              <button onClick={nextImage} className="bg-white p-2">
                &#8250;
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="mt-20 w-11/12 m-auto md:w-10/12">
        <div className="flex mb-5 w-2/3 md:w-1/3 rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-1 border-2 placeholder:pl-2 rounded-lg rounded-r-none focus:outline-none pl-2"
            placeholder="Search"
          />
          <div className="bg-orange-400 px-2 py-2">
            <img src={search} alt="search" className="w-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
