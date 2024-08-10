import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Contact() {
  const ContainerRef = useRef(null);
  const INRef = useRef(null);
  const TWRef = useRef(null);
  const LIRef = useRef(null);
  const GMRef = useRef(null);

  const textRef = useRef(null);
  const text = "//CONNECT// ";

  useEffect(() => {
    const Container = ContainerRef.current;
    const Instagram = INRef.current;
    const Twitter = TWRef.current;
    const linkdin = LIRef.current;
    const Gmail = GMRef.current;
    const text = textRef.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(Instagram, { yPercent: 0 });
      gsap.set(linkdin, { yPercent: 0 });
      gsap.set(Twitter, { yPercent: 0 });
      gsap.set(Gmail, { yPercent: 0 });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: Container,
          start: "-30%",
          end: "bottom bottom",
          scrub: 5,
          markers: true,
        },
      });

      tl.to(Twitter, {
        yPercent: -100,
      });
      tl.to(
        linkdin,
        {
          yPercent: -100,
        },
        "<"
      );

      tl.to(Instagram, {
        yPercent: -100,
      });
      tl.to(
        Gmail,
        {
          yPercent: -100,
        },
        "<"
      );
      return tl;
    };

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
            start: "-30%",
            end: "bottom bottom",
            scrub: 8,
          },
        });
      }
    }
    master.add(setinitialposition).add(Finalanimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <section
      ref={ContainerRef}
      className="flex items-center justify-center flex-col h-[90vh]  "
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
      <div className="grid  grid-cols-2   h-full w-full text-4xl">
        <div className=" col-span-2 md:col-span-1 lg:col-span-1  border-[.1px] border-l-0 border-b-0  overflow-hidden ">
          <span
            ref={LIRef}
            className="flex h-full w-full items-center p-5 translate-y-full "
          >
            Linkdin
          </span>
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-1  border-[.1px] border-x-0  border-b-0 overflow-hidden">
          <span
            ref={TWRef}
            className="flex h-full w-full items-center p-5 translate-y-full "
          >
            Twitter
          </span>
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-1   border-[.1px] border-l-0 overflow-hidden ">
          <span
            ref={INRef}
            className="flex h-full w-full items-center p-5  translate-y-full"
          >
            Instagram
          </span>
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-1  border-[.1px] border-x-0 overflow-hidden">
          <span
            ref={GMRef}
            className="flex h-full w-full items-center p-5 translate-y-full "
          >
            rohitharish@gmail.com
          </span>
        </div>
      </div>
      {/* SOCIAL MEDIA */}
    </section>
  );
}

export default Contact;
