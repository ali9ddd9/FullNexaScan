import React from 'react'
import Apple from "./img/Clip path group.png";
import Play from "./img/Clip path group 2.png";
import nexamobile from "./img/nexa-mo.png";

const Seventh = () => {
  return (
    <>
      <section className='seventh'>
        <div className="seven-main">
            <div className="seven-left">
                <h3>Customize Your Summaries</h3>
                <p>Personalize your summary to match your needs. Customize the generated summary to focus on specific details or aspects, ensuring it aligns perfectly with your goals and preferences.</p>
                    <h6>Download and sign up for free</h6>
                    <div className="btns11">
                <img src={Play} alt="Apple-logo" />
                <img src={Apple} alt="Playstore-logo" />
            </div>
            </div>
            <div className="seven-right">
                <div className="yellow"></div>
                    <div className="nex-mo">
                        <img src={nexamobile} alt="" />
                    </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Seventh
