"use client";
import React from "react";

export const MenuButton = ({ children }) => {
  return (
    <div className=" group relative cursor-pointer overflow-hidden  text-xl  leading-6 text-white">
      <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[150%] rotate-45 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 ">
        {children}
      </span>
    </div>
  );
};
