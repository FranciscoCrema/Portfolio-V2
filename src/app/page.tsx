import NavBar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <div className="pageContainer">
      <NavBar />
      <Hero />
      <Work />
    </div>
  );
}
