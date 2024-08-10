"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Mk() {
  const maintext = useRef(null);
  const secondtext = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent;
    }

    gsap.set(maintext.current, { xPercent: xPercent });
    gsap.set(secondtext.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main
      className="absolute font-archia w-full overflow-x-hidden z-50"
      style={{ top: "calc(100vh - 20vh)" }}
    >
      <div className="relative flex flex-row whitespace-nowrap text-white text-[10vw]">
        <p ref={maintext} className="">
          - Hello world - Hello world -
        </p>
        <p ref={secondtext} className=" absolute   left-[121%]">
          - Hello world - Hello world -
        </p>
      </div>
    </main>
  );
}
