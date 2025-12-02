import React from "react";
import Image from "next/image";
import { Urbanist, Inter } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

interface Card2Props {
  label: string;
  header: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  exploreLink?: string;
}

export default function Card2({
  label,
  header,
  description,
  imageSrc,
  imageAlt = "Feature image",
  exploreLink = "#",
}: Card2Props) {
  return (
    <div
      className="relative flex overflow-hidden"
      style={{
        width: "523px",
        height: "391px",
        background: "#1F1E1B",
        border: "1px solid #F4F4F4",
        borderRadius: "10px",
      }}
    >
      {/* Left Content Area */}
      <div className="relative" style={{ width: "261px", height: "391px" }}>
        {/* Label */}
        <div
          className={`${urbanist.className} absolute text-white`}
          style={{
            width: "215px",
            height: "17px",
            left: "23px",
            top: "23px",
            fontSize: "15px",
            lineHeight: "17px",
            fontWeight: 600,
          }}
        >
          {label}
        </div>

        {/* Header */}
        <h3
          className={`${urbanist.className} absolute text-white`}
          style={{
            width: "215px",
            height: "147px",
            left: "23px",
            top: "47px",
            fontSize: "41px",
            lineHeight: "49px",
            fontWeight: 600,
          }}
        >
          {header}
        </h3>

        {/* Description */}
        <p
          className={`${inter.className} absolute text-white`}
          style={{
            width: "215px",
            height: "52px",
            left: "23px",
            top: "249px",
            fontSize: "15px",
            lineHeight: "17px",
            fontWeight: 400,
          }}
        >
          {description}
        </p>

        {/* Explore Link */}
        <a
          href={exploreLink}
          className={`${urbanist.className} absolute text-white underline hover:text-gray-300 transition-colors`}
          style={{
            width: "215px",
            height: "17px",
            left: "23px",
            top: "320px",
            fontSize: "15px",
            lineHeight: "17px",
            fontWeight: 400,
          }}
        >
          Explore &gt;
        </a>
      </div>

      {/* Right Image Area */}
      <div
        className="relative"
        style={{
          width: "261px",
          height: "391px",
          border: "1px solid #F4F4F4",
          borderRadius: "0px 10px 10px 0px",
          overflow: "hidden",
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}