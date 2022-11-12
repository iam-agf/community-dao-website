import React from "react";
import "./../sass/main.scss";
import Header from "../Header";
import twitter from "../assets/img/twitter.png";
import reddit from "../assets/img/reddit.png";
import discord from "../assets/img/discord.png";
import telegram from "../assets/img/telegram.png";
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
      <div className="about-title">
        Follow us =)
      </div>
      <div className="about-social">
        <a target="_blank" href="https://twitter.com/ChiCommunityDAO"><img className="about-social-logo" src={twitter} alt="twitter" /></a>
        <a target="_blank" href="https://discord.gg/W4DHUF5rxv"><img className="about-social-logo" src={discord} alt="discord" /></a>
        <a target="_blank" href="https://www.reddit.com/r/ChihuahuaChain/"><img className="about-social-logo" src={reddit} alt="reddit" /></a>
        <a target="_blank" href="https://t.me/chihuahua_cosmos"><img className="about-social-logo" src={telegram} alt="telegram" /></a>
      </div>
    </div>
  );
}

export default About;
