import React from "react";
import { Urbanist, Inter } from "next/font/google";
import Card2 from "../cards/Card2";
import Card3 from "../cards/Card3";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function Section2() {
  return (
    <section
      id="section2"
      aria-label="Features Section"
      style={{
        backgroundColor: "#000000",
        width: "100%",
        minHeight: "867px",
        position: "relative",
        paddingTop: "98px",
        paddingBottom: "98px",
      }}
    >
      {/* Features Section Label */}
      <div
        className={`${inter.className} absolute text-white text-center`}
        style={{
          width: "60px",
          height: "17px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "98px",
          fontSize: "15px",
          lineHeight: "17px",
          fontWeight: 400,
        }}
      >
        Features
      </div>

      {/* Features Header */}
      <h2
        className={`${urbanist.className} absolute text-white text-center`}
        style={{
          width: "420px",
          height: "126px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "137px",
          fontSize: "41px",
          lineHeight: "49px",
          fontWeight: 600,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur
      </h2>

      {/* Description */}
      <p
        className={`${inter.className} absolute text-white text-center`}
        style={{
          width: "494px",
          height: "17px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "258px",
          fontSize: "15px",
          lineHeight: "17px",
          fontWeight: 400,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>

      {/* Cards Container */}
      <div
        className="absolute flex gap-5"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          top: "334px",
        }}
      >
        <Card2
          label="Features"
          header="Lorem ipsum dolor sit amet, consectetur"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          imageSrc="/assets/images/photoPlaceholder1.jpg"
          imageAlt="Cozy restaurant atmosphere"
          exploreLink="#"
        />
        <Card3
          label="Features"
          header="Lorem ipsum dolor sit amet, consectetur"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          imageSrc="/assets/images/photoPlaceholder1.jpg"
          imageAlt="Restaurant interior"
        />
        <Card3
          label="Features"
          header="Lorem ipsum dolor sit amet, consectetur"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          imageSrc="/assets/images/photoPlaceholder1.jpg"
          imageAlt="Dining experience"
        />
      </div>
    </section>
  );
}