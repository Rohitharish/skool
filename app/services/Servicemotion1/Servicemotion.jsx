"use client";
import React, { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import useSlideInAnimation from "@/app/motion";

function Servicemotion() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const SlideInComponent = useSlideInAnimation();
  return (
    <SlideInComponent>
      <main className="gallery h-full flex flex-col items-center justify-center  ">
        <section
          ref={container}
          className="flex w-full h-[100vh] overflow-hidden rounded-lg bg-blue-600 animated-gradient"
        >
          <motion.div
            style={{ y }}
            className="flex items-center justify-center w-full h-screen relative top-[100px]"
          >
            <div className="flex relative  items-center justify-center h-3/4 w-[70%] rounded-[20px] bg-white shadow-2xl overflow-hidden">
              <video
                className=" object-fit rounlded-lg-[20px]"
                muted
                autoPlay
                loop
                src={"/jt.mp4"}
              />
            </div>
          </motion.div>
        </section>
      </main>
    </SlideInComponent>
  );
}

export default Servicemotion;
