import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='h-[100px] mt-20 text-white bg-black flex justify-around items-center text-center'>
      <h1 className='text-sm font-bold '>Created and Designed by Pranav</h1>
      <div className='flex flex-row '>
        <a href="https://github.com/pranavv04" target='__blank'><FaGithub className='mr-2 text-2xl' /></a>
      <a href="https://linkedin.com/in/pranav-dhangar-26b67a220" target='__blank'>  <FaLinkedin  className='mr-2 text-2xl'/></a>
      <a href=""><FaInstagram className='mr-2 text-2xl' /></a>
      <a href="https://x.com/_pranavv04_" target='__blank'>  <FaTwitterSquare  className='mr-2 text-2xl'/></a>
    
      
    
      </div>
    </div>
  )
}

export default Footer
