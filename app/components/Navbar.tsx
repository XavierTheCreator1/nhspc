import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar drop-shadow-lg fixed bg-base-100 z-50">
      <div className="mx-2 flex-1">
        <Link href="/">
          <Image
            src={logo}
            alt="NHSPC logo"
            width="50"
            height="50"
            className="drop-shadow-md"
          ></Image>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xs sm:text-lg lg:text-xl">
          <li>
            <Link href="/join" className="text-secondary">
              Join Now
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-primary">
              Sign In
            </Link>
          </li>
          <li>
            <details>
              <summary>Club Info</summary>
              <ul className="rounded-t-none bg-base-100 p-2">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/curriculum ">Curriculum</Link>
                </li>
                <li>
                  <Link href="/team">The Team</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/law">Constitution</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/api" className="text-accent">
              API
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
