import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextAnimation = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");
    gsap.set(letters, { opacity: 0, y: 100 });
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.out",
      duration: 0.6,
    });
  }, []);

  return (
    <div ref={textRef} className=" flex  h-full w-full overflow-hidden ">
      {text.split("").map((letter, index) => (
        <span key={index} className="letter translate-y-full">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
