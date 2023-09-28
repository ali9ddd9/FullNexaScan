import React from "react";
import right1 from "./img/Rectangle 8.svg";
import mobile1 from "./img/iphone 13.png";
const Fourth = () => {
  return (
    <>
      {/* Fourth Section start */}
      <section className="fourth">
        <div className="fourth-main">
          <div className="fourth-left">
              <div className="fourth-imgs">
              <div className="right-corner">
                <img src={right1} alt="" />
              </div> 
              <div className="left-mobile">
                <img src={mobile1} alt="moblie" />
              </div>
            </div> 
          </div>
          <div className="fouth-right">
              <h3>Streamline Data Extraction with Ease</h3>
              <p>
                Unlock the power of AI-driven text extraction with ease. Our
                user-friendly tool simplifies the process of retrieving and
                managing text from a variety of sources, including documents,
                images, and web content. Harness the capabilities of artificial
                intelligence to effortlessly gather data for analysis, research,
                or any other purpose.
              </p>
              <p>
                By automating the text extraction process, we save you valuable
                time and eliminate the need for manual data entry. Experience
                the convenience and accuracy of AI in action, enhancing
                productivity and efficiency in your tasks.
              </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fourth;
