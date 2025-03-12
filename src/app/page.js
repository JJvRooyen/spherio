import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection"
// import MaxWidth from "./components/MaxWidthWrapper";
import About from "./components/AboutUs";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Second from "./components/SecondAU";
import ShowCase from "./components/ProductShowcase";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Second />
      <ShowCase />
      <Footer />
    </>
  );
}
