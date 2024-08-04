import { useInView } from "framer-motion";
import React from "react";

const Inifinate = ({ text }) => {
  

  return (
    <div className=" flex relative text-[32px] h-[40px] cursor-pointer items-center whitespace-nowrap overflow-hidden w-[200px] border-[.5px] border-solid rounded-[100px]">
      <span className="animate-slide">{text}</span>
      <span className="animate-slide">{text}</span>
    </div>
  );
};

export default Inifinate;
