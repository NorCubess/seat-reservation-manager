"use client";
import React from "react";
import { Leckerli_One } from "next/font/google";
import WordButton from "../buttons/WordButton";
import SolidButton from "../buttons/SolidButton";
import useScrollDirection from "../../hooks/useScrollDirection";

const leckerli = Leckerli_One({ subsets: ["latin"], weight: "400" });

export default function NavBar() {
  const scrollDirection = useScrollDirection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      style={{ backgroundColor: "rgba(14,39,27,0.68)" }}
      className={`fixed top-0 left-0 right-0 w-full flex items-center justify-between z-50 transition-transform duration-300 backdrop-blur-sm ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* left logo area */}
      <div
        className="py-4 flex items-center"
        style={{ paddingLeft: "50px", paddingRight: "12px" }}
      >
        <span className={`${leckerli.className} text-white text-2xl`}>
          Restaurant
        </span>
      </div>

      {/* centered buttons */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3">
        <WordButton onClick={() => scrollToSection("section1")}>
          Home
        </WordButton>
        <WordButton onClick={() => scrollToSection("section2")}>
          Features
        </WordButton>
        <WordButton onClick={() => scrollToSection("section3")}>
          Process
        </WordButton>
        <WordButton>Placeholder</WordButton>
      </div>

      {/* right login button */}
      <div className="py-4 flex items-center" style={{ paddingRight: "50px" }}>
        <SolidButton>Login</SolidButton>
      </div>
    </nav>
  );
}