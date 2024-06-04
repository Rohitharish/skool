"use client";
import React from "react";
import { Animatedsentence } from "../Animatetext";
import { Animatedword } from "../Animatetext";
import Servicemotion from "./Servicemotion1/Servicemotion";
import Servicemotion2 from "./Servicemotion2/Servicemotion2";
import Servicemotion3 from "./Servicemotion3/Servicemotion3";
import S4 from "./S4/S4";
import { useRef, useEffect } from "react";
import Contact from "../Contact/page";
function Services() {
  const topRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="space-y-2 mx-2 my-2" ref={topRef}>
      <div className="relative flex items-center justify-center  w-full h-screen  bg-zinc-800  bg-opacity-60 rounded-lg ">
        <Animatedsentence
          text={[
            "Hey there! I'm [ Rohit Harish ] developing ,designing web app",
            "and mobile app that ensures a seamless and optimized",
            "user experience across a variety of devices and",
            "screen sizes.",
          ]}
          className="hidden lg:flex md:flex sm:flex items-center justify-center   text-white  text-base font-montserrat
          md:text-3xl
          lg:text-2xl font-light"
        />
        <Animatedsentence
          text={[
            "Hey there! I'm [ Rohit Harish ]",
            "developing ,designing web app",
            "and mobile app that ensures a ",
            "seamless and optimized user",
            "experience across a variety of ",
            "devices and screen sizes.",
          ]}
          className="flex lg:hidden md:hidden sm:hidden items-center justify-center   text-white  text-base font-montserrat
          md:text-3xl
          lg:text-[24px]  font-light  "
        />
      </div>

      <div className=" flex flex-col md:flex-row lg:flex-row h-full md:h-screen lg:h-screen bg-zinc-800  bg-opacity-60 rounded-lg">
        <h1 className="custom-text  border-gray-500 text-white font-light py-20 md:py-0 lg:py-0">
          UI/UX
          <Animatedword
            text=" User Experience (UX) |  Wireframes |  Web Design"
            className="highlight font-normal text-lg  items-center "
          />
        </h1>
        <h1 className="custom-text text-white font-light py-20 md:py-0 lg:py-0">
          Frontend
          <Animatedword
            text=" React js |  Next js |  "
            className="highlight font-normal text-lg items-center "
          />
        </h1>
      </div>

      <div className="relative flex flex-col items-center justify-center  space-y-2 w-full h-screen  bg-zinc-800  bg-opacity-60 rounded-lg font-montserrat ">
        <span className="text-base flex text-white uppercase opacity-50">
          Project-[ Global garden ]
        </span>
        <Animatedsentence
          text={[
            "Global Garden is a company exporting high quality fruits ",
            "and vegetables overseas through air and ship cargo  ",
          ]}
          className="hidden items-center justify-center   text-white  text-base

          md:text-3xl
          lg:text-2xl font-light  lg:flex md:flex sm:flex  "
        />
        <Animatedsentence
          text={[
            "Performance matters, and we take it",
            "seriously. Our development team is",
            "committed to delivering websites that",
            "not only look great but also load fast",
            "and operate efficiently.",
          ]}
          className=" flex items-center justify-center   text-white  text-base

          md:text-3xl
          lg:text-[32px] font-light  lg:hidden md:hidden sm:hidden   "
        />
      </div>
      <div className="space-y-2">
        <Servicemotion />
        <Servicemotion2 />
      </div>
      <div className="relative flex flex-col items-center justify-center  space-y-2 w-full h-screen  bg-zinc-800  bg-opacity-60 rounded-lg font-montserrat ">
        <span className="text-base flex text-white uppercase opacity-50">
          Project-[ Inside ]
        </span>
        <Animatedsentence
          text={[
            "Introducing the Inside Clothing Brand project, a digital platform ",
            "created for a modern clothing brand with minimal design.",
          ]}
          className="hidden items-center justify-center   text-white  text-base

          md:text-3xl
          lg:text-2xl font-light  lg:flex md:flex sm:flex  "
        />
        <Animatedsentence
          text={[
            "Introducing the Inside Clothing ",
            "Brand project, a digital platform ",
            "created for a modern clothing ",
            "brand with minimal design.",
          ]}
          className=" flex items-center justify-center   text-white  text-base

          md:text-3xl
          lg:text-[32px] font-light  lg:hidden md:hidden sm:hidden   "
        />
      </div>
      <div>
        <Servicemotion3 />
      </div>

      <div className="relative flex items-center justify-center  w-full h-screen  bg-zinc-800  bg-opacity-60 rounded-lg font-montserrat ">
        <Animatedsentence
          text={[
            "Optimize code, implement best practices, and leverage the",
            "latest technologies to ensure that your website performs ",
            "seamlessly across various devices and platforms.",
          ]}
          className=" hidden items-center justify-center   text-white  text-base
          md:text-3xl
          lg:text-2xl font-light   lg:flex md:flex sm:flex  "
        />
        <Animatedsentence
          text={[
            "Optimize code, implement best",
            "practices, and leverage the latest",
            "technologies to ensure that your",
            "website performs seamlessly across",
            "various devices and platforms.",
          ]}
          className=" flex items-center justify-center   text-white  text-base

          md:text-3xl
          lg:text-4xl font-light  lg:hidden md:hidden sm:hidden   "
        />
      </div>
      <div>
        <S4 />
      </div>
      <Contact />
    </main>
  );
}

export default Services;
