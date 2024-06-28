"use client";
import { useState } from "react";
import HamburguerButton from "./HamburguerButton";
import MobileMenuLink from "./MobileMenuLink";

const LINKS = ["About", "Projects", "Lifeline", "Contacts"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuLinkOpen, setMobileMenuLinkOpen] = useState(0);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOpenMobileMenuLink(id: number) {
    if (mobileMenuLinkOpen == id) {
      setMobileMenuLinkOpen(0);
    } else {
      setMobileMenuLinkOpen(id);
    }
  }

  return (
    <main className="z-10 text-zinc-200 sticky top-0 flex bg-zinc-800">
      <div className="flex items-center gap-2 ml-2">
        {/* <span className="bg-zinc-800 text-zinc-200 font-medium me-2 px-2.5 py-0.5 rounded-full border-double border-cyan-500">Miguel Seca</span> */}

        <div className="relative">
          <a href="#top">Miguel Seca</a>
        </div>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-end">
        <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#about">About</a>
        </div>
        <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#timeline">Lifeline</a>
        </div>
        <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#projects">Projects</a>
        </div>

        <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
          <a href="#contacts">Contacts</a>
        </div>
      </div>

      <HamburguerButton
        isMenuOpen={isMenuOpen}
        handleOpenFunction={handleClick}
      />

      <div
        className={
          isMenuOpen
            ? "absolute top-14 bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0"
            : "absolute top-14 bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0 hidden"
        }
      >
        <div className="relative md:hidden h-full flex items-center justify-center cursor-pointer text-pink-200 hover:text:zinc-200 transition-colors hover:bg-white/10">
          <button
            onClick={() => handleOpenMobileMenuLink(1)}
            className="p-4 font-bold"
          >
            {LINKS[0]}
          </button>
        </div>

        <MobileMenuLink
          linkId={1}
          subItems={["cenas1", "cenas2"]}
          mobileMenuLinkOpen={mobileMenuLinkOpen}
        />

        <div className="relative md:hidden h-full flex items-center justify-center cursor-pointer text-pink-200 hover:text:zinc-200 transition-colors hover:bg-white/10">
          <button
            onClick={() => handleOpenMobileMenuLink(2)}
            className="p-4 font-bold"
          >
            {LINKS[1]}
          </button>
        </div>

        <MobileMenuLink
          linkId={2}
          subItems={["cenas1", "cenas2"]}
          mobileMenuLinkOpen={mobileMenuLinkOpen}
        />

        <div className="relative md:hidden h-full flex items-center justify-center cursor-pointer text-pink-200 hover:text:zinc-200 transition-colors hover:bg-white/10">
          <button
            onClick={() => handleOpenMobileMenuLink(3)}
            className="p-4 font-bold"
          >
            {LINKS[2]}
          </button>
        </div>

        <MobileMenuLink
          linkId={3}
          subItems={["Single day ticket", "7 day ticket"]}
          mobileMenuLinkOpen={mobileMenuLinkOpen}
        />
      </div>
    </main>
  );
}
