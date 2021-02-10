import React from "react";
import Browse from "../../components/browse/Browse";
import BrowseFooter from "../../components/browseFooter/BrowseFooter";
import Movie from "../../components/movies/Movie";

const Movies = () => {
  return (
    <>
      <Browse />
      <Movie />
      <BrowseFooter />
    </>
  );
};

export default Movies;
