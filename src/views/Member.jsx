import { Navigate } from 'react-router-dom'
import { useState, React } from 'react';

import "./../sass/main.scss";
import Header from "../Header";
import Footer from "../Footer";
import callisto from "../assets/img/callisto.jpeg";
import karan from "../assets/img/karan.jpeg";
import jorin from "../assets/img/jorin.jpeg";
import nick from "../assets/img/nick.jpeg";
import { twitter, telegram } from "./../data";

function Member() {
  let data = {
    "name": null,
    "twitter": null,
    "telegram": null,
    "content": null
  };

  let member = window.location.pathname.split("/");
  if (member.length > 2) {
    let person = member[2];
    data.name = person;
    data.twitter = twitter[person];
    data.telegram = telegram[person];
  }
  return (
    <div className="member">
      <Header />
      <div className='member-content'>
        {data.name}
      </div>
      <Footer />
    </div>
  );
}

export default Member;
