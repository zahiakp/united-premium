import React from "react";
import { TextAnimate } from "../ui/text-animate";

function About() {
  return (
    <main className="w-full">
      <div className="container flex items-center justify-center gap-20 py-20">
        <div className="relative">
          <img src="/images/UPT logo.jpg" className="rounded-[40px] h-60" />
          <img src="/svg/@.svg" className="absolute -right-5 top-[50%] -translate-y-[50%]"/>        </div>
        <div className="flex-1">
          <TextAnimate animation="blurInUp" by="word" className="w-fit font-farro bg-blue-100 py-2 px-5 rounded-3xl">
          About Us
              </TextAnimate>
          <p className="mt-5">
            At United Premium Trading, we specialize in supplying top-grade
            construction materials for residential, commercial, and industrial
            projects. With years of experience in the industry, we have built
            strong relationships with suppliers, ensuring that our clients
            receive the best products at the best prices. Our mission is to
            support construction projects with durable and cost-effective
            materials, making us the preferred choice for builders and
            developers.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
