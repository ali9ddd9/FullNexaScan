import React from "react";
import corner from "./img/Rectangle 6.svg";
import mobile from "./img/Upload - Capture_iphone13promaxgold_portrait 1.png";

const Third = () => {
  return (
    <>
      {/* Third Hero Starting */}
      <section className="third">
        <div className="upper-text">
          <h2>Effortless Summaries in Seconds: Try It Now!</h2>
          <p>
            Generate quick and user-friendly summaries effortlessly. Simplify
            complex information and save time with our easy, fast summary
            generation tool.
          </p>
        </div>
        <div className="third-main">
          <div className="third-left">
           
            <h3>Your File Upload Experience Simplified</h3>
            <p>
              Experience versatile file uploading methods for ultimate
              convenience. Whether you prefer adding photos, capturing new ones
              on the spot with your device's camera, or uploading existing
              documents, our platform empowers you to seamlessly integrate your
              content.
            </p>
            <p>
              With user-friendly options, you can effortlessly bring your files
              into our system, making data entry and management a breeze.
              Streamline your workflow and get started in just a few clicks,
              regardless of your preferred method.
            </p>
          </div>
          <div className="third-right">
          <div className="imgs">
            <div className="corner">
              <img src={corner} alt="" />
            </div>
            <div className="mobile">
              <img src={mobile} alt="" />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Third;
