import React from "react";
import "./../sass/main.scss";
import Header from "../Header";
import twitter from "../assets/img/twitter.png";
import reddit from "../assets/img/reddit.png";
import discord from "../assets/img/discord.png";
import telegram from "../assets/img/telegram.png";

function About() {
  return (
    <div className="about">
      <Header />
      <div className="about-title">
        Meet the team
      </div>
      <div className="about-members">
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
