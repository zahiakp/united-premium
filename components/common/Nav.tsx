'use client'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { Twirl as Hamburger } from "hamburger-react";
import { AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaYoutube } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';

function Nav({active}:{active:string}) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

    const navItems = [
        {name: 'Home', href: '/'},
        {name: 'About', href: '/about'},
        {name: 'Products', href: '/products'},
        // {name: 'Services', href: '/services'},
        {name: 'Contact', href: '/contact'},
    ]
  return (
    <>
    <div className='w-full h-24 md:h-28 bg-blue-custom flex items-center justify-around'>
      <img src="/images/UPT logo.jpg" alt="" className='h-24 md:h-28'/>
      <div className='hidden md:flex items-center justify-center  text-white/70 gap-[25%]'>
        {navItems.map((item, index) => (
            <Link href={item.href} className={`${item.name == active ? "-translate-y-1 after:h-[2px] text-white font-medium after:w-full after:bg-blue-400 after:absolute relative after:-bottom-1 after:right-0 ":""}hover:text-white cursor-pointer duration-200`}>{item.name}</Link>
        ))}
      </div>
      <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            color="#fff"
            size={27}
            rounded
          />
        </div>
    </div>
     {isOpen && (
      <section className="z-[5] md:hidden bg-blue-50 fixed top-[90px] right-0 w-full py-5 h-[100vh] flex flex-col justify-start overflow-y-scroll">
        <div>
          {navItems.map((item, index) => (
            <div key={index} className="w-full">
              <div
                // onClick={() => handleMobileDropdown(index + 1)}
                className="hover:font-bold hover:translate-x-1 w-full justify-between box-border p-3 px-10 pr-20 hover:bg-blue-200/70 duration-300 font-bold text-blue-600 flex items-center border-b border-blue-100"
              >
                <Link
                  href={item.href || "#"}
                  className="text-xl text-custom flex items-center gap-4"
                >
                  <span className="text-lg text-blue-400 opacity-50">
                    <IoMdArrowForward />
                  </span>
                  {item.name}
                </Link>
              </div>
              
            </div>
          ))}
        </div>
        <div className="py-5 mt-1 border-t flex gap-2 border-blue-500 mx-10">
          {[
            {
                              icon: <AiFillInstagram />,
                              link: "https://www.instagram.com/mysukoon.in?igsh=ejhubHRlMGJ6dmZo",
                            },
                            { icon: <RiWhatsappFill />, link: "https://wa.me/+919645900096?text=Hello%20Sukoon%20Edu%20Village" },
                            { icon: <TiSocialFacebook />, link: "https://www.facebook.com/share/12LAMTKXN79/?mibextid=wwXIfr" },
                            // { icon: <FaXTwitter />, link: "" },
                            { icon: <FaYoutube />, link: "https://youtu.be/qvimT91m6V0" },
          ].map((icon, i) => (
            <Link
              target="_blank"
              key={i}
              href={icon.link || "#"}
              className="p-2 bg-blue-200 text-blue-800 rounded-lg text-xl"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </section>
    )}</>
  )
}

export default Nav
