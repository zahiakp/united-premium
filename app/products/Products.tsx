import React from "react";

function Products() {
  const Products = [
    {
      icon: "supply3.svg",
      title: "Engineered Wood",
      dis: "We offer high-quality engineered wood products, perfect for modern construction and interior design. Engineered wood is durable, eco-friendly, and resistant to warping, making it ideal for flooring, furniture, and structural applications.",
      itemLabel: "Our Engineered Wood Products",
      items: [
        {
          icon: "Plywood.svg",
          title: "Plywood",
          dis: "Strong, versatile, and cost-effective",
        },
        {
          icon: "Medium Density Fiberboard.svg",
          title: "MDF (Medium Density Fiberboard)",
          dis: "Smooth finish for cabinets & furniture",
        },
        {
          icon: "high Density Fiberboard.svg",
          title: "HDF (High Density Fiberboard)",
          dis: "Durable for heavy-duty use",
        },
        {
          icon: "Particle Board.svg",
          title: "Particle Board",
          dis: "Affordable option for interior projects",
        },
        {
          icon: "Laminated Boards.svg",
          title: "Laminated Boards",
          dis: "Stylish and durable for decorative finishes",
        },
      ],
    },
    {
      icon: "electrical.svg",
      title: "Electrical Products & Solutions",
      dis: "At United Premium, we supply high-quality electrical materials for residential, commercial, and industrial projects, ensuring safety, efficiency, and durability.",
      itemLabel: "Our Key Products",
      items: [
        {
          icon: "Wires.svg",
          title: "Cables & Wires",
          dis: "Power, control, flexible, LAN, fiber optic",
        },
        {
          icon: "Switches.svg",
          title: "Switches & Sockets",
          dis: "Modular, industrial, smart, waterproof",
        },
        {
          icon: "fuses.svg",
          title: "Circuit Protection",
          dis: "MCBs, RCCBs, MCCBs, fuses, surge protectors",
        },
        {
          icon: "LED bulb.svg",
          title: "Lighting Solutions",
          dis: "LED bulbs, panels, floodlights, smart lighting",
        },
        {
          icon: "PVC.svg",
          title: "Conduits & Accessories",
          dis: "PVC, GI, cable trays, junction boxes",
        },
        {
          icon: "MDBs.svg",
          title: "Distribution Boards",
          dis: "MDBs, SDBs, ATS, custom panels",
        },
        {
          icon: "Inverters.svg",
          title: "Power Backup",
          dis: "Inverters, UPS systems, stabilizers, solar solutions",
        },
        {
          icon: "Industrial Components.svg",
          title: "Industrial Components",
          dis: "Contactors, relays, transformers, drives",
        },
      ],
    },
    {
      icon: "plumbing.svg",
      title: "Plumbing Materials",
      dis: "We supply a wide range of durable plumbing materials for residential, commercial, and industrial projects. Our products ensure efficient water flow, leak resistance, and long-lasting performance.",
      itemLabel: "Our Plumbing Products",
      items: [
        {
          icon: "Pipes.svg",
          title: "Pipes",
          dis: "PVC, CPVC, PPR, HDPE, GI pipes",
        },
        {
          icon: "Elbows.svg",
          title: "Fittings",
          dis: "Elbows, tees, couplings, reducers",
        },
        {
          icon: "Valves.svg",
          title: "Valves",
          dis: "Ball valves, gate valves, check valves",
        },
        {
          icon: "tank.svg",
          title: "Water Tanks & Pumps",
          dis: "High-quality storage tanks, submersible & booster pumps",
        },
        {
          icon: "Taps.svg",
          title: "Accessories",
          dis: "Taps, faucets, hoses, clamps, seals",
        },
      ],
    },
    {
      icon: "tools.svg",
      title: "Hand Tools",
      dis: "We provide a wide range of high-quality hand tools for construction, repair, and maintenance work. Built for durability and precision, our tools help you get the job done efficiently.",
      itemLabel: "Our Hand Tool Range",
      items: [
        {
          icon: "Tape measures.svg",
          title: "Measuring Tools",
          dis: "Tape measures, spirit levels, calipers",
        },
        {
          icon: "Hacksaws.svg",
          title: "Cutting Tools",
          dis: "Hacksaws, utility knives, chisels",
        },
        {
          icon: "Hammers.svg",
          title: "Fastening Tools",
          dis: "Hammers, screwdrivers, wrenches, pliers",
        },
        {
          icon: "Trowels.svg",
          title: "Masonry Tools",
          dis: "Trowels, brick hammers, floats",
        },
        {
          icon: "toolboxes.svg",
          title: "General Tools",
          dis: "Spanners, clamps, toolboxes",
        },
      ],
    },
    {
      icon: "safety.svg",
      title: "Safety Equipment",
      dis: "Ensure the safety of your team with our premium safety equipment. We offer protective gear designed to meet industry standards and keep workers safe on-site.",
      itemLabel: "Our Safety Products",
      items: [
        {
          icon: "Helmets.svg",
          title: "Personal Protective Equipment (PPE)",
          dis: "Helmets, face shields, safety goggles, gloves",
        },
        {
          icon: "jackets.svg",
          title: "Workwear",
          dis: "High-visibility vests, jackets, coveralls",
        },
        {
          icon: "shoes.svg",
          title: "Foot Protection",
          dis: "Steel-toe boots, non-slip shoes",
        },
        {
          icon: "Fall Protection.svg",
          title: "Fall Protection",
          dis: "Safety harnesses, lanyards, helmets",
        },
        {
          icon: "First Aid Kits.svg",
          title: "First Aid Kits",
          dis: "Complete kits for on-site emergencies",
        },
      ],
    },
    {
      icon: "chemicals.svg",
      title: "Construction Chemicals",
      dis: "We provide high-performance construction chemicals that enhance the durability and quality of your projects. Our range of products is designed to meet the demands of modern construction while ensuring safety and efficiency.",
      itemLabel: "Our Construction Chemical Products",
      items: [
        {
          icon: "weatherproof.svg",
          title: "Adhesives & Sealants",
          dis: "Bonding agents, caulks, and weatherproof sealants",
        },
        {
          icon: "Waterproofing Solutions.svg",
          title: "Waterproofing Solutions",
          dis: "Membranes, coatings, and sealants",
        },
        {
          icon: "plasticizers.svg",
          title: "Concrete Additives",
          dis: "Accelerators, retarders, plasticizers",
        },
        {
          icon: "Concrete curing.svg",
          title: "Curing Compounds",
          dis: "Concrete curing and protection",
        },
        {
          icon: "Surface Treatments.svg",
          title: "Flooring & Surface Treatments",
          dis: "Epoxy coatings, concrete repair compounds",
        },
        {
          icon: "Grouts & Mortars.svg",
          title: "Grouts & Mortars",
          dis: "Tile adhesives, joint fillers, and repair mortars",
        },
      ],
    },
    {
      icon: "powertools.svg",
      title: "Power Tools",
      dis: "Boost productivity and efficiency with our high-quality power tools. Ideal for construction, woodworking, and other heavy-duty tasks, our tools are built for performance and longevity.",
      itemLabel: "Our Power Tools Range",
      items: [
        {
          icon: "Cordless drills.svg",
          title: "Drills & Impact Drivers",
          dis: "Cordless drills, hammer drills, impact wrenches",
        },
        {
          icon: "Circular saws.svg",
          title: "Saws",
          dis: "Circular saws, jigsaws, angle grinders",
        },
        {
          icon: "Orbital sanders.svg",
          title: "Sanders & Polishers",
          dis: "Orbital sanders, belt sanders, rotary polishers",
        },
        {
          icon: "Power cutters.svg",
          title: "Cutting Tools",
          dis: "Power cutters, electric shears",
        },
        {
          icon: "MIG.svg",
          title: "Welding Equipment",
          dis: "MIG, TIG, and ARC welders",
        },
        {
          icon: "Mixers.svg",
          title: "Concrete & Surface Tools",
          dis: "Mixers, concrete vibrators, demolition hammers",
        },
      ],
    },
    {
      icon: "insulation.svg",
      title: "Insulation Materials",
      dis: "We offer high-quality insulation products designed to improve energy efficiency, reduce noise, and enhance comfort in buildings. Our insulation solutions are perfect for both residential and commercial applications.",
      itemLabel: "Our Insulation Products",
      items: [
        {
          icon: "Fiberglass.svg",
          title: "Thermal Insulation",
          dis: "Fiberglass, foam boards, spray foam",
        },
        {
          icon: "Soundproof panels.png",
          title: "Acoustic Insulation",
          dis: "Soundproof panels, rock wool, acoustic foam",
        },
        {
          icon: "Insulation rolls.png",
          title: "Roof & Wall Insulation",
          dis: "Insulation rolls, reflective foils",
        },
        {
          icon: "pipe wraps.png",
          title: "Pipe Insulation",
          dis: "Pre-insulated pipes, pipe wraps",
        },
        {
          icon: "Insulating boards.png",
          title: "Underfloor Heating Insulation",
          dis: "Insulating boards and membranes",
        },
      ],
    },
  ];
  return (
    <>
    {Products.map((item:any,index:number)=>(
        <section key={index} className={`w-full py-20 md:py-28 px-4 md:px-0 ${index%2==0?"bg-blue-white":"bg-blue-50"}`}>
        <main className="container flex flex-col items-center justify-center">
          <h6 className="text-4xl text-center md:text-5xl font-bold text-custom">{item.title}</h6>
          <p className="text-[15px] text-zinc-700 mt-5 text-center">
           {item.dis}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 md:mt-20 items-center">
              {item.items.map((items:any,i:number)=>(
                  <div key={i} className="border hover:-translate-y-2 shadow-bg-cus shadow-blue-500 duration-200 flex flex-col items-center justify-center border-blue-500/30 gap-2 rounded-3xl p-5 px-10">
                  <div className="h-24  flex items-center justify-center"><img src={`/svg/${items.icon}`} className="h-20" /></div>
                  <p className="text-custom text-center font-semibold font-farro">{items.title}</p>
                  <p className="text-zinc-600 text-center text-sm font-farro">{items.dis}</p>
                  {/* ?? */}
              </div>
              ))}
          </div>
        </main>
      </section>
    ))}</>
  );
}

export default Products;
