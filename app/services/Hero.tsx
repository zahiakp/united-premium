import React from "react";

function Hero() {
  return (
    <div className="w-full h-[400px] md:h-[400px] bg-blue-custom relative">
      <div className="p-20 px-[15%] flex flex-col h-full items-center justify-end z-10">
        <h1 className="z-[1] text-5xl md:text-7xl font-semibold font-braisle text-left text-blue-200">
          Services
        </h1>
<img src="/images/UNT logo sd copy.png" className="absolute -bottom-[180px] h-[600px] -z-0 opacity-50 right-0"/>
        <p className="z-[1] text-center text-white flex gap-2 text-[12px] md:text-[14px] mt-4 md:w-[80%]">
          At Sukoon, we offer a global standard of education and lifestyle,
          seamlessly blending academic excellence with world-class facilities in
          a serene, eco-friendly environment. Our emphasis on holistic
          development creates a nurturing ground for future leaders, inspiring
          students to excel intellectually, ethically, and socially.
        </p>
      </div>
    </div>
  );
}

export default Hero;
