"use client";
import React from "react";
import Contact from "../Contact/page";
import { Animatedsentence } from "../Animatetext";
import Image from "next/image";
import Tools from "./Tools";

function About() {
  return (
    <main className="relative h-full flex flex-col my-2">
      <section className="relative flex flex-col space-y-2 mx-2 h-full">
        <div className="w-full"></div>
        <div className="relative h-full w-full bg-zinc-800 bg-opacity-60 rounded-lg flex items-center justify-center">
          <div className="flex items-center justify-center flex-col relative">
            <Animatedsentence
              text={[
                <span key="n" className="font-bold uppercase text-lg">
                  UI/UX designer & developer
                </span>,
                "",
                "Hello there! I'm Rohit Harish, a passionate and creative front-end developer",
                "and UI designer.",
                " ",
                "I bring a fresh perspective and a strong foundation in modern web ",
                "development technologies and design principles. I am not just a coder;",
                "I am a creator who understands the power of design in crafting memorable",
                "user experiences.",
                "",
                "Ready to dive headfirst into challenging projects, I am on the lookout for ",
                "opportunities to leverage my skills, learn from the best, and leave an",
                "indelible mark in the world of front-end development and UI design.",
                " ",
                "My goal is to create digital experiences that are not only aesthetically appealing,",
                "but also create a meaningful impact on users' lives. Through my user-centered approach,",
                "I seek to improve the interaction between people and technology",
              ]}
              className="hidden md:flex lg:flex items-center justify-center text-white text-base md:text-base lg:text-base font-light font-['Lato'] my-20"
            />
            <Animatedsentence
              text={[
                <span key="n" className="font-bold uppercase text-lg">
                  UI/UX designer & developer
                </span>,
                "",
                "Hello there! I'm Rohit Harish, a",
                "passionate and creative front-end",
                "developer and UI designer.",
                " ",
                "I bring a fresh perspective and a strong",
                "foundation in modern web development",
                "technologies and design principles. I am",
                "not just a coder; I am a creator who",
                "understands the power of design in crafting",
                "crafting memorable user experiences.",
                "",
                "Ready to dive headfirst into challenging",
                "projects, I am on the lookout for opportunities",
                "to leverage my skills, learn from the best, and",
                "leave an indelible mark in the world of front-end",
                "development and UI  design.",
                " ",
                "My goal is to create digital experiences",
                "that are not only aesthetically appealing,",
                "but also create a meaningful impact on users",
                "lives. Through my user-centered approach,",
                "I seek to improve the interaction between",
                "people and technology",
              ]}
              className="flex md:hidden lg:hidden items-center justify-center text-white text-base font-light font-['Lato'] my-10 "
            />
            <button className="text-white my-8 border border-white p-2 rounded-lg flex items-start justify-start">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <section className="relative h-full md:h-screen lg:h-screen w-full flex flex-col md:flex-row lg:flex-row space-y-2 md:space-x-2 lg:space-x-2  rounded-lg items-center justify-center">
          <div className="flex relative bg-zinc-800 h-full md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 bg-opacity-60 flex-col space-y-8 px-4 md:px-20 lg:px-20 justify-center rounded-lg py-20 md:py-0 lg:py-0">
            <h4 className="text-white md:text-2xl lg:text-2xl">Skills</h4>
            <span className="text-white uppercase">- HTML</span>
            <span className="text-white uppercase">- CSS</span>
            <span className="text-white uppercase">- JAVASCRIPT</span>
            <span className="text-white uppercase">
              - User Interface design
            </span>
            <span className="text-white uppercase">- responsive design</span>
            <span className="text-white uppercase">- Version Control</span>
          </div>
          <div className="relative flex flex-col h-full w-full md:w-1/2 lg:w-1/2 space-y-2">
            <div className="relative flex flex-col w-full md:h-1/2 lg:h-screen bg-opacity-60 bg-zinc-800 space-y-8 px-4 md:px-20 lg:px-20 justify-center rounded-lg  py-20 md:py-0 lg:py-0">
              <h4 className="text-white text-base lg:text-2xl">
                Certification
              </h4>
              <span className="text-white uppercase">
                - Meta Front-End Developer Professional Certificate
              </span>
              <span className="text-white uppercase">
                - Google Foundations of User Experience (UX) Design
              </span>
              <span className="text-white uppercase">
                - Google High-Fidelity Designs and Prototypes in Figma
              </span>
            </div>
            <div className="flex relative h-full w-full items-center justify-center bg-opacity-60 bg-zinc-800 py-20 md:py-0 lg:py-0">
              <Tools />
            </div>
          </div>
        </section>
        <Contact />
      </section>
    </main>
  );
}

export default About;
