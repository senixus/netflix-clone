import React from "react";
import devices from "../../images/device-pile.png";
const HomeWatch = () => {
  return (
    <section className="home-watch">
      <div className="home-watch__text">
        <h3>Watch everywhere.</h3>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
      <div className="home-watch__tv">
        <img src={devices} alt="netflix devices" />
        <div className="home-watch__video">
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default HomeWatch;
