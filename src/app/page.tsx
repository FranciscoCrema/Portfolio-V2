import { Footer } from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/Navbar";
import AboutMe from "@/components/sections/About-Me";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="pageContainer">
        <Hero />
        <Work />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}
