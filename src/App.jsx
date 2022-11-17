import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./views/About";
import Chains from "./views/Chains";
import Home from "./views/Home";
import Validators from "./views/Validators";
import "./sass/main.scss";
import Member from "./views/Member";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validators" element={<Validators />} />
        <Route path="/member/:name" element={<Member />} />
        <Route path="/chains" element={<Chains />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to={{pathname:"/"}}/>}/>
      </Routes>
    </>
  );
}

export default App;
