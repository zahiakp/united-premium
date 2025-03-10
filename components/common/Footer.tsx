import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdArrowForward, IoMdCall } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  const SOCIAL_LINKS: any[] = [
    {
      icon: <AiFillInstagram />,
      link: "",
    },
    {
      icon: <RiWhatsappFill />,
      link: "",
    },
    {
      icon: <TiSocialFacebook />,
      link: "",
    },
    { icon: <FaYoutube />, link: "" },
  ];
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="mx-auto w-[85%] max-w-[1200px]">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center justify-center gap-20 p-10 rounded-3xl bg-gradient-to-br from-blue-50/50 to-blue-100"
        >
          <div className="flex items-center gap-2">
            <img
              src="/images/UPT logo transperant.png"
              alt=""
              className="h-[80px]"
            />
          </div>

          <p className="text-sm text-zinc-500 mt-4 flex-1">
            United Premium Trading supplies top-grade construction materials for
            all projects. With years of experience, we ensure our clients
            receive the best products at the best prices.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="col-span-2 md:col-span-1"
        >

          <ul className="mt-8 flex items-center justify-center gap-10">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Products", path: "/products" },
              // { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((item: any, index: number) => (
              <li key={index}>
                <a
                  target="_blank"
                  href={item.path}
                  title=""
                  className="flex text-base group items-center hover:translate-x-0 -translate-x-2 gap-2 text-black transition-all duration-200  hover:font-semibold focus:text-blue-600"
                >
                  {" "}
                  <span className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 duration-300 text-blue-600 opacity-0">
                    <IoMdArrowForward />
                  </span>
                  {item.label}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="col-span-2 md:col-span-1"
          >
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Useful Links
            </p>

            <ul className="mt-6  space-y-4">
              {[
                { label: "Privacy & Policy", path: "/privacypolicy" },
                { label: "Refund Policy", path: "/refundpolicy" },
                { label: "Terms & Conditions", path: "/terms" },
                { label: "Admin Panel", path: "/admin" },
              ].map((item: any, index: number) => (
                <li key={index}>
                  <a
                    href={item.path}
                    title=""
                    className="flex text-base group items-center hover:translate-x-0 -translate-x-2 gap-2 text-black transition-all duration-200  hover:font-semibold focus:text-blue-600"
                  >
                    {" "}
                    <span className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 duration-300 text-blue-600 opacity-0">
                      <IoMdArrowForward />
                    </span>
                    {item.label}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

        {/* <div data-aos="fade-up" data-aos-delay="300" className=" col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              CONTACT
            </p>
            <p className="mt-5 font-semibold">
              United Premium Trading
            </p>
            <a href="" className="flex items-center gap-2 mt-2">
              <HiOutlineMail className="text-blue-600" />
              <p>connect@unitedpremium.ae</p>
            </a>
            <a href="" className="flex items-center gap-2 mt-2">
              <IoMdCall className="text-blue-600" />
              <p>+91- 0000000</p>
            </a>
            <a href="" className="flex items-center gap-2 mt-2">
              <FiGlobe className="text-blue-600" />
              <p>www.unitedpremium.ae</p>
            </a>
            <div className="flex mt-5">
              {SOCIAL_LINKS.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.link}
                  className="bg-gradient-to-tr from-blue-600 to-blue-500 text-white duration-300 p-2 rounded-[10px] mr-2 hover:scale-[1.1]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div> */}

        <hr className="mt-16 mb-8 border-zinc-300/60" />

        <div className="flex items-center justify-center md:justify-between">
          <p className="text-sm text-center text-gray-600">
            © 2025 United Premium. All rights reserved.
          </p>
          <a href="https://abaqas.in" className="text-sm my-2">
            ⚡ abaqas.in
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
