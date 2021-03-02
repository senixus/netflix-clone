import React from "react";
import mobile from "../../images/mobile-0819.jpg";
import phoneBox from "../../images/phone-box.png";

const HomeDownload = () => {
  return (
    <section className="home-download util">
      <div className="home-download__phone">
        <img src={mobile} alt="netflix mobile" />
        <div className="download">
          <div className="download-image">
            <img src={phoneBox} alt="netflix phone" />
          </div>
          <div className="download-text">
            <div className="download-text__first">Stranger Things</div>
            <div className="download-text__second">Downloading...</div>
          </div>
        </div>
      </div>
      <div className="home-download__text">
        <h3>Download your shows to watch offline.</h3>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
    </section>
  );
};

export default HomeDownload;
