import Image from "next/image";
import Navbar from "../components/nav";
import Hero from "../components/hero";
import NotableProjects from "../components/notableProjects"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <NotableProjects />
      <Footer />
    </div>
  );
}
