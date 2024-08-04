import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SentenceAnimation = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, { opacity: 0, y: 100 });
    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      duration: 1,
    });
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <div ref={textRef} className={`${className}`}>
        {text}
      </div>
    </div>
  );
};

export default SentenceAnimation;
