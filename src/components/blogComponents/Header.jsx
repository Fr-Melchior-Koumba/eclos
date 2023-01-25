import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinksBlog } from '../../constants'
import {logo, close, menu } from '../../assets/images'

const Header = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex justify-between items-center py-6 navbar'>
    <Link to='/'>
     <img src={logo} alt="eclos logo" width={120} height={120}/>
    </Link>

     <ul className='list-none sm:flex hidden justify-end items-center'>
         {navLinksBlog.map((nav, index) => (
             <li key={nav.id} className={`text-[16px] cursor-pointer tracking-[2px] ${index === navLinksBlog.length -1 ? 'mr-10' : 'mr-10'} text-white hover:text-terciary`}>
                 <Link to={nav.url} className='flex items-center gap-2 border-[1px] border-secondary hover:border-terciary py-3 px-6 rounded-full'>
                     <img src={nav.img} alt={nav.name} width={25} height={25} />
                     {nav.name}
                 </Link>
             </li>
         ))}
     </ul>

     <div className='sm:hidden flex flex-1 justify-end items-center mr-8'>
         <img src={toggle ? close : menu } alt='icon menu' 
         width={35} height={35} className='object-contain cursor-pointer' 
         onClick={() => setToggle((prev) => !prev)}
         />

         <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary border-2 border-terciary absolute top-[7rem] right-15 min-w-[150px] rounded-xl menu-sidebar`}>
         <ul className='list-none flex flex-col items-center'>
             {navLinksBlog.map((nav, index) => (
                 <li key={nav.id} className={`text-[16px] cursor-pointer tracking-[2px] ${index === navLinksBlog.length -1 ? 'mr-0' : 'mb-10'} text-white`}>
                     <Link to={nav.url} className='flex items-center gap-2 border-[1px] border-secondary py-3 px-6 rounded-full'>
                         <img src={nav.img} alt={nav.name} width={25} height={25} />
                         {nav.name}
                     </Link>
                 </li>
             ))}
         </ul>
         </div>
     </div>
    </nav>
  )
}

export default Header