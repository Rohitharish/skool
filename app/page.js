"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import About from "./About/page";
import Project from "./Project/Page";

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
    <main className="flex flex-col mx-2 relative">
      <Project />
    </main>
  );
}

export default Home;
