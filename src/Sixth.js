import React from 'react'
import right1 from "./img/Rectangle 8.svg";
import mobile6 from "./img/iphone20.png";
const Sixth = () => {
  return (
    <>
       {/* sixth Section start */}
       <section className="sixth">
        <div className="sixth-main">
          <div className="sixth-left">
              <div className="sixth-imgs">
              <div className="right-corner">
                <img src={right1} alt="" />
              </div> 
              <div className="left-mobile">
                <img src={mobile6} alt="moblie" />
              </div>
            </div> 
          </div>
          <div className="sixth-right">
              <h3>Customize Your Summaries: Tailor with Precision</h3>
              <p>
              Customize your summaries effortlessly using tailored queries. Our platform empowers you to refine generated summaries according to your specific preferences and needs. By inputting relevant queries, you can fine-tune the summary to focus on particular aspects or details within the document. 
              </p>
              <p>
              This flexibility ensures that you receive summaries perfectly aligned with your goals, whether it's extracting key data points, specific topics, or essential insights. Experience a new level of control and precision in document summarization with our query-driven approach, enhancing the relevance and usefulness of your summarized content.
              </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sixth
