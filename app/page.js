"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

import Page from "./pages/Work/page";
import About from "./pages/About/page";

function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <About />
    </>
  );
}

export default Home;
