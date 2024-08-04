import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Moreinfo() {
  const MRef = useRef(null);
  const S1Ref = useRef(null);
  const S2Ref = useRef(null);
  const S3Ref = useRef(null);
  const S4Ref = useRef(null);

  useEffect(() => {
    const ContainerM = MRef.current;
    const Sentence1 = S1Ref.current;
    const Sentence2 = S2Ref.current;
    const Sentence3 = S3Ref.current;
    const Sentence4 = S4Ref.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(Sentence1, { yPercent: 0 });
      gsap.set(Sentence2, { yPercent: 0 });
    };
    const Finalanimation = () => {
      const tl = gsap.timeline({
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: ContainerM,
          start: "0%",
          end: "200%",
          scrub: true,
          markers: true,
        },
      });

      tl.to([Sentence1, Sentence2], {
        stagger: 0.1,
        yPercent: 100,
      });
      tl.to(
        [Sentence3, Sentence4],
        {
          stagger: 0.1,
          yPercent: -100,
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
    <section
      ref={MRef}
      className="flex sticky top-0 h-[100vh] w-full flex-col items-start justify-center text-[200px] leading-[1] font-[sK-modernist]"
    >
      {/* first animation */}
      <div className="flex flex-row w-full relative items-start justify-center    ">
        <div className="flex   overflow-hidden  ">
          <span
            ref={S1Ref}
            className=" relative   flex w-full -translate-y-full  "
          >
            w
          </span>
        </div>
        <div className="flex    overflow-hidden  w-3/4  ">
          <span
            ref={S2Ref}
            className=" relative flex w-full -translate-y-full  "
          >
            e
          </span>
        </div>
      </div>
      {/* first animation */}
      {/* second animation */}
      <div className="flex flex-row w-full relative items-start justify-center ">
        <div className="flex   overflow-hidden ">
          <span
            ref={S3Ref}
            className=" relative flex w-full translate-y-full  "
          >
            d
          </span>
        </div>
        <div className="flex    overflow-hidden  w-3/4  ">
          <span
            ref={S4Ref}
            className=" relative flex w-full translate-y-full  "
          >
            o
          </span>
        </div>
      </div>
      {/* second animation */}
    </section>
  );
}

export default Moreinfo;
