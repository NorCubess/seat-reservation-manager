import NavBar from "../components/sections/NavBar";
import Section1 from "../components/sections/Section1";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full overflow-y-auto font-sans"
      style={{ backgroundColor: "#0E271B" }}
    >
      <NavBar />
      <main className="w-full">
        <Section1 />
        {/* Add more sections below as needed */}
      </main>
    </div>
  );
}