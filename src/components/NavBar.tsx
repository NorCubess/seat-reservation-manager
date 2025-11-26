import React from "react";
import { Leckerli_One } from "next/font/google";
import WordButton from "./WordButton";

const leckerli = Leckerli_One({ subsets: ["latin"], weight: "400" });

export default function NavBar() {
  return (
    <nav style={{ backgroundColor: "#0E271B" }} className="relative w-full">
      {/* left logo area */}
      <div
        className="w-full py-4 flex items-center"
        style={{ paddingLeft: "50px", paddingRight: "12px" }}
      >
        <span className={`${leckerli.className} text-white text-2xl`}>
          Restaurant
        </span>
      </div>

      {/* centered buttons (absolute center) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3">
        <WordButton>Placeholder</WordButton>
        <WordButton>Placeholder</WordButton>
        <WordButton>Placeholder</WordButton>
        <WordButton>Placeholder</WordButton>
      </div>
    </nav>
  );
}
