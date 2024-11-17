import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex h-[10vh] w-full justify-between  text-white px-[2%] ">
      <Link href="/">/\</Link>
      <Link href="/pages/Work">WORK</Link>
    </div>
  );
}

export default Navbar;
