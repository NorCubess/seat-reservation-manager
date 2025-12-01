import NavBar from "../components/NavBar";
import Card1 from "../components/Card1";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full overflow-y-auto font-sans"
      style={{ backgroundColor: "#0E271B" }}
    >
      <NavBar />
      <main className="w-full">
        <Card1 />
        {/* Add more sections/cards below as needed */}
      </main>
    </div>
  );
}