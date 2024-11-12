"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainText from "@/app/Components/TextAnimations/MainText";
import TextChange from "@/app/Components/TextAnimations/TextChange";
import LottieAnimation from "../../Components/Lottie/LottieAnimation";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const GRef = useRef(null);
  const SEC1Ref = useRef(null);
  const SEC2Ref = useRef(null);

  const Animation = ["Framer Motion", "GSAP"];
  const Design = ["Figma", "Photoshop", "illustrator", "blender"];
  const Framework = ["REACT JS", "NEXT JS"];

  useEffect(() => {
    const ContainerG = GRef.current;
    const section1 = SEC1Ref.current;
    const section2 = SEC2Ref.current;

    const master = gsap.timeline();

    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

    if (isLargeScreen) {
      const setinitialposition = () => {
        gsap.set(section1, { yPercent: 0 });
        gsap.set(section2, { yPercent: -5 });
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

        return tl;
      };

      master.add(setinitialposition).add(Finalanimation);
    }

    return () => {
      master.kill();
    };
  }, []);

  return (
    <main
      ref={GRef}
      className="relative flex flex-col lg:flex-row h-full lg:h-[150vh] w-full overflow-hidden border-[0.5px] border-gray-600 text-white"
    >
      {/* section1 */}
      <section
        ref={SEC1Ref}
        className="flex items-center justify-center flex-col h-full w-full "
      >
        <div className="flex  items-center justify-center h-[50vh] lg:h-[120%]  w-full ">
          <MainText
            className="text-6xl lg:text-8xl    w-3/4 uppercase  "
            text="creative web  dev"
          />
        </div>
        <div className="flex flex-col   h-[50vh]  lg:h-full w-full border-[0.5px] border-gray-600 ">
          <div className="flex items-start justify-start p-[2%] ">
            <span className="text-sm border-white border-[0.5px] rounded-full px-[2%] py-[.5%]">
              Animation
            </span>
          </div>
          <div className="flex h-full w-full items-center justify-center text-4xl lg:text-6xl">
            <TextChange textArray={Animation} interval={2000} />
          </div>
        </div>
        <div className="flex flex-col text-6xl  h-[50vh]  lg:h-full w-full border-[0.5px] border-gray-600 ">
          <div className="flex items-start justify-start p-[2%] ">
            <span className="text-sm border-white border-[0.5px] rounded-full px-[2%] py-[.5]">
              Design
            </span>
          </div>
          <div className="flex h-full w-full items-center justify-center text-5xl lg:text-6xl">
            <TextChange textArray={Design} interval={2000} />
          </div>
        </div>
        <div className="h-[10%] w-full flex">
          <LottieAnimation />
        </div>
      </section>
      {/* section1 */}
      {/* section2 */}
      <section ref={SEC2Ref} className="flex flex-col h-full w-full ">
        <div className="flex flex-col lg:flex-row h-[60%] w-full  ">
          <div className="flex w-full h-full ">
            <img
              className=" flex w-full object-cover"
              src="./Profile.jpg"
              alt="Profilepic"
            />
          </div>
          <div className="flex  flex-col h-full w-full">
            <div className="flex h-full w-full items-center justify-center">
              <MainText className="text-9xl  " text="23 y/o" />
            </div>
            <div className="flex items-end justify-end">
              <MainText className="text-xl  " text="india" />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-6xl h-[50vh]  lg:h-full w-full border-[0.5px] border-gray-600">
          <div className="flex items-start justify-start p-[2%] ">
            <span className="text-sm border-white border-[0.5px] rounded-full px-[2%] py-[.5%]">
              Framework
            </span>
          </div>
          <div className="flex h-full w-full items-center justify-center text-5xl lg:text-6xl">
            <TextChange textArray={Framework} interval={2000} />
          </div>
        </div>
      </section>
      {/* section2 */}
    </main>
  );
}

export default About;
