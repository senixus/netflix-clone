import React, { useEffect } from "react";
import "./home.scss";
import Collapsible from "../collapse/Collapsible";
import GetStarted from "../getStarted/GetStarted";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeEnjoy from "../homeChildren/HomeEnjoy";
import HomeDownload from "../homeChildren/HomeDownload";
import HomeWatch from "../homeChildren/HomeWatch";
const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();

  // useEffect(() => {
  //   const handleUser = () => {
  //     if (user && history.location.pathname === "/") {
  //       history.push("/movies");
  //     }
  //   };

  //   handleUser();
  // });

  return (
    <main className="home">
      <div className="home-background">
        <Header />
        <HomeEnjoy />
        <div className="borders"></div>
        <HomeDownload />
        <div className="borders"></div>
        <HomeWatch />
        <div className="borders"></div>
        <Collapsible />
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        <GetStarted />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
