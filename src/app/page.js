import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection"
// import MaxWidth from "./components/MaxWidthWrapper";
import About from "./components/AboutUs";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Footer />
    </>
  );
}
