import React from 'react'
import Image01 from '/images/image02.jpg'
import Image02 from '/images/iage.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div className='mt-20'>
      <div className='flex justify-around '>
           <img className='h-[300px] ' src={Image01} alt="" />
           <div className='w-[600px] flex flex-col text-wrap shadow-sm justify-center  text-center  align-middle  items-center rounded-lg'>
            <h3 className='font-bold'>Unlock the Future with AI!</h3>
           <p className='text-sm'>Dive into a world where artificial intelligence transforms the way you interact with technology. Experience seamless automation, personalized recommendations, and cutting-edge solutions tailored just for you.</p>
         <Link to='/chat'>
         <div className='flex '>
          <button className='mt-5 text-blue-500 hover:underline font-bold text-sm'>Start Asking AI </button>
           <IoIosArrowForward   className='mt-6 text-sm font-bold ml-1 text-blue-500'/>

          </div>
         </Link>
           </div>
          
      </div>
      <div className='flex justify-around mt-20 '>
           <div className='w-[600px] flex flex-col text-wrap shadow-sm justify-center  text-center  align-middle  items-center rounded-lg'>
            <h3 className='font-bold'>Revolutionize Your Experience with AI!</h3>
           <p className='text-sm'>Discover how our innovative AI technology enhances your daily tasks and decision-making. Embrace efficiency, creativity, and unparalleled insights that empower you to achieve more than ever before!</p>
           
            <Link to='/chat'><button className='mt-10 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-black transition ease-in-out duration-300'>Get Started</button></Link>
           
           </div>
           <img className='h-[300px]' src={Image02} alt="" />

          
      </div>
    </div>
  )
}

export default Homepage
