import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Contact() {
  const ContainerRef = useRef(null);
  const INRef = useRef(null);
  const TWRef = useRef(null);
  const LIRef = useRef(null);

  const textRef = useRef(null);
  const text = "rohit ";

  useEffect(() => {
    const Container = ContainerRef.current;
    const Instagram = INRef.current;
    const Twitter = TWRef.current;
    const linkdin = LIRef.current;
    const text = textRef.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(Instagram, { yPercent: 0 });
      gsap.set(linkdin, { yPercent: 0 });
      gsap.set(Twitter, { yPercent: 0 });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",
        stagger: 0.8,

        scrollTrigger: {
          trigger: Container,
          start: "-30%",
          end: "bottom bottom",
          scrub: 5,
          markers: true,
        },
      });

      tl.to(Instagram, {
        yPercent: -100,
      });
      tl.to(Twitter, {
        yPercent: -100,
      });
      tl.to(linkdin, {
        yPercent: -100,
      });

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
            scrub: 5,
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
      className="flex items-center justify-center flex-col h-[80vh] px-[5%] "
    >
      <div className="flex h-1/2 w-full items-center justify-start text-white ">
        <div
          ref={textRef}
          className=" flex  h-full w-full overflow-hidden justify-start items-center
             lg:justify-start md:items-end lg:items-end text-4xl  md:text-8xl lg:text-[200px]"
        >
          {text.split("").map((letter, index) => (
            <span key={index} className="letter translate-y-full">
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col  h-1/2 w-full items-start justify-end text-white  text-4xl space-y-6">
        <div className="flex h-full w-full overflow-hidden">
          <span ref={INRef} className=" h-full w-full translate-y-full">
            Instagram
          </span>
        </div>
        <div className="flex h-full w-full overflow-hidden">
          <span ref={TWRef} className=" h-full w-full translate-y-full">
            Linkdin
          </span>
        </div>
        <div className="flex h-full w-full overflow-hidden">
          <span ref={LIRef} className=" h-full w-full translate-y-full">
            Twitter
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
