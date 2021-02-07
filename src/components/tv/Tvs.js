import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActionAdventureTv } from "../../redux/actions/showsActions/getActionAdventureTv";
import { getCrimeTv } from "../../redux/actions/showsActions/getCrimeTv";
import { getDramaTv } from "../../redux/actions/showsActions/getDramaTv";
import { getNetflixOriginal } from "../../redux/actions/showsActions/getNetflixOriginal";
import { getPopularTv } from "../../redux/actions/showsActions/getPopularTv";
import { getTrendingTv } from "../../redux/actions/showsActions/getTrendingTv";
import { getWarTv } from "../../redux/actions/showsActions/getWarTv";

import Tv from "./Tv";

const Tvs = () => {
  const dispatch = useDispatch();
  const actionTv = () => dispatch(getActionAdventureTv());
  const crimeTv = () => dispatch(getCrimeTv());
  const dramaTv = () => dispatch(getDramaTv());
  const netflixTv = () => dispatch(getNetflixOriginal());
  const popularTv = () => dispatch(getPopularTv());
  const trendingTv = () => dispatch(getTrendingTv());
  const warTv = () => dispatch(getWarTv());

  const action = useSelector((state) => state.actionTv.actionAdventureTv);
  const crimes = useSelector((state) => state.crimeTv.crimeTv);
  const dramas = useSelector((state) => state.dramaTv.dramaTv);
  const netflix = useSelector((state) => state.netflix.netflixOriginalTv);
  const popular = useSelector((state) => state.popularTv.popularTv);
  const trending = useSelector((state) => state.trendingTv.trendingTv);
  const wars = useSelector((state) => state.warTv.warTv);

  useEffect(() => {
    actionTv();
    crimeTv();
    dramaTv();
    netflixTv();
    popularTv();
    trendingTv();
    warTv();
  }, []);

  return (
    <>
      <Tv shows={netflix.results} title="Netflix Original" />
      <Tv shows={trending.results} title="Trending Now" />
      <Tv shows={popular.results} title="Popular" />
      <Tv shows={action.results} title="Action" />
      <Tv shows={crimes.results} title="Crime" />
      <Tv shows={dramas.results} title="Drama" />
      <Tv shows={wars.results} title="War" />
    </>
  );
};

export default Tvs;
