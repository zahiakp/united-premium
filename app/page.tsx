import Hero from "@/components/Home/hero";
import Main from "@/components/Home/Main";
import WhyUs from "@/components/Home/WhyUs";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <Nav/>
    <Hero/>
    <Main/>
    <WhyUs/>
  </main>
  );
}
