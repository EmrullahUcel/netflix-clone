import React from "react";
import Navbar from "../navbar";
import { Routes, Route } from "react-router-dom";
import Series from "/src/pages/series";
import Movies from "/src/pages/movies";
import Mylist from "/src/pages/mylist";
import NewAndPopular from "/src/pages/newAndPopular";
import SearchForLanguage from "/src/pages/searchForLanguage";

const MainLayout = () => {
  return (
    <div className="w-full h-screen bg-[url('/src/assets/images/cemyılmaz.webp')] bg-cover ">
      <Navbar />
      <Routes>
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/mylist" element={<Mylist />} />
        <Route path="/newandpopular" element={<NewAndPopular />} />
        <Route path="/searchforlanguage" element={<SearchForLanguage />} />
      </Routes>
    </div>
  );
};

export default MainLayout;
