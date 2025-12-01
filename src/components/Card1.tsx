import React from "react";
import Image from "next/image";
import { Urbanist, Inter } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function Card1() {
  return (
    <div className="w-full px-6 lg:px-12 xl:px-16 py-8">
      <div
        className="flex flex-col lg:flex-row w-full border-2 overflow-hidden rounded-lg shadow-lg"
        style={{
          backgroundColor: "#0E271B",
          borderColor: "#2F855A",
        }}
      >
        {/* Left half - Text content */}
        <div
          className="flex flex-col justify-center p-8 lg:p-12 xl:p-16"
          style={{
            flex: "1 1 45%",
          }}
        >
          <h2
            className={`${urbanist.className} text-white text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </h2>
          <p
            className={`${inter.className} text-white/80 text-xs lg:text-sm leading-relaxed mb-8`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right half - Image */}
        <div
          className="relative min-h-[300px] lg:min-h-[450px]"
          style={{
            flex: "1 1 55%",
          }}
        >
          <Image
            src="/assets/images/photoPlaceholder1.jpg"
            alt="Restaurant interior with wine cellar and elegant lighting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}