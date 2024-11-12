// components/textAnimations/TextRotator.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextChange = ({ textArray, interval = 90000 }) => {
  const textRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      currentIndexRef.current =
        (currentIndexRef.current + 1) % textArray.length;
      if (textRef.current) {
        textRef.current.innerText = textArray[currentIndexRef.current];

        gsap.fromTo(
          textRef.current,
          { y: 0 },
          { y: 0, duration: 3, ease: "power3.out" }
        );
      }
    }, interval);

    return () => clearInterval(textInterval);
  }, [textArray, interval]);

  return <span ref={textRef}>{textArray[0]}</span>;
};

export default TextChange;
