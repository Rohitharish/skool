import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex  h-full w-full justify-between  text-white py-[1%] px-[.5%] ">
      <Link href="/">/\</Link>
      <Link
        className=" flex h-[5vh] items-center justify-center border-[.5px] border-gray-500 px-10  rounded-full"
        href="/pages/Work"
      >
        WORK
      </Link>
    </div>
  );
}

export default Navbar;
