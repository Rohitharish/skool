// components/Preloader.js
"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import LottieAnimation from "../Lottie/LottieAnimation";

const Preloader = ({ children }) => {
  const preloaderRef = useRef();
  const jRef = useRef();
  const uRef = useRef();
  const ishnRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        jRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.out" }
      )

      .to(jRef.current, {
        x: "-55px",
        duration: 0.5,
        ease: "power4.out",
      })

      .to(jRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.5,
      })

      .to(preloaderRef.current, {
        y: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 0.5,
        onComplete: () => setLoading(false),
      });

    return () => timeline.kill();
  }, []);

  if (!loading) return <>{children}</>;

  return (
    <div
      ref={preloaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",

        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      <div className="flex items-center flex-row -space-x-14 text-4xl overflow-y-clip ">
        <LottieAnimation />
      </div>
    </div>
  );
};

export default Preloader;
