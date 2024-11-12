import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex h-[10vh] w-full justify-between  text-white">
      <span>001</span>
      <Link href="/pages/Work">Work</Link>
    </div>
  );
}

export default Navbar;
