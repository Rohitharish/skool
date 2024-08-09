import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Moreinfo() {
  const GRef = useRef(null);
  const P1Ref = useRef(null);
  const A1Ref = useRef(null);
  const IRef = useRef(null);

  useEffect(() => {
    const ContainerG = GRef.current;
    const Paragraph = P1Ref.current;
    const Age = A1Ref.current;
    const Image = IRef.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(Paragraph, { yPercent: 100 });
      gsap.set(Age, { yPercent: 0 });
      gsap.set(Image, { yPercent: 0 });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline();

      tl.to(Paragraph, {
        yPercent: 0,
        scrollTrigger: {
          trigger: ContainerG,
          start: "-10%",
          end: "-5%",
          duration: 3,
          scrub: 2,
        },
      });
      tl.to(
        Age,
        {
          stagger: 0.1,
          yPercent: -100,
          scrollTrigger: {
            trigger: ContainerG,
            start: "0%",
            end: "100%",
            scrub: 3,
          },
        },
        "<"
      );
      tl.to(
        Image,
        {
          stagger: 0.1,
          yPercent: -20,
          scrollTrigger: {
            trigger: ContainerG,
            start: "0%",
            end: "100%",
            scrub: 4,
          },
        },
        "<"
      );
    };
    master.add(setinitialposition).add(Finalanimation);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <main ref={GRef} className="flex h-full w-full bg-black">
      <div className="grid grid-cols-12  grid-rows-2  w-full h-full py-[5%] bg-[#D9D9D9] ">
        {/* first section including about button and marquee */}
        <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-black border-[1px] ">
          <div className="flex h-full w-full flex-col">
            <div className="flex items-center justify-center h-full w-full  ">
              <span className="flex items-center justify-center text-7xl bg-[#FB1E00] rounded-full p-2">
                UI DESIGNER
              </span>
            </div>
          </div>
        </section>
        {/* first section including about button and marquee */}
        {/* second one */}
        <section className="col-span-8 border-black border-[1px] flex items-center justify-center">
          <span
            ref={P1Ref}
            className="flex items-center justify-center text-5xl text-black w-3/4"
          >
            I've always wanted to create new things, unique experiences,
          </span>
        </section>
        {/* second one */}
        {/* 23 */}
        <section className="col-span-4 border-black border-[1px] flex items-center justify-center">
          <span
            ref={A1Ref}
            className="flex items-center justify-center text-8xl text-black w-3/4"
          >
            23 Y/O
          </span>
        </section>
        {/* 23 */}
        {/* image  */}
        <section className="col-span-3 border-black border-[1px]  flex items-center justify-center overflow-hidden">
          <img
            ref={IRef}
            className="h-[600px] w-full object-cover grayscale"
            src="images/pro.png"
          />
        </section>
        {/* image  */}
        <section className="col-span-5 border-black border-[1px]  flex items-end justify-center">
          <span className="flex items-end justify-center text-[110px] text-black w-full">
            rohit harish
          </span>
        </section>
      </div>
    </main>
  );
}

export default Moreinfo;
