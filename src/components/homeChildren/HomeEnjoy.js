import React from "react";
import tv from "../../images/tv.png";
const HomeEnjoy = () => {
  return (
    <section className="home-enjoy">
      <div className="home-enjoy__text">
        <h3>Enjoy on your TV.</h3>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="home-enjoy__video">
        <div className="home-enjoy__image">
          <img src={tv} alt="netflix tv" />
          <div className="home-enjoy__videos">
            <video autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEnjoy;
