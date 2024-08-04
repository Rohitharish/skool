import React, { useEffect, useRef } from "react";
import TextAnimation from "./Wordanimation";
import gsap from "gsap";
import SentenceAnimation from "./Sentenceanim";

function Project() {
  const PRef = useRef(null);
  const B1Ref = useRef(null);
  const BS1Ref = useRef(null);
  const B2Ref = useRef(null);
  const BS2Ref = useRef(null);
  const Web1Ref = useRef(null);
  const Sentence2Ref = useRef(null);
  const Sentence3Ref = useRef(null);
  const Sentence4Ref = useRef(null);
  const textRef = useRef(null);

  const text = "verdant";

  useEffect(() => {
    const ContainerP = PRef.current;
    const box1 = B1Ref.current;
    const subbox1 = BS1Ref.current;
    const Website = Web1Ref.current;
    const Sentence2 = Sentence2Ref.current;
    const Sentence3 = Sentence3Ref.current;
    const Sentence4 = Sentence4Ref.current;

    const master = gsap.timeline();

    //  animatiion these are the initial positon of each component
    const setInitialPosition = () => {
      gsap.set(box1, { xPercent: -100 });
      gsap.set(subbox1, { xPercent: 100 });
      gsap.set(letters, { opacity: 0, y: 100 });
      gsap.set(Website, { opacity: 0, y: 100 });
      gsap.set(Sentence2, { opacity: 0, y: 100 });
      gsap.set(Sentence3, { opacity: 0, y: 100 });
      gsap.set(Sentence4, { opacity: 0, y: 100 });
    };

    // animation including the letter and word animation
    const SentenceAnimation = () => {
      gsap.to([Sentence2, Sentence3, Sentence4], {
        stagger: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: ContainerP,
          start: "center 40%",
          end: "bottom bottom",
          scrub: 5,
        },
      });
    };

    const letters = textRef.current.querySelectorAll(".letter");
    const tl = gsap.timeline({
      ease: "power1.inOut",
    });
    {
      tl.to(letters, {
        opacity: 1,
        y: 0,
        stagger: 0.1,

        duration: 0.6,
      });
      tl.to(Website, {
        opacity: 1,
        y: 0,

        duration: 0.6,
      });
    }

    // animation including the boxes in the project
    const finalAnimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",
      });

      tl.to([box1], {
        xPercent: 0,
        duration: 3,
      });
      tl.to(
        subbox1,
        {
          xPercent: 0,
          duration: 3,
        },
        "<"
      );
    };

    master.add(setInitialPosition).add(finalAnimation).add(SentenceAnimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <div className="flex h-full w-full text-white px-10 my-20 ">
      {/* first project */}
      <div ref={PRef} className="flex flex-col h-full w-full space-y-6 my-4">
        <section className="flex  flex-row h-full w-full">
          <div
            ref={textRef}
            className=" flex  h-full w-full overflow-hidden items-end  text-8xl"
          >
            {text.split("").map((letter, index) => (
              <span key={index} className="letter translate-y-full">
                {letter}
              </span>
            ))}
          </div>
          {/* website link */}
          <div className="flex  h-[10vh] w-full">
            <div className="flex h-full w-full overflow-hidden items-end justify-end">
              <div ref={Web1Ref} className=" text-sm text-white">
                website
              </div>
            </div>
          </div>
          {/* website link */}
        </section>
        {/* box animation */}
        <section className="flex items-center justify-center flex-col h-full w-full overflow-x-hidden ">
          <div ref={B1Ref} className="flex h-screen w-full bg-white"></div>
          <div className="flex absolute items-center justify-center h-[30%] w-[20%] overflow-hidden">
            <div
              ref={BS1Ref}
              className="flex z-50 relative h-full w-full bg-blue-500"
            ></div>
          </div>
        </section>
        {/* sentence animation */}
        <section className="relative w-full h-full flex">
          <div className="flex justify-start h-full w-full overflow-hidden ">
            <div ref={Sentence2Ref} className=" text-sm text-white">
              2024
            </div>
          </div>
          <div className="flex justify-end h-full w-full overflow-hidden ">
            <div ref={Sentence3Ref} className=" text-sm text-white">
              TECHNOLOGY-FRAMER MOTION GSAP NEXT JS
            </div>
          </div>
        </section>
        <section className=" flex items-center justify-center h-full w-full">
          <div className=" flex h-full w-full overflow-hidde items-center justify-center ">
            <div ref={Sentence4Ref} className=" text-sm text-white">
              TECHNOLOGY-FRAMER MOTION GSAP NEXT JS
            </div>
          </div>
        </section>
      </div>
      {/* first project */}
    </div>
  );
}

export default Project;
