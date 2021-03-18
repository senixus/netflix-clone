import React from "react";
import "./home.scss";
import Collapsible from "../collapse/Collapsible";
import GetStarted from "../getStarted/GetStarted";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomeEnjoy from "../homeChildren/HomeEnjoy";
import HomeDownload from "../homeChildren/HomeDownload";
import HomeWatch from "../homeChildren/HomeWatch";
const Home = () => {
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
