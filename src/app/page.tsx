import NavBar from "../components/sections/NavBar";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full overflow-y-auto font-sans"
      style={{ backgroundColor: "#0E271B" }}
    >
      <NavBar />
      <main className="w-full">
        <Section1 />
        <Section2 />
        <Section3 />
        {/* Add more sections below as needed */}
      </main>

      <Footer />  
    </div>
  );
}