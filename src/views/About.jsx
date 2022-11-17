import React from "react";
import "./../sass/main.scss";
import Header from "../Header";
import callisto from "../assets/img/callisto.jpeg";
import karan from "../assets/img/karan.jpeg";
import jorin from "../assets/img/jorin.jpeg";
import nick from "../assets/img/nick.jpeg";

function About() {
  return (
    <div className="about">
      <Header />
      <div className="about-title">
        Meet the team
      </div>
      <div className="about-description">
        The Chihuahua DAO is composed by devoted people that work hard each day to help the Chihuahua Chain keep a healthy community. Click on them to know more.
      </div>
      <div className="about-members">
        <div className="about-members-card">
          <a target="_blank" href="https://twitter.com/Karan_patell1"><img className="about-members-member" src={karan} alt="karan" /></a>
        </div>
        <div className="about-members-card">
          <a target="_blank" href="https://twitter.com/Welding_Cosmos"><img className="about-members-member" src={nick} alt="nick" /></a>
        </div>
        <div className="about-members-card">
          <a target="_blank" href="https://twitter.com/CallistoCosmo"><img className="about-members-member" src={callisto} alt="callisto" /></a>
        </div>
        <div className="about-members-card">
          <a target="_blank" href="https://twitter.com/cosmo_jorin"><img className="about-members-member" src={jorin} alt="jorin" /></a>

        </div>
      </div>
      
    </div>
  );
}

export default About;
