import React from "react";
import "./../sass/main.scss";
import Header from "../Header";
import Footer from "../Footer";
import callisto from "../assets/img/callisto.jpeg";
import karan from "../assets/img/karan.jpeg";
import jorin from "../assets/img/jorin.jpeg";
import nick from "../assets/img/nick.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <Header />
      <div className="about-content">
        <div className="about-content-title">
          Meet the team
        </div>
        <div className="about-content-description">
          The Chihuahua DAO is composed by devoted people that work hard each day to help the Chihuahua Chain keep a healthy community. Click on them to know more.
        </div>
        <div className="about-content-members">
          <div className="about-content-members-card">
            <Link to="/member/karan"><img className="about-content-members-member" src={karan} alt="karan" /></Link>
          </div>
          <div className="about-content-members-card">
            <Link to="/member/nick"><img className="about-content-members-member" src={nick} alt="nick" /></Link>
          </div>
          <div className="about-content-members-card">
            <Link to="/member/callisto"><img className="about-content-members-member" src={callisto} alt="callisto" /></Link>
          </div>
          <div className="about-content-members-card">
            <Link to="/member/jorin"><img className="about-content-members-member" src={jorin} alt="jorin" /></Link>
          </div>
        </div>
        <div className="about-content-description">
          Click on them to know more
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default About;
