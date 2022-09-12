import React from "react";
import { ProductData } from "../components/ProductData";
import Card from "../components/Card";
const Project = () => {
  return (
    <div className="flex  overflow-scroll h-[90%]">
      <div className="w-[100%]">
        {ProductData.map((value, index) => (
          <Card value={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
