import React from 'react'
import corner from "./img/Rectangle 6.svg";
import mobile5 from "./img/Upload .png";
const Fifth = () => {
  return (
    <>
       {/* Fifth Section Starting */}
       <section className="fifth">
        <div className="fifth-main">
          <div className="fifth-left">
           
            <h3>Unlock Insights with AI-Powered Document Summaries</h3>
            <p>
            Effortlessly create concise and informative summaries from your documents. Our intuitive tool harnesses advanced artificial intelligence algorithms to generate concise, informative summaries from your documents. Whether it's reports, research papers, or extensive articles, our solution not only saves you time but also ensures that critical information is highlighted. 
            </p>
            <p>
            With AI, our tool analyzes and extracts key insights, providing coherent and accurate summaries that enhance your document management and understanding. Elevate your document management and understanding with our document summarization tool.
            </p>
          </div>
          <div className="fifth-right">
          <div className="imgs">
            <div className="corner">
              <img src={corner} alt="" />
            </div>
            <div className="mobile">
              <img src={mobile5} alt="" />
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ending  */}
    </>
  )
}

export default Fifth
