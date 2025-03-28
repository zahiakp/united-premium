"use client";
import Link from "next/link";
import React from "react";
import { LuYoutube } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import dynamic from "next/dynamic";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

function Content() {
  const ContactForm = dynamic(() => import("./Form"), { ssr: false });
  const SOCIAL_LINKS: any[] = [
    { icon: <AiFillInstagram />, link: "" },
    { icon: <RiWhatsappFill />, link: "" },
    { icon: <TiSocialFacebook />, link: "" },
    { icon: <FaYoutube />, link: "" },
  ];
  return (
    <div className="w-full bg-blue-50">
      <div className="w-[80%] max-w-[1000px] mx-auto flex flex-col md:flex-row justify-center gap-14 py-20">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-blue-800">
            Contact <span className="font-[300]"> Us</span>
          </h1>

          <section>
            <div className="text-gray-600 text-lg  mt-5">
              <b>United Premium Trading</b> <br />
              {/* Andhaka, Sudaka - Haryana */}
              <section className="py-3">
                <a href="" className="flex items-center gap-2 mt-2">
                  <HiOutlineMail className="text-blue-600" />
                  <p>connect@unitedpremium.ae</p>
                </a>
                <a href="" className="flex items-center gap-2 mt-2">
                  <IoMdCall className="text-blue-600" />
                  <p>+97 <span className="font-semibold"> 1543618581</span></p>
                </a>
                <a
                  href="https://www.unitedpremium.ae/"
                  className="flex items-center gap-2 mt-2"
                >
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
              </section>
            </div>
          </section>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white w-full max-w-[600px] shadow-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Content;
