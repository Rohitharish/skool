"use client";
import React, { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Animatedsentence } from "@/app/Animatetext";

function S4() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main className="gallery h-screen flex 
    flex-col
    md:flex-row
    lg:flex-row
    gap-2 ">
       <section className="relative flex flex-col items-start justify-center  px-20 space-y-2
       w-full
       md:w-1/2
       lg:w-1/2
      h-screen  bg-zinc-800  bg-opacity-60 rounded-lg ">
        <span className="text-base flex  items-start text-white uppercase opacity-50 font-['Lato'] ">
          micro-interactions
        </span>
        <Animatedsentence
          text={[
            "Skillfully crafted animations. Whether it's",
            "subtle micro-interactions or bold animated",
            "elements,",
          ]}
          className=" flex items-center justify-center   text-white  
          text-base
          md:text-3xl
          lg:text-2xl font-light "
        />
     
      </section>
      <section
        ref={container}
        className="flex 
        w-full h-full
        md:w-1/2 md:h-full
        lg:w-1/2
       lg:h-full overflow-hidden rounded-lg"
      >
        <motion.div style={{ y }} className="w-full h-full  relative  ">
        <video
            className=" 
    xs:w-screen xs:h-[400px]   xs:object-cover
    lg:w-full lg:h-[150vh] object-cover"
            muted
            autoPlay
            controls
            loop
            src={"/images/vd.mp4"}
          />
        </motion.div>
      </section>
     
    </main>
  );
}

export default S4;
