import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const About = () => {
  return (
    <div className="h-[90vh]">
      <div className="flex items-center justify-center w-[80%] mx-auto p-8">
        <img
          src={require("../components/images/signature (1).png")}
          className="scale-[2]"
          alt=""
        />
      </div>
      <div className="w-[90%] lg:w-[70%] md:w-[60%] mx-auto flex flex-col space-y-7">
        <p className=" text-xl md:text-2xl font-mono">
          Hi! my name is <span className="font-semibold">Harsh Vardhan</span>{" "}
          and I am currently an Undergraduate student 2020-2024 of MIT Moradabad
          and i was born and brought up in Moradabad , UttarPradesh <br /> I am
          interested in Programming/Coding and also create some Interesting
          projects as learners{" "}
        </p>
        <p className="text-xl md:text-2xl font-mono">
          Mainly I am interested in web development project
        </p>
        <div className="flex justify-center  space-x-3">
          <a href="https://github.com/harshVrdn03">
            <AiFillGithub size={35} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-vardhan-0659b3200/">
            <AiFillLinkedin size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
