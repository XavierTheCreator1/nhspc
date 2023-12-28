import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar fixed bg-base-100">
      <div className="mx-2 flex-1">
        <Image src={logo} alt="NHSPC logo" width="50" height="50"></Image>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xs sm:text-lg lg:text-xl">
          <li>
            <Link href="/join">Join Now</Link>
          </li>
          <li>
            <Link href="/login">Sign In</Link>
          </li>
          <li>
            <details>
              <summary>Club Info</summary>
              <ul className="rounded-t-none bg-base-100 p-2">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/curriculum " className="link-hover link">
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="/team">The Team</Link>
                </li>
                <li>
                  <Link href="/contact" className="link-hover link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/law" className="link-hover link">
                    Constitution
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/api">API</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
