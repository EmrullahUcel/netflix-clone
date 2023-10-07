import React, { useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const options = {
    method: "GET",
    url: "https://netflix54.p.rapidapi.com/title/trailers/",
    params: {
      id: "80057281",
      offset: "0",
      limit: "25",
      lang: "tr",
    },
    headers: {
      "X-RapidAPI-Key": "78bcfa8bf1msh9e59d0d8f6f1e1fp16156ejsne90d1c844376",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const getData = async () => {
    try {
      const response = await axios.request(options);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(movies);

  return <button onClick={() => getData()}>Movies</button>;
};

export default Movies;
