"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Moreinfo from "./subpages/Moreinfo";

import Mk from "../Components/Marqueetrigger.jsx/Mk";
import Main from "../Preloadermainpage/Main";

gsap.registerPlugin(ScrollTrigger);

function About() {
  return (
    <main className=" flex h-full ">
      <section className="relative  flex text-white flex-col h-full  w-full  rounded-lg ">
        {/*eye page */}
        <div className="flex items-center justify-center h-full w-full bg-black ">
          <Main />
          <Mk />
        </div>

        {/*eye page */}
        {/*skills page */}

        {/*skills page*/}
        <section className="flex relative flex-row bg-black h-full   w-full">
          <Moreinfo />
        </section>
      </section>
    </main>
  );
}

export default About;
