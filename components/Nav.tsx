import React from 'react'

function Nav() {
    const navItems = [
        {name: 'Home', href: '/'},
        {name: 'About', href: '/about'},
        {name: 'Services', href: '/services'},
        {name: 'Contact', href: '/contact'},
    ]
  return (
    <div className='w-full h-28 bg-blue-custom flex items-center justify-around'>
      <img src="/images/UPT logo.jpg" alt="" className='h-28'/>
      <div className='flex items-center justify-center text-white gap-10'>
        {navItems.map((item, index) => (
            <p>{item.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Nav
