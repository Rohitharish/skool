import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Mk from "../Components/Marqueetrigger.jsx/Mk";

function Main() {
  const loaderRef = useRef(null);
  const PLTRef = useRef(null);
  const RevealRef = useRef(null);
  const IMCRef = useRef(null);
  const IMRef = useRef(null);
  const MKRef = useRef(null);

  useEffect(() => {
    const Preloadertext = PLTRef.current;
    const Reveal = RevealRef.current;
    const loaderbar = loaderRef.current;
    const Imagecontainer = IMCRef.current;
    const Image = IMRef.current;

    const master = gsap.timeline();
    // initiall animation incloding preloader and the main page
    const setInitialPosition = () => {
      gsap.set(Preloadertext, { yPercent: 100, scale: 1 });
      gsap.set(Reveal, { opacity: 1 });
      gsap.set(loaderbar, { xPercent: 0 });
      gsap.set(Imagecontainer, { scale: 0 });
      gsap.set(Image, { scale: 4 });
    };
    // initiall animation incloding preloader and the main page

    // animation including the final animation
    const Preloaderanimation = () => {
      const tl = gsap.timeline();

      tl.to(loaderbar, {
        xPercent: 200,
        duration: 5,
      });

      tl.to(Preloadertext, {
        yPercent: -100,

        duration: 1,
        ease: "cubic-bezier(0.1, 0.1, 0.9, 0.9)",
      });

      tl.to(Preloadertext, {
        scale: 0,
        rotate: 360,

        duration: 2,
        ease: "cubic-bezier(0.1, 0.1, 0.9, 0.9)",
      });

      tl.to(
        Reveal,
        {
          opacity: 0,
          ease: "cubic-bezier(0.1, 0.1, 0.9, 0.9)",
          duration: 3,
        },
        "-=1"
      );
      return tl;
    };

    // animation including the final animation

    //  animation in the main page section
    const Mainpageanimation = () => {
      const tl = gsap.timeline();

      tl.to(Image, {
        scale: 1,
        duration: 4,
        ease: "cubic-bezier(0.1, 0.1, 0.9, 0.9)",
      });
      tl.to(
        Imagecontainer,
        {
          scale: 1,
          duration: 4,
          ease: "cubic-bezier(0.1, 0.1, 0.9, 0.9)",
        },
        "<"
      );

      return tl;
    };

    //  animation in the main page section

    master
      .add(setInitialPosition())
      .add(Preloaderanimation())
      .add(Mainpageanimation(), "-=4");

    return () => {
      master.kill();
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center    ">
      <div className="flex h-full w-full  justify-end ">
        <span className="flex  ">FRONT-END 002</span>
      </div>
      <div
        ref={RevealRef}
        className="flex flex-col items-center justify-center absolute top-0 h-[100vh] w-full bg-black overflow-hidden  z-[90] "
      >
        <div className="flex   space-y-4 items-center justify-center  h-[50px] w-[200px]  overflow-hidden  ">
          <div ref={PLTRef} className="flex flex-row translate-y-full  ">
            <span className=" text-xl h-[20px] w-[20px] bg-white "></span>
          </div>
        </div>

        <div className="flex  space-y-4 items-center justify-center  h-[4px] w-[100px]  overflow-hidden  ">
          <div
            ref={loaderRef}
            className="flex h-full w-full flex-col -translate-x-full bg-white  "
          ></div>
        </div>
      </div>
      <div
        ref={IMCRef}
        className="flex items-center justify-center w-full lg:w-[85%] h-[90vh] lg:h-[65vh] overflow-hidden my-[8%] "
      >
        <video
          autoPlay
          muted
          loop
          ref={IMRef}
          className="flex items-center justify-center w-full h-full object-cover "
          src="/space.mp4"
        />
      </div>
    </div>
  );
}

export default Main;
