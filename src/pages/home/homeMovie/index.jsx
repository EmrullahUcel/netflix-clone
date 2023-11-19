import React from "react";
import ReactPlayer from "react-player";

const url = "https://www.youtube.com/watch?v=b9EkMc79ZSU&t=1s";

const HomeMovie = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen  relative z-0">
      <ReactPlayer url={url} width={`100%`} height={`100%`} controls />
      <button className="absolute left-40 bottom-40 bg-white text-black px-10 py-3">Play</button>
      <button className="absolute left-72 bottom-40 bg-white text-black px-10 py-3">More Info</button>
    </div>
  );
};

export default HomeMovie;
