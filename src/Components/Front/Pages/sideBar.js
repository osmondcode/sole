import React from 'react'
import { FaCompactDisc, FaFire, FaHome, FaSearch, FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';

const sideBar = ({handleSearch, }) => {
  return (
    <div className='w-[200px] z-40 h-[88vh] left-0 top-0 fixed bg-white/5 backdrop-blur-lg md:flex flex-col hidden items-center justify-start'>
      <div className='w-[70%] flex flex-col items-start py-3'>
        <h1 className='italic font-bold text-[40px]'>Sole</h1>
      </div>
      <div className='w-[70%] flex flex-col items-start gap-[20px] pt-3'>
        <button className='flex items-center gap-[15px] text-[14px] text-green-500 font-bold justify-center'><FaHome className='w-[20px] h-[20px]'/> Home</button>
        <button onClick={handleSearch} className='no-underline flex items-center gap-[15px] text-[14px] justify-center'><FaSearch className='w-[20px] h-[20px]'/> Search</button>
        <Link to='/genre' className='flex items-center gap-[15px] text-[14px] justify-center'><FaCompactDisc className='w-[20px] h-[20px]'/> Genres</Link>
        <Link to='/artistPage' className='flex items-center gap-[15px] text-[14px] justify-center'><FaUserTie className='w-[20px] h-[20px]'/> Artists</Link>
        <Link to='/trending' className='flex items-center gap-[15px] text-[14px] justify-center'><FaFire className='w-[20px] h-[20px]'/> Trending</Link>
      </div>
      <div className='w-full px-3 flex flex-col items-start gap-[20px] pt-3 absolute bottom-0 right-0'>
        <span className='flex items-start flex-wrap gap-x-[16px]'>
          <p className='font-light text-[14px]'>Privacy Policy</p>
          <p className='font-light text-[14px]'>Cookies</p>
          <p className='font-light text-[14px]'>AboutAds</p>
          <p className='font-light text-[14px]'>Accessibility</p>
        </span>
        <span className='w-full flex items-center justify-center mb-3 flex-col gap-4'>
          <button className='w-[80%] py-2 border-[1px] duration-500 hover:bg-green-500 border-slate-500 rounded-lg text-[16px]'>Get The App</button>
          <button className='w-[80%] py-2 border-[1px] duration-500 hover:bg-green-500 border-slate-500 rounded-lg text-[16px]'>Log In</button>
        </span>
      </div>
    </div>
  )
}

export default sideBar