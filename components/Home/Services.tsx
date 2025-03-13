import React from "react";
import { TextAnimate } from "../ui/text-animate";

function Services() {
  const Items = [
    { icon:"supply3.svg",
      title: "Bulk Build Supply",
      dis: "Specializing in large-scale construction projects, we provide tailored bulk supply solutions to meet the demands of your project, ensuring quality and consistency",
    },
    { icon:"logistic.svg",
      title: "SwiftSite Logistics",
      dis: "Our robust logistics network guarantees timely and efficient delivery of materials directly to your construction site, keeping your projects on schedule",
    },
    { icon:"custom.svg",
      title: "Custom Material Sourcing",
      dis: "We handle special requests and custom orders, sourcing unique materials to perfectly align with your project's specific requirements",
    },
    { icon:"Wholesale.svg",
      title: "ProjectPro Wholesale",
      dis: "Dedicated to wholesale supply, we offer cost-effective, high-volume material solutions for large construction projects, ensuring seamless execution",
    },
  ];

  return (
    <main className="w-full py-20">
      <div className="container flex flex-col items-center justify-center">
        <TextAnimate animation="blurInUp" by="word" className="text-blue-900 font-farro bg-blue-50 py-2 px-5 rounded-3xl">
        Services</TextAnimate>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {Items.map((item, index) => (
                <div key={index} className="border hover:-translate-y-2 shadow-bg-cus shadow-blue-500 duration-200 flex flex-col items-center justify-center border-blue-500/30 gap-2 rounded-3xl p-5 px-10">
                    <div className="h-24  flex items-center justify-center"><img src={`/svg/${item.icon}`} className="h-20" /></div>
                    <p className="text-custom text-center font-semibold font-farro">{item.title}</p>
                    <p className="text-zinc-600 text-center text-sm font-farro">{item.dis}</p>
                    {/* ?? */}
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default Services;
