"use client";
import { Animatedword } from "../Animatetext";
import React from "react";

function Contact() {
  return (
    <main className="relative h-screen w-auto lg:space-y-2 mb-40">
      <div className="marquee-container bg-lime-400 rounded-lg">
        <p className="marquee">skool studio///////////////////////</p>
      </div>
      <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 rounded-lg">
        <div className="border-[1px] border-white py-2 lg:py-20 col-span-1 lg:col-span-2 rounded-lg text-white hover:bg-white hover:text-black transition duration-300">
          <button className="text-xl lg:text-6xl p-4">
            Get in<br /> touch
          </button>
        </div>

        <div className="border-[1px] border-white py-5 lg:py-20 col-span-1 lg:col-span-3 rounded-lg text-white hover:bg-white hover:text-black transition duration-300">
          <button className="text-xl lg:text-4xl p-4">
            skoolstudio@gmail.com
          </button>
        </div>
      </section>
      <section className="relative grid grid-cols-1 lg:grid-cols-3 gap-2 rounded-lg">
        <div className="border-[1px] border-white py-10 lg:py-28 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-center">
          <button className="text-xl lg:text-4xl p-4">Linkdin</button>
        </div>

        <div className="border-[1px] border-white py-10 lg:py-28 rounded-lg text-white hover:bg-blue-400  transition duration-300 text-center">
          <button className="text-xl lg:text-4xl p-4">Twitter</button>
        </div>

        <div className="border-[1px] border-white py-10 lg:py-28 rounded-lg text-white hover:bg-pink-600  transition duration-300 text-center">
          <button className="text-xl lg:text-4xl">Insta</button>
        </div>
      </section>
    </main>
  );
}

export default Contact;
