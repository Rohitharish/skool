"use client"
import React from 'react';
import Image from 'next/image';

function Tools() {
  return (
    <main className=" grid grid-cols-3 lg:grid-cols-6 gap-2">
      {/* First row */}
      <div className="flex flex-col space-y-2">
        <Image
          src="/images/icons8-figma.gif"
          alt="image"
          className="w-[80px] h-[80px] object-cover rounded-lg"
          width={100}
          height={100}
        />
      </div>

      {/* Second row */}
      <div className="flex flex-col space-y-2">
        <Image
          src="/images/NXT.png"
          alt="image"
          className="w-[80px] h-[80px] object-cover rounded-lg bg-white p-2"
          width={100}
          height={100}
        />
      </div>

      {/* Third row */}
      <div className="flex flex-col space-y-2">
        <Image
          src="/images/icons8-react.gif"
          alt="image"
          className="w-[80px] h-[80px] object-cover rounded-lg bg-white p-2"
          width={100}
          height={100}
        />
      </div>

      {/* Fourth row */}
      <div className="flex flex-col space-y-2">
        <Image
          src="/images/github-mark.png"
          alt="image"
          className="w-[80px] h-[80px] object-cover bg-white p-2 rounded-lg"
          width={100}
          height={100}
        />
      </div>

      {/* Fifth row */}
      <div className="flex flex-col space-y-2">
        <Image
          src="/images/TAL.png"
          alt="image"
          className="w-[80px] h-[80px] object-cover bg-white p-2 rounded-lg"
          width={100}
          height={100}
        />
      </div>

      {/* Sixth row */}
      <div className="flex flex-col space-y-2">
        <Image
          src="/images/image.png"
          alt="image"
          className="w-[80px] h-[80px] object-cover bg-white p-2 rounded-lg"
          width={100}
          height={100}
        />
      </div>
    </main>
  );
}

export default Tools;
