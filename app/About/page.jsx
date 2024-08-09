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
    <main className=" flex h-full ">
      {/* <Ballline /> */}
      <section className="relative  flex text-white flex-col h-full  w-full  rounded-lg ">
        {/*eye page */}
        <div className="flex items-center justify-center h-screen w-full bg-black">
          <Main />
        </div>
        {/*eye page */}
        {/*skills page */}
        <section className="flex relative flex-col bg-black  h-[400vh]  w-full">
          <Skillshow />
        </section>
        {/*skills page*/}
        <section className="flex relative flex-row bg-black   h-[120vh]  w-full">
          <Moreinfo />
        </section>

        {/*contact page */}
        <section className="flex  relative flex-col bg-black   h-full w-full ">
          <Contact />
        </section>
      </section>
    </main>
  );
}

export default About;
