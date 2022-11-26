import React from 'react';
import phoneImg from "../assets/images/iphone-hero-bg.svg";

const Hero = () => (
  <section className="hero text-center text-light">
    <div className="hero-bg"></div>
    <div className="hero-particles-container">
      <canvas id="hero-particles"></canvas>
    </div>
    <div className="container-sm">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title mt-0">Landing template for startups</h1>
          <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
          <div className="hero-cta">
            <a className="button button-primary button-wide-mobile" href="#">Get early access</a>
          </div>
        </div>
        <div className="mockup-container">
          <div className="mockup-bg">
            <img src={phoneImg} alt="iPhone illustration" />
          </div>
          <img className="device-mockup" src="dist/images/iphone-hero.png" alt="iPhone Hero" />
        </div>
      </div>
    </div>
  </section>
)

export default Hero;