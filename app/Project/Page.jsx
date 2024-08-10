"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Project() {
  const PRef = useRef(null);
  const B1Ref = useRef(null);
  const BS1Ref = useRef(null);
  const Web1Ref = useRef(null);
  const Sentence2Ref = useRef(null);
  const Sentence3Ref = useRef(null);
  const Sentence4Ref = useRef(null);
  const textRef = useRef(null);

  const text = "inside";

  useEffect(() => {
    const ContainerP = PRef.current;
    const box1 = B1Ref.current;
    const subbox1 = BS1Ref.current;
    const Website = Web1Ref.current;
    const Sentence2 = Sentence2Ref.current;
    const Sentence3 = Sentence3Ref.current;
    const Sentence4 = Sentence4Ref.current;

    const master = gsap.timeline();

    //  animatiion these are the initial positon of each component
    const setInitialPosition = () => {
      gsap.set(box1, { xPercent: -100 });
      gsap.set(subbox1, { xPercent: 100 });
      gsap.set(letters, { opacity: 0, y: 100 });
      gsap.set(Website, { opacity: 0, y: 100 });
      gsap.set(Sentence2, { opacity: 0, y: 100 });
      gsap.set(Sentence3, { opacity: 0, y: 100 });
      gsap.set(Sentence4, { opacity: 0, y: 100 });
    };

    // animation including the letter and word animation
    const SentenceAnimation = () => {
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 769px)": function () {
          gsap.to([Sentence2, Sentence3, Sentence4], {
            stagger: 0.5,
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
              trigger: ContainerP,
              start: "center 40%",
              end: "bottom bottom",
              scrub: 5,
            },
          });
        },

        // Mobile
        "(max-width: 768px)": function () {
          gsap.to([Sentence2, Sentence3, Sentence4], {
            stagger: 0.3,
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.8,
            scrollTrigger: {
              trigger: ContainerP,
              start: "20% 20%",
              end: "bottom bottom",
              scrub: 3,
            },
          });
        },
      });
    };

    const letters = textRef.current.querySelectorAll(".letter");
    {
      const tl = gsap.timeline({
        ease: "power1.inOut",
      });
      {
        tl.to(letters, {
          opacity: 1,
          y: 0,
          stagger: 0.1,

          duration: 0.6,
        });
        tl.to(Website, {
          opacity: 1,
          y: 0,

          duration: 0.6,
        });
      }
    }
    // animation including the boxes in the project
    const finalAnimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",
      });

      tl.to([box1], {
        xPercent: 0,
        duration: 3,
      });
      tl.to(
        subbox1,
        {
          xPercent: 0,
          duration: 3,
        },
        "<"
      );
    };

    master.add(setInitialPosition).add(finalAnimation).add(SentenceAnimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <div className="flex h-full w-full text-white px-10   my-10">
      {/* first project */}
      <div
        ref={PRef}
        className="flex flex-col h-full   lg:h-full w-full  space-y-6 my-4"
      >
        <section className="flex flex-row h-full w-full">
          <div
            ref={textRef}
            className=" flex  h-full w-full overflow-hidden justify-start items-center
             lg:justify-start md:items-end lg:items-end text-4xl  md:text-8xl lg:text-8xl"
          >
            {text.split("").map((letter, index) => (
              <span key={index} className="letter translate-y-full">
                {letter}
              </span>
            ))}
          </div>
          {/* website link */}
          <div class="btn-container rounded-full overflow-clip">
            <button ref={Web1Ref}>
              <span class="text">website</span>
              <div class="icon-container">
                <div class="icon icon--left">-</div>
                <div class="icon icon--right">-</div>
              </div>
            </button>
          </div>
          {/* website link */}
        </section>
        {/* box animation */}
        <section className="flex items-center justify-center flex-col h-[60vh] md:h-full lg:h-full w-full overflow-x-hidden ">
          <video
            loop
            autoPlay
            ref={B1Ref}
            className="flex object-cover  h-full w-full bg-white"
            src="/inside.mp4"
          />
          <div className="flex absolute items-center justify-center h-[100px] md:h-[200px] lg:h-[250px] w-[100px] md:w-[200px] lg:w-[250px] overflow-hidden">
            <video
              loop
              autoPlay
              ref={BS1Ref}
              className="flex object-cover  h-full w-full bg-white"
              src="/log.mp4"
            />
          </div>
        </section>
        {/* sentence animation */}
        <section className="relative w-full h-full flex">
          <div className="flex justify-start h-full w-full overflow-hidden ">
            <div ref={Sentence2Ref} className=" text-sm text-white">
              2024
            </div>
          </div>
          <div className="flex justify-end h-full w-full overflow-hidden ">
            <div ref={Sentence3Ref} className=" text-sm text-white">
              TECHNOLOGY-FRAMER MOTION GSAP NEXT JS
            </div>
          </div>
        </section>
        <section className=" flex items-center justify-center h-full w-full">
          <div className=" flex h-full w-full overflow-hidden items-center justify-center ">
            <div ref={Sentence4Ref} className=" text-sm text-white">
              TECHNOLOGY-FRAMER MOTION GSAP NEXT JS
            </div>
          </div>
        </section>
      </div>
      {/* first project */}
    </div>
  );
}

export default Project;
