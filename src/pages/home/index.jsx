import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeMovie from "./homeMovie";

const Home = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDVhNGZlNjFjZDAwMjMyMzFkZDRlYzUxZWE2NDBhMyIsInN1YiI6IjY1MjQ5Mjg5NzQ1MDdkMDBhYzRiNDRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHtOqR_38jrDmZqrC8Y5522o4Z-2VTzMJ3g-fVNXP-k",
        },
      };

      await axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          options
        )
        .then((res) => setMovie(res.data.results))
        .catch((error) => console.error(error));
    };
    getMovies();
  }, []);
  const forward = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const back = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  return (
    <div>
      <HomeMovie />
      <div className="relative">
        <button
          onClick={back}
          className="absolute left-0 bg-blue-500 text-white p-4 z-10"
        >
          geri
        </button>
        <div
          id="slider"
          className="w-full h-full flex relative overflow-hidden"
        >
          {movie?.map((item) => {
            return (
              <img
                className="w-[280px] h-[180px] hover:scale-[2]"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=""
              />
            );
          })}
        </div>
        <button
          onClick={forward}
          className="absolute right-0 bg-blue-500 text-white p-4 z-10"
        >
          ileri
        </button>
      </div>
    </div>
  );
};

export default Home;
