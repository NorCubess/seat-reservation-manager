import React from "react";
import Image from "next/image";
import { Urbanist, Inter } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

interface Card3Props {
  label: string;
  header: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function Card3({
  label,
  header,
  description,
  imageSrc,
  imageAlt = "Feature image",
}: Card3Props) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "248px",
        height: "391px",
        background: "#1F1E1B",
        border: "1px solid #FFFFFF",
        borderRadius: "10px",
      }}
    >
      {/* Content Area */}
      <div className="relative" style={{ width: "248px", height: "252px" }}>
        {/* Label */}
        <div
          className={`${urbanist.className} absolute text-white`}
          style={{
            width: "215px",
            height: "17px",
            left: "16px",
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
            left: "16px",
            top: "52px",
            fontSize: "29px",
            lineHeight: "35px",
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
            left: "13px",
            top: "164px",
            fontSize: "15px",
            lineHeight: "17px",
            fontWeight: 400,
          }}
        >
          {description}
        </p>
      </div>

      {/* Bottom Image Area */}
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: "248px",
          height: "139px",
          border: "1px solid #FFFFFF",
          borderRadius: "0px 0px 10px 10px",
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