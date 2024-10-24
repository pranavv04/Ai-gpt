import React from 'react'
import './navbar.css'
import { IoLogoReddit } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='h-[80px] flex justify-around mt-7 shadow-md '>
     <NavLink to='/'>
     <div className='flex'>
     <IoLogoReddit className=' mr-2  text-4xl'/>
     <h1 className='logo text-3xl font-bold'>AI-Gpt</h1>
     </div>
     </NavLink>
     <NavLink to='/chat'>
     <div>
        <button className='bg-black text-white px-4 py-2 text-sm rounded-md'>Get Started</button>
     </div> 
     </NavLink>
    </div>
  )
}

export default Navbar
