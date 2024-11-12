import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import MainText from "../TextAnimations/MainText";
import TextChange from "../TextAnimations/TextChange";

const data = [
  {
    image: "/Profile.jpg",
    title: "MICROSOFT",
    description:
      "Minimal Gallery was originally brought to life when I started",
    Number: "0 0 1",
  },
  {
    image: "/untitled.png",
    title: "Portfolio",
    description: "Description for image 2",
    Number: "0 0 2",
  },
  {
    image: "/laks.png",
    title: "Astral grid",
    description: "Description for image 3",
    Number: "0 0 3",
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

  // Entrance animation
  const animateIn = () => {
    const timeline = gsap.timeline();

    // Reset initial position and opacity
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
      <div className="grid grid-cols-12 grid-rows-2  w-full  ">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {index === currentIndex && (
              <>
                <div className="  col-span-12 lg:col-span-7 row-span-2 overflow-hidden h-[50vh] lg:h-[120vh] border-gray-500 border-[.1px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    ref={imageRef}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className=" col-span-12 lg:col-span-5 flex flex-row items-center justify-center border-gray-500 border-[.1px]">
                  <div className="flex relative h-full w-full items-center justify-center border-gray-500 border-[.1px] border-y-0">
                    <div
                      className="flex items-center justify-center"
                      ref={descriptionRef}
                    >
                      <MainText
                        className="text-white w-[70%] uppercase "
                        text={item.description}
                      />
                    </div>
                  </div>
                  <div className="flex relative w-[40%] h-full  items-end justify-center pb-[10%] overflow-hidden ">
                    <div ref={numberRef}>
                      <MainText
                        className="text-white text:4xl lg:text-6xl -rotate-90 "
                        text={item.Number}
                      />
                    </div>
                  </div>
                </div>

                <div className=" col-span-12 lg:col-span-5 p-[4%] flex items-end justify-end border-gray-500 border-[.1px] lg:border-l-0">
                  <div className="flex" ref={titleRef}>
                    <MainText
                      className="text-white text-4xl lg:text-8xl"
                      text={item.title}
                    />
                  </div>
                </div>
              </>
            )}
          </React.Fragment>
        ))}

        <div className="h-[20vh] lg:h-full flex items-center col-span-12 lg:col-span-7 text-white border-gray-500 border-[.1px] p-[2%] text-3xl uppercase">
          <TextChange textArray={Animation} interval={2000} />
        </div>
        <div className="h-[20vh] lg:h-full  col-span-12 lg:col-span-5 flex flex-col lg:flex-row text-white border-gray-500 border-[.1px] ">
          <div className="flex text-white justify-end items-center h-full w-full   ">
            <button
              onClick={handleNext}
              className="   uppercase text-3xl   rounded-none "
            >
              NEXT
            </button>
          </div>
          <div className="flex justify-end items-center h-full w-full  border-gray-500 border-[.1px] text-6xl ">
            <button className="flex   border-[1px] border-white justify-end   ">
              7
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;