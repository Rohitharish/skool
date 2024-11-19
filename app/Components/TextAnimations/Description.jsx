"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Description = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.set(words, { opacity: 0, y: 102 });

    const animation = gsap.to(
      words,

      {
        y: -2,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.1,

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

export default Description;
