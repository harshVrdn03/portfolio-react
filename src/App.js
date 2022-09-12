import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./screen/About";
import Contact from "./screen/Contact";
import Home from "./screen/Home";
import Project from "./screen/Project";
import "./screen/Home.css";
const App = () => {
  return (
    <div className="h-[100vh] bg-[#EAE509]  ">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
