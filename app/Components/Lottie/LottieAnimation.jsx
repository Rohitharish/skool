import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/Globe.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return <Lottie options={defaultOptions} height={300} width={300} />;
};

export default LottieAnimation;
