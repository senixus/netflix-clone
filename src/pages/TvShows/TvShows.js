import React from "react";
import BrowseFooter from "../../components/browseFooter/BrowseFooter";
import Browse from "../../components/browse/Browse";
import Tvs from "../../components/tv/Tvs";

const TvShows = () => {
  return (
    <>
      <Browse />
      <Tvs />
      <BrowseFooter />
    </>
  );
};

export default TvShows;
