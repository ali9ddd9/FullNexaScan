import React from "react";
import Apple from "./img/ada.svg";
import Play from "./img/logo.svg";
import Nexa from "./img/svg.png";
import mobile1 from "./img/Mobile1.png";
import mobile2 from "./img/Moblie2.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section Start */}
      <section className="Hero">
        <div className="main">
          <div className="hero-left">
            <h5>Get 7 day free trial</h5>
            <h3>
              Revolutionize <span>Text Summaries with</span> AI
            </h3>
            <p>
              Effortlessly shorten lengthy text into brief summaries using
              advanced AI technology for better understanding and productivity.
            </p>
            <h6>Available on both</h6>
            <div className="btns">
              <button>
                <img src={Apple} alt="Apple-logo" />
                Apple Store
              </button>
              <button>
                <img src={Play} alt="Playstore-logo" />
                Google Play
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="imgs">
              <div className="img1">
                <img src={mobile1} alt="" id="img1" />
              </div>
              <div className="img2">
                <img src={mobile2} alt="" id="img2" />
              </div>
            </div>
          </div>
        </div>
        <div className="nexa-img">
          <img src={Nexa} alt="nexa logo " />
        </div>
      </section>
    </>
  );
};

export default Hero;
