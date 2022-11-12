import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./views/About";
import Chains from "./views/Chains";
import Home from "./views/Home";
import Validators from "./views/Validators";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validators" element={<Validators />} />
        <Route path="/chains" element={<Chains />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
