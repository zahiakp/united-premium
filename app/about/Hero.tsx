import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

function Hero() {
  return (
    <div className="w-full h-[300px] md:h-[400px] bg-blue-custom relative">
      <div className="p-20 px-[15%] flex flex-col h-full items-center justify-end z-10">
       <TextAnimate animation="blurInUp" by="word" className="z-[1] text-5xl md:text-7xl font-semibold font-braisle text-left text-blue-200">
                 About Us</TextAnimate>
<img src="/images/UNT logo sd copy.png" className="absolute -bottom-[180px] h-[450px] object-center md:h-[600px] -z-0 opacity-50 right-0"/>
        {/* <p className="z-[1] text-center text-white flex gap-2 text-[12px] md:text-[14px] mt-4 md:w-[80%]">
          At Sukoon, we offer a global standard of education and lifestyle,
          seamlessly blending academic excellence with world-class facilities in
          a serene, eco-friendly environment. Our emphasis on holistic
          development creates a nurturing ground for future leaders, inspiring
          students to excel intellectually, ethically, and socially.
        </p> */}
      </div>
    </div>
  );
}

export default Hero;
