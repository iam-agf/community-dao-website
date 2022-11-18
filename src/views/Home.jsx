import React from "react";
import Header from "../Header";
import "./../sass/main.scss";
import { useEffect } from "react";
import Footer from "../Footer";

function Home() {

  function consoleText(words) {
    var inputText = "Community DAO";
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById('text')
    target.setAttribute('style', 'color:rgb(245, 193, 36); text-shadow: 1vh 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000')
    window.setInterval(function () {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = inputText.substring(0, letterCount)
        window.setTimeout(function () {
          x = 1;
          target.setAttribute('style', 'color:rgb(245, 193, 36); text-shadow: 1vh 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000')
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === inputText.length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = inputText.substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
  }

  useEffect(() => {
    consoleText();
  }, []);


  return (
    <div className="home">
      <Header />
      <div className="home-title">
        <div class='console-container'><span id='text'></span></div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
