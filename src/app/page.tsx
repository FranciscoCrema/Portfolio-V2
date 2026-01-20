import NavBar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import "@/styles/globals.scss";

export default function Home() {
  return (
    <div className="pageContainer">
      <NavBar />
      <Hero />
    </div>
  );
}
