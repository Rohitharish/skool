"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Ballline() {
  const containerRef = useRef(null);
  const ballRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const ball = ballRef.current;
    const line = lineRef.current;
    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(line, { xPercent: -100 });
      gsap.set(ball, { x: "-5vw" });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "+=0%",
          end: "+=1000%",
          scrub: true,
        },
      });

      tl.to(line, {
        xPercent: 0,
      });
      tl.to(
        ball,
        {
          x: "80vw",
          ease: "power1.inOut",
        },
        "<"
      );
    };
    master.add(setinitialposition).add(Finalanimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="absolute z-40  flex  text-white flex-col h-[1000vh]   w-full bg-transparent rounded-lg "
      >
        <div className="sticky top-[80%] flex-col  flex items-center justify-center  w-full h-[2%]  overflow-x-clip lack ">
          <div className="flex  h-full w-full ">
            <div
              ref={ballRef}
              className=" h-[1px] w-[15px] md:h-[30px] md:w-[30px] lg:h-[1px] lg:w-[30px] bg-orange-400 rounded-full mt-11"
            ></div>
            <div className="flex relative bg-zinc-500 w-full h-[1px] my-[5%]"></div>
            <div
              ref={lineRef}
              className="flex  absolute bg-white w-full h-[1px] my-[5%]"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ballline;
