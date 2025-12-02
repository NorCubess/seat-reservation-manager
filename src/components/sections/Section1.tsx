import React from "react";
import Card1 from "../cards/Card1";

export default function Section1() {
  return (
    // added id for NavBar scrolling and aria-label
    <section id="section1" aria-label="Home Section" className="w-full">
      <Card1 />
    </section>
  );
}
