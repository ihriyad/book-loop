"use client";
import React from "react";
import { useState } from "react";

import ThemeToggle from "../theme/ThemeToggle";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Audiowide, Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/books">All Books</Link>
      </li>
      <li>
        <Link href="#">My Profile</Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
         <div className="font-bold text-2xl md:text-4xl tracking-tight">
  <Link
    href="/"
    className={`${orbitron.className} inline-flex items-center`}
  >
    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Book
    </span>

    <span
      className={`${audiowide.className} ml-1 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}
    >
      Loop
    </span>
  </Link>
</div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>
        <div className="hidden md:flex gap-4">
          <Button>Login</Button>
          <ThemeToggle></ThemeToggle>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <div className="flex gap-3">
              <p>Theme</p>
              <ThemeToggle></ThemeToggle>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
