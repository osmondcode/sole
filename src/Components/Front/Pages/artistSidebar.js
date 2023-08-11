import React from 'react'
import { Link } from "react-router-dom";
import {FaTimes, FaSearch, FaHome, FaCompactDisc, FaUserTie, FaFire} from 'react-icons/fa'

const artistSidebar = ({handleSideBar}) => {
  return (
    <div onClick={handleSideBar} className='w-full h-screen fixed top-0 left-0 bg-black/70 z-50'>
       <div className='2sm:w-[80%] w-full h-screen absolute top-0 right-0 bg-white/20 backdrop-blur-lg'>
            <button className='absolute top-6 right-5' onClick={() => handleSideBar()}>
                <FaTimes className='w-[23px] h-[23px]'/>
            </button>
            <div className="w-full px-4 flex items-start justify-center flex-col h-1/2 gap-[15px] text-[1.3rem] mt-[2vh]">
                <Link to='/' className=" w-1/2 flex items-center justify-start gap-[10px]"><FaHome/> Home</Link>
                <Link className="w-1/2 flex items-center justify-start gap-[10px]"><FaSearch/> Search</Link>
                <Link to='/genre' className="w-1/2 flex items-center justify-start gap-[10px]"><FaCompactDisc/> Genres</Link>
                <Link to='/artistPage' className=" text-green-500 w-1/2 flex items-center justify-start gap-[10px]"><FaUserTie/> Artists</Link>
                <Link to='/trending' className="w-1/2 flex items-center justify-start gap-[10px]"><FaFire/> Trending</Link>
            </div>
        </div>
    </div>
  )
}

export default artistSidebar