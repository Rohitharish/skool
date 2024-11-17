import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import MainText from "../TextAnimations/MainText";
import TextChange from "../TextAnimations/TextChange";
import Link from "next/link";
import Description from "../TextAnimations/Description";

const data = [
  {
    image: "/Profile.jpg",
    title: "MICROSOFT",
    description:
      "redesign of the Microsoft Surface  Headphones,    combining Figma ,  Next.js ,GSAP animations,    and  React Three Fiber    3D visuals.",
    Number: "0 0 1",
    link: "https://surface-two.vercel.app/",
  },
  {
    image: "/untitled.png",
    title: "Portfolio",
    description:
      "Portfolio showcasing    creative    designs and    interactive   projects creating dynamic visuals",
    Number: "0 0 2",
    link: "https://jishnu-gamma.vercel.app/",
  },
  {
    image: "/laks.png",
    title: "Astral grid",
    description:
      "A gallery of innovative websites inspired by      Awwwards, featuring   cutting-edge designs and interactive    experiences.",
    Number: "0 0 3",
    link: "https://astral-grid.vercel.app/",
  },
];

const GridComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const numberRef = useRef(null);
  const Animation = ["technology", "Framer Motion", "GSAP", "next js"];

  const handleNext = () => {
    animateOut(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    });
  };

  // const handlePrevious = () => {
  //   animateOut(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? data.length - 1 : prevIndex - 1
  //     );
  //   });
  // };

  // Exit animation
  const animateOut = (callback) => {
    const timeline = gsap.timeline({
      onComplete: callback,
    });

    timeline.to(imageRef.current, { opacity: 0, duration: 0.5 });
    timeline.to(
      [titleRef.current, descriptionRef.current, numberRef.current],
      {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1,
      },
      "<"
    );
  };

  const animateIn = () => {
    const timeline = gsap.timeline();

    gsap.set(imageRef.current, { opacity: 0 });
    gsap.set([titleRef.current, descriptionRef.current, numberRef.current], {
      y: -20,
    });

    timeline.to(imageRef.current, { opacity: 1, duration: 0.5 });
    timeline.to(
      [titleRef.current, descriptionRef.current, numberRef.current],
      {
        y: 0,
        duration: 0.3,
        stagger: 0.1,
      },
      "<"
    );
  };

  useEffect(() => {
    animateIn();
  }, [currentIndex]);

  return (
    <div className="flex h-full w-full flex-col items-center ">
      <div className="grid grid-cols-12 grid-rows-2  h-full  w-full  ">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {index === currentIndex && (
              <>
                <div className="  col-span-12 lg:col-span-7 row-span-2 overflow-hidden h-[50vh] lg:h-[120vh] border-[0.5px] border-gray-600">
                  <img
                    src={item.image}
                    alt={item.title}
                    ref={imageRef}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className=" col-span-12 lg:col-span-5 flex flex-row items-center justify-center border-[0.5px] border-gray-600">
                  <div className="flex flex-row relative h-full w-full items-center justify-center border-[0.5px] border-gray-600 border-y-0">
                    <div
                      className="flex h-[30vh]  lg:h-full items-center justify-center"
                      ref={descriptionRef}
                    >
                      <Description
                        className=" text-sm  w-[70%] uppercase text-zinc-400 leading-tight "
                        text={item.description}
                      />
                    </div>
                  </div>
                  <div className=" hidden relative w-[40%] h-full  items-end justify-center pb-[10%] overflow-hidden  md:flex lg:flex  ">
                    <div ref={numberRef}>
                      <MainText
                        className="text-white text:4xl lg:text-6xl -rotate-90 "
                        text={item.Number}
                      />
                    </div>
                  </div>
                </div>

                <div className=" col-span-12 lg:col-span-5 p-[4%] flex items-end justify-end border-[0.5px] border-gray-600 lg:border-l-0">
                  <div className="flex" ref={titleRef}>
                    <MainText
                      className="text-white text-4xl lg:text-7xl uppercase"
                      text={item.title}
                    />
                  </div>
                </div>
              </>
            )}
          </React.Fragment>
        ))}

        <div className="h-[20vh] lg:h-full flex items-center col-span-12 lg:col-span-7 text-white border-[0.5px] border-gray-600  text-3xl uppercase">
          <div className="flex items-center h-full w-full  border-gray-500 border-r-[.1px] p-4 ">
            <TextChange textArray={Animation} interval={2000} />
          </div>
          <div className="flex items-center justify-center h-full w-[12%] ">
            <div className="h-4 w-4 rounded-full bg-white "></div>
          </div>
        </div>
        <div className="h-[20vh] lg:h-full  col-span-12 lg:col-span-5 flex flex-col lg:flex-row text-white border-[0.5px] border-gray-600 ">
          <div className="flex text-white justify-end items-center h-full w-full   ">
            <button
              onClick={handleNext}
              className="   uppercase text-3xl   rounded-none "
            >
              NEXT
            </button>
          </div>
          <div className="flex justify-end items-center h-full w-full  border-[0.5px] border-gray-600 text-6xl p-1 md:p-4 lg:p-4 ">
            <div className=" flex border-[0.5px] border-gray-600 p-2">
              <Link href={data[currentIndex].link}>
                <img
                  className="object-contain cursor-pointer"
                  src="/Arw.png"
                  alt="Arrow"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
