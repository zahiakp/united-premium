import Link from 'next/link'
import React from 'react'

function Nav({active}:{active:string}) {
    const navItems = [
        {name: 'Home', href: '/'},
        {name: 'About', href: '/about'},
        {name: 'Products', href: '/products'},
        {name: 'Services', href: '/services'},
        {name: 'Contact', href: '/contact'},
    ]
  return (
    <div className='w-full h-28 bg-blue-custom flex items-center justify-around'>
      <img src="/images/UPT logo.jpg" alt="" className='h-28'/>
      <div className='flex items-center justify-center  text-white/70 gap-10'>
        {navItems.map((item, index) => (
            <Link href={item.href} className={`${item.name == active ? "-translate-y-1 after:h-[2px] text-white font-medium after:w-full after:bg-blue-400 after:absolute relative after:-bottom-1 after:right-0 ":""}hover:text-white cursor-pointer duration-200`}>{item.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default Nav
