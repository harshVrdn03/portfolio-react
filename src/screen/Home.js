import React from "react";
import { Link } from "react-router-dom";
import signature from "../components/signature.svg";
import "./Home.css";
const Home = () => {
  return (
    <div className="w-[90%] h-[90%] mx-auto flex  justify-between overflow-hidden pattern">
      <div className="flex flex-col justify-center space-y-4 h-full">
        <h1 className=" text-4xl md:text-8xl font-bold text-black">
          HARSH <span className="text-gray-600 text-3xl">here</span>
        </h1>
        <h1 className="text-xl font-medium text-black">
          HarshVrdn03@gmail.com
        </h1>
        <h1 className="text-xl font-bold text-black">798312**44</h1>
        <Link
          to="/contact"
          className="z-10 text-yellow-300 bg-black inline-block text-center p-2 font-bold rounded-xl text-2xl"
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={signature}
          className="scale-[6] md:scale-[4] -rotate-[90deg] md:-rotate-[40deg] border-4 "
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
