"use client";
import React from "react";
import Link from "next/link";
import { MenuButton } from "./Components/Menu";

const Navbar = () => {
  return (
    <main className="flex  p-[40px] fixed z-50 bottom-0 right-0  ">
      <div className="flex navbutton  items-center justify-center  space-x-6 py-2 px-4">
        <div className="h-[40px] w-[40px] bg-white rounded-[100px] hover:translate-x-2">
          <Link href="/">
            <img
              src="/images/download 1.png"
              alt="image"
              className="rounded-[100px]  object-cover w-full h-full relative"
            />
          </Link>
        </div>
        <Link href="/Project">
          <MenuButton>Work</MenuButton>
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
