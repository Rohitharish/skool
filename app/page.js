"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import About from "./About/page";

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
    <main className="flex h-full  flex-col mx-2 relative bg-white">
      <About />
    </main>
  );
}

export default Home;
