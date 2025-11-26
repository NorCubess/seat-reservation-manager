import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

type WordButtonProps = {
  children: React.ReactNode;
};

export default function WordButton({ children }: WordButtonProps) {
  return (
    <button
      className={`${inter.className} text-white text-sm bg-transparent border-0 p-0 m-0 cursor-pointer transition-opacity duration-100 ease-out hover:opacity-95 focus:outline-none`}
    >
      {children}
    </button>
  );
}
