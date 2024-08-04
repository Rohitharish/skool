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
    xPercent += 0.08 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main
      className="absolute font-archia w-full overflow-hidden"
      style={{ top: "calc(100vh - 400px)" }}
    >
      <div className="relative flex whitespace-nowrap text-white text-[280px]">
        <p className="">Hello world -</p>
        <p r className=" absolute  left-[110%]">
          Hello world -
        </p>
      </div>
    </main>
  );
}
