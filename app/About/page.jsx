"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Rohitharish from "./Rohitharish/page";
import Ballline from "./Rohitharish/page";
import Skillshow from "./subpages/Skillshow";
import Moreinfo from "./subpages/Moreinfo";
import Contact from "./subpages/Contact";
import FadeInText from "../Components/Animatedcomponents/fadein";
import Mk from "../Components/Marqueetrigger.jsx/Mk";
import Main from "../Preloadermainpage/Main";

gsap.registerPlugin(ScrollTrigger);

function About() {
  return (
    <>
      <Ballline />
      <section className="relative  flex text-white flex-col h-full  w-full bg-zinc-800 bg-opacity-60 rounded-lg ">
        {/*eye page */}
        <div className="flex items-center justify-center h-screen w-full bg-black">
          <Main />
        </div>
        {/*eye page */}
        {/*skills page */}
        <section className="flex relative flex-col bg-black  h-[400vh]  w-full">
          <Skillshow />
        </section>
        {/*skills page */}
        <section className="flex relative flex-row bg-black   h-[400vh]  w-full">
          <Moreinfo />
          <div className="flex w-full items-center justify-center text-4xl">
            <FadeInText
              text={`Trust us to elevate your visitors' experience through memorable
                and immersive experiential design.`}
            />
          </div>
        </section>
        {/*contact page */}
        <section className="flex relative flex-col bg-black   h-[60% ]  w-full">
          <Contact />
        </section>
      </section>
    </>
  );
}

export default About;
