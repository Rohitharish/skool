"use client";
import React, { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import useSlideInAnimation from "@/app/motion";

function Servicemotion2() {
  const MySlideInComponent = useSlideInAnimation({
    threshold: 0.2,
    duration: 2,
  });
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <MySlideInComponent>
      <main
        className="gallery h-full lg:h-screen flex
    flex-col
    md:flex-row
    lg:flex-row gap-2 "
      >
        <section
          ref={container}
          className="flex relative animated-gradient3
      w-full h-[400px]
      md:w-[60%] md:h-screen
      lg:w-[60%] lg:h-screen  overflow-hidden rounded-lg"
        >
          <motion.div
            style={{ y }}
            className="w-full h-screen left-6 rounded-lg  absolute  "
          >
            <div className="flex items-center justify-center h-[600px] w-[200px] rounded-lg bg-white shadow-md "></div>
          </motion.div>
        </section>
        <section
          ref={container}
          className="flex  bg-orange-500 flex-col animated-gradient2
        w-full h-[400px]
      md:w-[40%] md:h-screen
      lg:w-[40%] lg:h-screen
      overflow-hidden rounded-lg"
        >
          <motion.div
            style={{ y }}
            className="w-full h-screen  relative  "
          ></motion.div>
        </section>
      </main>
    </MySlideInComponent>
  );
}

export default Servicemotion2;
