import React from "react";

function WhyUs() {
  const Items = [
    { icon:"premium-quality.svg",
      title: "Premium Quality",
      dis: "Sourced from leading manufacturers",
    },
    { icon:"pricing.svg",
      title: "Competitive Pricing",
      dis: "Affordable rates without compromising quality",
    },
    { icon:"supply.svg",
      title: "Reliable Supply",
      dis: "On-time delivery for every project",
    },
    { icon:"support.svg",
      title: "Expert Support",
      dis: "Professional guidance for your material needs",
    },
  ];

  return (
    <main className="w-full bg-blue-custom py-20">
      <div className="container flex flex-col items-center justify-center">
        <p className="text-blue-100 font-farro">Why Choose Us</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {Items.map((item, index) => (
                <div key={index} className="border hover:-translate-y-2 shadow-cus shadow-white duration-200 flex flex-col items-center justify-center border-white/30 gap-2 rounded-3xl p-5 px-10">
                    <img src={`/svg/${item.icon}`} className="h-20" />
                    <p className="text-white font-farro">{item.title}</p>
                    <p className="text-white/70 text-center text-sm font-farro">{item.dis}</p>
                    {/* ?? */}
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default WhyUs;
