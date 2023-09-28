import React from "react";
import cross from './img/cross.svg'
import plus from './img/plus.svg'
const FAQ = () => {
  return (
    <>
      <section className="questions">
        <div className="faq-main">
        <div className="text-top">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="text-all"> 
        <div className="text21">
            <div className="flex">
            <h5>What is Nexa Scan?</h5>
          <img src={cross} alt="" />
            </div>
          <p>
            Nexascan is an AI-powered mobile app that simplifies document
            management by scanning and summarizing documents quickly, making
            information more accessible and efficient.
          </p>
          
        </div>
       <div className="text22">
        <h5>How does it generate summary from a document or image?</h5>
        <img src={plus} alt="" />
       </div>
       <div className="text23">
        <h5>Does it require a subscription?</h5>
        <img src={plus} alt="" />
       </div>
       <div className="text24">
        <h5>How can i cancel my subscription?</h5>
        <img src={plus} alt="" />
       </div>
       <div className="text25">
        <h5>Can I change the app's language?</h5>
        <img src={plus} alt="" />
       </div>
       </div>
       </div>
      </section>
    </>
  );
};

export default FAQ;
