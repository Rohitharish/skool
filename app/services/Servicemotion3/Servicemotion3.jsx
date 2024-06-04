"use client";
import React, { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import useSlideInAnimation from "@/app/motion";
function Servicemotion3() {
  const My2SlideInComponent = useSlideInAnimation({
    threshold: 0.2,
    duration: 2,
  });
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <My2SlideInComponent>
      <main className="gallery h-full flex ">
        <section
          ref={container}
          className="flex w-full h-screen overflow-hidden rounded-lg bg-white"
        >
          <motion.div
            style={{ y }}
            className="w-full h-screen  relative  items-center justify-center "
          >
            <div className="flex relative  items-center justify-center h-3/4 w-[70%] rounded-[20px] bg-white shadow-2xl overflow-hidden">
              <video
                className=" object-cover rounlded-lg-[20px]"
                muted
                autoPlay
                loop
                src={"/lt.mp4"}
              />
            </div>
          </motion.div>
        </section>
      </main>
    </My2SlideInComponent>
  );
}

export default Servicemotion3;
