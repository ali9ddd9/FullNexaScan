import React from 'react'
import logo from "./img/Group 1.svg";
import social from "./img/Social.svg";

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className="footer-main">
            <div className="logo2">
                <img src={logo} alt="" />
            </div>
            <div className="nav-parts">
                <h4><a href="/">About</a></h4>
                <h4><a href="/">Features</a></h4>
                <h4><a href="/">FAQ's</a></h4>
                <h4><a href="/">Download</a></h4>
            </div>
            <div className="social-media">
                <img src={social} alt="" />
            </div>
            <div className="footer-text">
                <h6>© Copyright 2023, All Rights Reserved by Nexa Scan</h6>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
