"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const SpecialText = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.set(words, { opacity: 0, y: 50 });

    const entryAnimation = gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    return () => {
      gsap.to(words, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.1,
      });
    };
  }, []);

  return (
    <div ref={textRef} className={`overflow-hidden ${className}`}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  );
};

export default SpecialText;
