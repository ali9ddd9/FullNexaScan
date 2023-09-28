import React from 'react'
import logo from "./img/nexa.svg";
import arrow from "./img/vector.svg";

const Nav = () => {
  return (
 <>
  {/* Starting NavBar */}
  <section className="sec1">
        <div className="header">
          <div className="nav">
            <div className="left-side">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <h4>
                <a href="/">Home</a>
              </h4>
              <h4>
                <a href="/">Features</a>
              </h4>
              <h4>
                <a href="/">How it works</a>
              </h4>
              <h4>
                <a href="/">FAQs</a>
              </h4>
            </div>
            <div className="right-side">
              <h3>Download Now</h3>
              <img src={arrow} alt="Arrow-img" />
            </div>
          </div>
        </div>
      </section>
      {/* Navbar End */}
 </>
  )
}

export default Nav
