import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Contact() {
  const ContainerRef = useRef(null);
  const INRef = useRef(null);
  const TWRef = useRef(null);
  const LIRef = useRef(null);
  const GMRef = useRef(null);
  const border1 = useRef(null);
  const border2ref = useRef(null);
  const border3ref = useRef(null);
  const border4ref = useRef(null);
  const border5ref = useRef(null);
  const border6ref = useRef(null);

  const textRef = useRef(null);
  const text = "[CONNECT] ";

  useEffect(() => {
    const Container = ContainerRef.current;
    const Instagram = INRef.current;
    const Twitter = TWRef.current;
    const linkdin = LIRef.current;
    const Gmail = GMRef.current;
    const text = textRef.current;
    const border = border1.current;
    const border2 = border2ref.current;
    const border3 = border3ref.current;
    const border4 = border4ref.current;
    const border5 = border5ref.current;
    const border6 = border6ref.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(Instagram, { yPercent: 500 });
      gsap.set(linkdin, { yPercent: 500 });
      gsap.set(Twitter, { yPercent: 500 });
      gsap.set(Gmail, { yPercent: 500 });
      gsap.set(border, { width: "0%" });
      gsap.set(border2, { height: "0%" });
      gsap.set(border3, { width: "0%" });
      gsap.set(border4, { height: "0%" });
      gsap.set(border5, { height: "0%" });
      gsap.set(border6, { width: "0%" });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: Container,
          start: "-30%",
          end: "bottom bottom",
          scrub: 5,
        },
      });

      tl.to(Twitter, {
        yPercent: 0,
      });
      tl.to(linkdin, {
        yPercent: 0,
      });

      tl.to(Instagram, {
        yPercent: 0,
      });
      tl.to(Gmail, {
        yPercent: 0,
      });
      return tl;
    };

    // border animations
    const borderanimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: Container,
          start: "0%",
          end: "bottom bottom",
          scrub: 5,
        },
      });

      tl.to(border, {
        width: "100%",
      });

      tl.to(
        border2,
        {
          height: "100%",
        },
        "<"
      );
      tl.to(
        border3,
        {
          width: "100%",
        },
        "<"
      );
      tl.to(
        border4,
        {
          height: "100%",
        },
        "<"
      );
      tl.to(
        border5,
        {
          height: "50%",
        },
        "<"
      );
      tl.to(
        border6,
        {
          width: "50%",
        },
        "<"
      );

      return tl;
    };
    // border animations

    const letters = textRef.current.querySelectorAll(".letter");
    {
      const tl = gsap.timeline({
        ease: "power1.inOut",
      });
      {
        tl.to(letters, {
          opacity: 1,
          y: 0,
          stagger: 0.4,

          duration: 1,
          scrollTrigger: {
            trigger: Container,
            start: "-10%",
            end: "-5%",
            scrub: 8,
          },
        });
      }
    }
    master.add(setinitialposition).add(Finalanimation).add(borderanimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <section
      ref={ContainerRef}
      className="flex items-center justify-center flex-col h-[150vh]  bg-black w-full "
    >
      <div className="flex h-1/2 w-full items-center justify-center text-white ">
        <div
          ref={textRef}
          className=" flex  h-full w-full overflow-hidden justify-center items-center
             text-4xl  md:text-6xl lg:text-[200px]"
        >
          {text.split("").map((letter, index) => (
            <span key={index} className="letter translate-y-full">
              {letter}
            </span>
          ))}
        </div>
      </div>
      {/* SOCIAL MEDIA */}
      <section className="flex flex-col md:flex-row lg:flex-row h-full w-full items-start justify-start">
        <div class="relative grid grid-cols-2 grid-rows-2  h-full w-full md:w-1/2 lg:w-full  ">
          {/* border animations */}
          <div
            ref={border1}
            className=" absolute h-[1px] w-1/2 bg-gray-600"
          ></div>
          <div
            ref={border2ref}
            className=" absolute h-full w-[1px] bg-gray-600"
          ></div>
          <div
            ref={border3ref}
            className=" absolute top-1/2 h-[1px] w-full bg-gray-600"
          ></div>
          <div
            ref={border4ref}
            className=" absolute right-1/2 h-full w-[1px] bg-gray-600"
          ></div>
          <div
            ref={border5ref}
            className=" absolute left-full h-1/2 w-[1px] bg-gray-600"
          ></div>
          <div
            ref={border6ref}
            className=" absolute top-full h-[1px] w-1/2 bg-gray-600"
          ></div>
          {/* border animations */}
          <div className=" text-4xl text-white flex items-center justify-center h-full w-full  overflow-hidden">
            <span ref={TWRef} className="">
              Instagram
            </span>
          </div>
          <div class=" text-4xl text-white flex items-center justify-center  overflow-hidden">
            <span ref={LIRef} className="">
              Twitter
            </span>
          </div>
          <div class=" text-4xl text-white flex items-center justify-center  overflow-hidden">
            <span ref={INRef} className="">
              Linkdin
            </span>
          </div>
          <div class=" text-4xl text-white flex items-center justify-center  overflow-hidden"></div>
        </div>
        <div className="flex flex-col  h-full w-full items-center justify-center ">
          <span className="text-white text-xl">rohitharish276@gmail.com</span>
          <img className=" h-[60%] w-[45%]" src="/3d.png" />
        </div>
      </section>
      {/* SOCIAL MEDIA */}
    </section>
  );
}

export default Contact;
