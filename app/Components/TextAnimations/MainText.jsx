"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MainText = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.set(words, { y: 102 });

    const animation = gsap.to(
      words,

      {
        y: -2,
        duration: 2,
        ease: "power3.out",
        stagger: 0.5,

        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={textRef} className={` ${className}`}>
      {text.split(" ").map((word, index) => (
        <span className=" inline-block  overflow-hidden h-full  ">
          <span key={index} className=" inline-block   mr-2   ">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

export default MainText;
