import React from "react";
import Image from "next/image";
import { Urbanist, Inter } from "next/font/google";
import SolidButton from "../buttons/SolidButton";
import TranspButton from "../buttons/TranspButton";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function Card1() {
  return (
    <div className="relative w-full flex justify-center py-12">
      <div
        className="relative flex overflow-hidden"
        style={{
          // scaled to match visual scale of Section2 while keeping aspect ratio
          width: "1078px", // was 1100 previously (kept close to prior scale)
          height: "687px", // new height keeping original aspect ratio
          background: "#123524",
          border: "1px solid #2F855A",
          borderRadius: "10px",
        }}
      >
        {/* Left Content Area (scaled) */}
        <div className="relative" style={{ width: "539px", height: "687px" }}>
          {/* Header */}
          <h1
            className={`${urbanist.className} absolute text-white`}
            style={{
              width: "421px", // scaled from previous values
              height: "415px",
              left: "33px",
              top: "36px",
              fontSize: "59px",
              lineHeight: "70px",
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
              width: "451px",
              height: "147px",
              left: "33px",
              top: "401px",
              fontSize: "21px",
              lineHeight: "25px",
              fontWeight: 400,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons: Solid + Transparent side-by-side */}
          <div
            style={{
              position: "absolute",
              left: "33px",
              top: "585px",
              zIndex: 30,
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <SolidButton>PlaceHolder</SolidButton>
            <TranspButton>More Info</TranspButton>
          </div>
        </div>

        {/* Right Image Area (scaled) */}
        <div
          className="relative"
          style={{
            width: "539px",
            height: "687px",
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