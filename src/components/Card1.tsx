import React from "react";
import Image from "next/image";
import { Urbanist, Inter } from "next/font/google";
import SolidButton from "./SolidButton"; // added

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function Card1() {
  return (
    <div className="relative w-full flex justify-center py-12">
      <div
        className="relative flex overflow-hidden"
        style={{
          // scaled down from 1852x1180 -> 1100x700 (keeps same ratio)
          width: "1100px",
          height: "700px",
          background: "#123524",
          border: "1px solid #2F855A",
          borderRadius: "10px",
        }}
      >
        {/* Left Content Area (scaled) */}
        <div className="relative" style={{ width: "550px", height: "700px" }}>
          {/* Header */}
          <h1
            className={`${urbanist.className} absolute text-white`}
            style={{
              width: "429px", // scaled from 722
              height: "427px", // scaled from 720
              left: "34px", // scaled from 58
              top: "37px", // scaled from 62
              fontSize: "60px", // scaled from 100
              lineHeight: "71px", // scaled from 120
              fontWeight: 600,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </h1>

          {/* Subheader */}
          <p
            className={`${inter.className} absolute text-white`}
            style={{
              width: "460px", // scaled from 774
              height: "150px", // scaled from 252
              left: "34px", // scaled from 58
              top: "409px", // scaled from 688
              fontSize: "21px", // scaled from 35
              lineHeight: "25px", // scaled from 42
              fontWeight: 400,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* PlaceHolder button inserted where the buttons were */}
          <div
            style={{
              position: "absolute",
              left: "34px",
              top: "600px", // positioned below the subheader
              zIndex: 30, // ensure visible above other layers
            }}
          >
            <SolidButton>PlaceHolder</SolidButton>
          </div>
        </div>

        {/* Right Image Area (scaled) */}
        <div
          className="relative"
          style={{
            width: "550px",
            height: "700px",
            border: "1px solid #2F855A",
            borderRadius: "0px 10px 10px 0px",
            overflow: "hidden",
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