"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Moreinfo() {
  const GRef = useRef(null);
  const SEC1Ref = useRef(null);
  const SEC2Ref = useRef(null);
  const L1Ref = useRef(null);
  const IRef = useRef(null);
  const B1ref = useRef(null);

  useEffect(() => {
    const ContainerG = GRef.current;
    const section1 = SEC1Ref.current;
    const section2 = SEC2Ref.current;

    const line = L1Ref.current;
    const Image = IRef.current;
    const Border1 = B1ref.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(section1, { yPercent: 0 });
      gsap.set(section2, { yPercent: -5 });
      gsap.set(line, { height: "0%" });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline();

      tl.to(section1, {
        yPercent: -20,
        scrollTrigger: {
          trigger: ContainerG,
          start: "-10%",
          end: "100%",

          scrub: 1,
        },
      });
      tl.to(section2, {
        yPercent: 5,
        scrollTrigger: {
          trigger: ContainerG,
          start: "-10%",
          end: "100%",

          scrub: 1,
        },
      });
      tl.to(line, {
        height: "100%",
        scrollTrigger: {
          trigger: ContainerG,
          start: "-10%",
          end: "100%",

          scrub: 1,
        },
      });

      return tl;
    };
    master.add(setinitialposition).add(Finalanimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <main
      ref={GRef}
      className="relative flex flex-col  lg:flex-row h-[150vh] w-full   overflow-hidden   border-[0.5px] border-gray-600"
    >
      {/* section 1 animation */}
      <section ref={SEC1Ref} className="flex flex-col h-[200vh] w-[120%] ">
        <div className="flex h-[90%] w-full items-center justify-center section">
          <span className="text-8xl ">
            Creative'
            <br /> dev
          </span>
        </div>
        <div className="flex items-center justify-center h-full w-full  border-[0.5px] border-gray-600">
          <span className="text-5xl  text-white w-3/4">
            I've always wanted to create new things, unique experiences,
          </span>
        </div>
        <div className="flex  items-center justify-center h-full w-full  border-[0.5px] border-gray-600">
          <span className="text-6xl  text-white w-3/4">
            GSAP+Framer-motion+Next-js= myWOrk
          </span>
        </div>
      </section>
      {/* section 1 animation */}
      {/* section 2 animation */}
      <section ref={SEC2Ref} className="flex flex-col h-[200vh] w-full ">
        <div className="flex flex-row h-full w-full ">
          <div className=" flex h-full w-full items-center justify-center">
            <img
              className="h-full w-full grayscale object-cover"
              src="/images/pro.png"
            />
          </div>
          <div className=" flex flex-col h-full w-full items-center justify-center  border-[0.5px] border-gray-600">
            <span className="text-8xl h-full w-full flex items-center justify-center text-white font-[Montserrat] font-400 ">
              23 y/o
            </span>
            <span className="text-3xl  w-full flex items-end justify-end text-white ">
              india
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center h-[120%] w-full text-white  border-[0.5px] border-gray-600">
          <span className="text-9xl text-white ">
            rohit
            <br /> harish
          </span>
        </div>
        <div className="flex h-[80%] w-full bg-black "></div>
      </section>
      {/* section 2 animation */}
      <section className="flex items-center justify-center h-full w-[10%]">
        <div ref={L1Ref} className="h-full w-[1px] bg-gray-600"></div>
        <span className="flex justify-start w-[20%] h-[5%] bg-black  text-2xl text-white rotate-90">
          creative
        </span>
      </section>
    </main>
  );
}

export default Moreinfo;
