import React from "react";
import CardIcon from "./CardIcon";

const Card = ({ value }) => {
  return (
    <div className="md:pt-9 flex flex-col items-center md:flex md:flex-row  w-[90%] mx-auto h-[95%]  md:space-x-10   md:px-7 pb-7 md:mb-20">
      <img
        src={require(`${value.img}`)}
        alt=""
        className=" w-[150px] sm:w-[200px] lg:w-[450px] md:w-[300px]"
      />
      <div className="flex flex-col justify-between py-10 md:space-y-8">
        <h1 className=" text-xl md:text-4xl font-semibold font-mono uppercase">
          {value.title}
        </h1>
        <div className="grid grid-cols-3 text-5xl md:text-8xl w-[90%] md:w-[80%] lg:w-[60%] mx-auto ">
          {value.icon.map((item, i) => (
            <CardIcon item={item} />
          ))}
        </div>
        <p className="text-base md:text-2xl">{value.des}</p>
      </div>
    </div>
  );
};

export default Card;
