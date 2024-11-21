"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const ContainerRef = useRef(null);
  const MediaRef = useRef([]);

  const bordersRef = useRef([]);

  useEffect(() => {
    const Container = ContainerRef.current;
    const elements = MediaRef.current;

    const borders = bordersRef.current;

    const master = gsap.timeline();

    // Set initial positions and styles
    const setInitialPosition = () => {
      gsap.set(elements, { yPercent: 500 });
      gsap.set(borders[0], { width: "0%" });
      gsap.set([borders[1], borders[3]], { height: "0%" }, "<");
      gsap.set([borders[2], borders[5]], { width: "0%" }, "<");
      gsap.set(borders[4], { height: "0%" }, "<");
    };

    // Animate social media icons
    const socialMediaAnimation = () => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: Container,
            start: "-60%",
            end: "bottom bottom",
            scrub: 5,
          },
        })
        .to(elements, { yPercent: 0, stagger: 0.3 });
    };

    // Border animations
    const borderAnimation = () => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: Container,
            start: "-50%",
            end: "bottom bottom",
            scrub: 5,
          },
        })
        .to(borders[0], { width: "100%" })
        .to([borders[1], borders[3]], { height: "100%" }, "<")
        .to([borders[2], borders[5]], { width: "100%" }, "<")
        .to(borders[4], { height: "50%" }, "<");
    };

    master
      .add(setInitialPosition)
      .add(socialMediaAnimation)
      .add(borderAnimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <section
      ref={ContainerRef}
      className="flex items-center justify-center flex-col h-[100vh] bg-black w-full  "
    >
      {/* SOCIAL MEDIA */}
      <section className="flex flex-col md:flex-row  lg:flex-row h-full w-full items-start justify-start">
        <div className="relative grid grid-cols-2 grid-rows-2 h-full w-full  ">
          {/* border animations */}
          <div
            ref={(el) => (bordersRef.current[0] = el)}
            className="absolute h-[1px] w-1/2 bg-gray-600"
          ></div>
          <div
            ref={(el) => (bordersRef.current[1] = el)}
            className="absolute h-full w-[1px] bg-gray-600"
          ></div>
          <div
            ref={(el) => (bordersRef.current[2] = el)}
            className="absolute top-1/2 h-[1px] w-full bg-gray-600"
          ></div>
          <div
            ref={(el) => (bordersRef.current[3] = el)}
            className="absolute right-1/2 h-full w-[1px] bg-gray-600"
          ></div>
          <div
            ref={(el) => (bordersRef.current[4] = el)}
            className="absolute left-full h-1/2 w-[1px] bg-gray-600"
          ></div>
          <div
            ref={(el) => (bordersRef.current[5] = el)}
            className="absolute top-full h-[1px] w-1/2 bg-gray-600"
          ></div>
          {/* border animations */}
          <div className=" text-2xl md:text-4xl lg:text-4xl text-white flex items-center justify-center h-full w-full overflow-hidden">
            <span ref={(el) => (MediaRef.current[0] = el)}>Twitter</span>
          </div>
          <div className=" text-2xl md:text-4xl lg:text-4xl text-white flex items-center justify-center overflow-hidden">
            <span ref={(el) => (MediaRef.current[1] = el)}>LinkedIn</span>
          </div>
          <div className=" text-2xl md:text-4xl lg:text-4xl text-white flex items-center justify-center overflow-hidden">
            <span ref={(el) => (MediaRef.current[2] = el)}>Instagram</span>
          </div>
          <div className=" text-2xl md:text-4xl lg:text-4xl text-white flex items-center justify-center overflow-hidden"></div>
        </div>
        <div className="flex flex-col h-full w-full items-center justify-center  border-gray-600 border-[.5px]">
          <span className="text-white text-xl">rohitharish276@gmail.com</span>
          <img className="h-[60%] w-[45%]" src="/3d.png" />
        </div>
      </section>
      {/* SOCIAL MEDIA */}
    </section>
  );
}

export default Contact;
