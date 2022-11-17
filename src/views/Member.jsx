import { Navigate } from 'react-router-dom'
import { useState, React } from 'react';

import "./../sass/main.scss";
import Header from "../Header";
import Footer from "../Footer";
import callisto from "../assets/img/callisto.jpeg";
import karan from "../assets/img/karan.jpeg";
import jorin from "../assets/img/jorin.jpeg";
import nick from "../assets/img/nick.jpeg";
import { twitter, telegram, description } from "./../data";

let images = {
  "karan": karan,
  "nick": nick,
  "callisto": callisto,
  "jorin": jorin
}

function Member() {
  let data = {
    "name": null,
    "twitter": null,
    "telegram": null,
    "content": null,
    "image": null
  };

  let member = window.location.pathname.split("/");
  if (member.length > 2) {
    let person = member[2];
    data.name = person;
    data.twitter = twitter[person];
    data.telegram = telegram[person];
    data.image = images[person];
    data.content = description[person];
  }
  return (
    <div className="member">
      <Header />
      <div className='member-content'>
        <img className="member-content-image" src={data.image} alt="jorin" />
        <div className='member-content-description'>
          <div className='member-content-title'>
            {data.name}
          </div>
          <div className='member-content-text'>
            {data.content}
          </div>
          <div className="member-content-social">
            <div className="member-content-social-text">Reach me in</div>
            <div className="member-content-social-links">
              <a target="_blank" href="https://twitter.com/ChiCommunityDAO">
                <svg fill="#black" fillRule="nonzero" viewBox="0 0 50 50" width="5vh" height="5vh">
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                </svg>
              </a>
              <a target="_blank" href="https://t.me/chihuahua_cosmos">
                <svg fill="#black" fillRule="nonzero" width="5vh" height="5vh" viewBox="0 0 24 24">
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Member;
