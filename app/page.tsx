import About from "@/components/Home/About";
import Hero from "@/components/Home/hero";
import Main from "@/components/Home/Main";
import WhyUs from "@/components/Home/WhyUs";
import Nav from "@/components/common/Nav";
import Highlight from "@/components/Home/Highlight";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
  <main>
    <Nav active="Home"/>
    <Hero/>
    <Main/>
    <WhyUs/>
    <About/>
    <Highlight/>
    <Footer/>
  </main>
  );
}
