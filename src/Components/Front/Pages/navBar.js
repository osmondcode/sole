import React from 'react'
import { FaBars } from "react-icons/fa";

const navBar = ({handleSideNav}) => {
  return (
    <div className='w-full h-[10vh] z-50 right-0 top-0 fixed md:hidden flex items-center justify-between px-5 bg-white/5 backdrop-blur-lg'>
      <h2 className='italic text-[25px]'>Sole</h2>
      <button className='w-[24px] h-[24px] flex items-center justify-center' onClick={handleSideNav}><FaBars className='w-[23px] h-[23px]'/></button>
    </div>
  )
}

export default navBar