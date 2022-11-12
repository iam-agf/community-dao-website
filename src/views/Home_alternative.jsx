import React from "react";
import Header from "../Header";
import "./../sass/main.scss";
import logo from '.././assets/img/logo.png';
import { useEffect } from "react";

function Home() {

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#000'];
    var visible = true;
    var con = document.getElementById('home-body-description');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
  }

  useEffect(() => {
    consoleText(['Community DAO'], 'text', ['tomato']);
  }, []);


  return (
    <div className="home">
      <Header />
      <div className="home-body">
        <div className="foil-image">
          <img className="logo-big" src={logo} alt="logo" />
        </div>
        <div className="home-body-description">
          <div class='console-container'><span id='text'></span></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
