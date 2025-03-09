import React from "react";
import FlickeringGrid from "../ui/flickering-grid";

function Highlight() {
 
  return (
    <div className="w-full  py-28 group bg-gradient-to-br to-blue-800 from-[#003777] relative overflow-hidden">
      <section className="w-[90%] max-w-[1200px] mx-auto flex gap-20 px-5">
       <p data-aos="fade-right" className="text-5xl leading-[55px] md:text-[75px] md:leading-[75px] text-blue-200 font-semibold Grotesque-font md:w-4/5">
        Every project deserves not just <span className="text-white"> materials, </span>but the foundation to dream and build something 
       <span className="text-white"> extraordinary.</span></p>
      </section>
    <div className="w-screen overflow-hidden md:w-fit  absolute md:-right-[25%] top-0">
      <FlickeringGrid 
        className="z-0 inset-0 overflow-x-hidden hidden md:block [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={15}
        gridGap={6}
        color="#d4ffcc"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={1200}
      />
      <FlickeringGrid 
        className="z-0 inset-0 overflow-x-hidden md:hidden [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={12}
        gridGap={6}
        color="#d4ffcc"
        maxOpacity={0.2}
        flickerChance={0.1}
        height={800}
        width={1200}
      />
      </div>
    </div>
  );
}

export default Highlight;
