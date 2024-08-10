import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skillshow() {
  const CRef = useRef(null);
  const FRef = useRef(null);
  const F1Ref = useRef(null);
  const SRef = useRef(null);
  const TRef = useRef(null);

  useEffect(() => {
    const Container = CRef.current;
    const Fourth = FRef.current;
    const First = F1Ref.current;
    const Second = SRef.current;
    const Third = TRef.current;
    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(First, { yPercent: 0 });
      gsap.set(Second, { yPercent: 0 });
      gsap.set(Third, { yPercent: 0 });
      gsap.set(Fourth, { yPercent: 0 });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: Container,
          start: "top top",
          end: "bottom top",

          scrub: 2,
        },
      });

      tl.to(First, {
        yPercent: -100,
      });
      tl.to(Second, { yPercent: -100 });
      tl.to(Third, { yPercent: -100 });
      tl.to(Fourth, { yPercent: -100 });
    };
    master.add(setinitialposition).add(Finalanimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={CRef}
        className="flex sticky top-0 h-[100vh] w-full flex-col items-center justify-center px-[5%] font-[sk-modernist]"
      >
        <section className="flex justify-center items-center h-[20%] w-full relative flex-col text-[1rem] md:text-[2.30rem]  lg:text-[2.30rem]  text-white">
          {/* first division */}
          <section className="flex  w-ful flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0  lg:space-y-0 space-x-0 md:space-x-6  lg:space-x-6">
            <span className="flex  items-center justify-center text-2xl px-28  md:px-14 lg:px-14 py-4 md:py-0 lg:py-0   border rounded-full">
              GSAP
            </span>

            <div className="flex   overflow-hidden center justify-center ">
              <span
                ref={F1Ref}
                className=" relative flex w-full translate-y-full items-center justify-center   text-6xl "
              >
                specialize
              </span>
            </div>
            <span className="flex items-center justify-center  border text-base md:text-2xl lg:text-2xl px-14 py-4 md:py-0 lg:py-0 rounded-full">
              NEXT JS
            </span>
          </section>
          {/* first division */}
          {/* second division */}
          <section className="flex  w-ful flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0  lg:space-y-0 space-x-0 md:space-x-6  lg:space-x-6">
            <span className="flex  items-center justify-center invisible md:visible lg:visible text-6xl">
              and
            </span>
            <span className="flex  items-center justify-center text-2xl px-28  md:px-14 lg:px-14 py-4 md:py-0 lg:py-0   border rounded-full">
              GSAP
            </span>

            <div className="flex   overflow-hidden center justify-center ">
              <span
                ref={SRef}
                className=" relative flex w-full translate-y-full items-center justify-center text-6xl "
              >
                different visual technology
              </span>
            </div>
          </section>
          {/* second division */}
          {/* third division */}
          <section className="flex  w-ful flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0  lg:space-y-0 space-x-0 md:space-x-6  lg:space-x-6">
            <div className="flex   overflow-hidden center justify-center ">
              <span
                ref={TRef}
                className=" relative flex w-full translate-y-full items-center justify-center  text-6xl"
              >
                to give a seamless
              </span>
            </div>
            <span className="flex  items-center justify-center text-2xl px-28  md:px-14 lg:px-14 py-4 md:py-0 lg:py-0   border rounded-full">
              GSAP
            </span>
          </section>
          {/* third division */}
          {/* fourth division */}
          <section className="flex  w-ful flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0  lg:space-y-0 space-x-0 md:space-x-6  lg:space-x-6">
            <span className="flex  items-center justify-center text-2xl px-28  md:px-14 lg:px-14 py-4 md:py-0 lg:py-0   border rounded-full">
              GSAP
            </span>
            <div className="flex   overflow-hidden center justify-center ">
              <span
                ref={FRef}
                className=" relative flex w-full translate-y-full items-center justify-center  text-5xl"
              >
                user experince
              </span>
            </div>
          </section>
          {/* fourth division */}
        </section>
      </div>
    </>
  );
}

export default Skillshow;
