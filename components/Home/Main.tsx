import React from "react";
import { TextAnimate } from "../ui/text-animate";

function Main() {
  return (
    <main className="w-full bg-blue-50">
      <div className="container flex flex-col text-center  items-center justify-center gap-7 py-20">
        {/* <p className="text-5xl font-semibold">Welcome to United Premium Trading</p> */}
        <TextAnimate animation="blurInUp" by="word" className="text-5xl font-semibold">
        Welcome to United Premium Trading
    </TextAnimate>
        <p>
          your trusted partner in
          high-quality construction materials. We provide a wide range of
          products to meet the needs of contractors, builders, and developers.
          With a commitment to quality and reliability, we ensure that your
          projects are built to last.
        </p>
      </div>
    </main>
  );
}

export default Main;
