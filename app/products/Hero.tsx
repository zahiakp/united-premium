import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

function Hero() {
  return (
    <div className="w-full h-[400px] md:h-[400px] bg-blue-custom relative">
      <div className="p-20 px-[15%] flex flex-col h-full items-center justify-end z-10">
          <TextAnimate animation="blurInUp" by="word" className="z-[1] text-5xl md:text-7xl font-semibold font-braisle text-left text-blue-200">
          Products</TextAnimate>
        <img
          src="/images/UNT logo sd copy.png"
          className="absolute -bottom-[180px] h-[600px] -z-0 opacity-50 right-0"
        />
        <p className="z-[1] text-center text-white mx-auto mt-4 md:w-[80%]">
          We offer a wide range of construction materials
        </p>
      </div>
    </div>
  );
}

export default Hero;
