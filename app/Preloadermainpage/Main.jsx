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
      gsap.set(Preloadertext, { yPercent: 0 });
      gsap.set(Reveal, { yPercent: 0 });
      gsap.set(loaderbar, { xPercent: 0 });
      gsap.set(Imagecontainer, { scale: 0 });
      gsap.set(Image, { scale: 4 });
    };
    // initiall animation incloding preloader and the main page

    // animation including the final animation
    const Preloaderanimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",
      });

      tl.to(loaderbar, {
        xPercent: 100,
      });
      tl.to(loaderbar, {
        xPercent: 100,
      });

      tl.to(Preloadertext, {
        yPercent: -200,
        duration: 15,
      });

      tl.to(Reveal, {
        yPercent: -100,
      });
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
      .add(Mainpageanimation(), "-=0.5");

    return () => {
      master.kill();
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-[5%] ">
      <div
        ref={RevealRef}
        className="flex flex-col items-center justify-center absolute top-0 h-[100vh] w-full bg-black overflow-hidden  "
      >
        <div className="flex   space-y-4 items-center justify-center  h-[25px]  overflow-hidden  ">
          <div ref={PLTRef} className="flex flex-col translate-y-full  ">
            <span className=" text-xl ">HOLA</span>
            <span className=" text-xl ">HELLO</span>
            <span className=" text-xl ">नमस्ते</span>
            <span className=" text-xl ">Ciao</span>
            <span className=" text-xl ">HOLA</span>
            <span className=" text-xl ">HELLO</span>
            <span className=" text-xl ">नमस्ते</span>
            <span className=" text-xl ">Ciao</span>
          </div>
        </div>

        <div className="flex border  space-y-4 items-center justify-center  h-[4px] w-[100px]  overflow-hidden  ">
          <div
            ref={loaderRef}
            className="flex h-full w-full flex-col -translate-x-full bg-white  "
          ></div>
        </div>
      </div>
      <div
        ref={IMCRef}
        className="flex w-full lg:w-[90%] h-[80vh] lg:h-[90%] overflow-hidden "
      >
        <img
          ref={IMRef}
          className="w-full h-full object-cover "
          src="images/eye.png"
          alt="Eye pic"
        />
      </div>
    </div>
  );
}

export default Main;
