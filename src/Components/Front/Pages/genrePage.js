import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaArrowLeft } from "react-icons/fa";
import SideBar from "./genreSideBar";
import Footer from "./footer";

const GenrePage = ({genresSongs}) => {
    const [sideBar, setSideBar] = useState(false)

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
  return (
    <div className='w-full gap-[30px] flex flex-col items justify-center flex-wrap text-white'>
        {sideBar && <SideBar handleSideBar={handleSideBar}/>}
        <nav className='w-full sticky top-0 left-0 bg-white/20 backdrop-blur-lg z-40 h-[12vh] flex px-8 items-center justify-between'>
            <Link to='/' className='no-underline cursor-pointer italic text-[35px] font-bold'>Sole</Link>    
            <div className='sm:flex hidden items-center gap-[15px]'>
              <span className='p-1.5 border-[1px] border-white  rounded-md cursor-pointer hover:bg-white/10'><FaUser className='w-[23px] h-[21px]'/></span>
              <button className='px-3 bg-green-400 text-black py-2 rounded-xl'>Download</button>
            </div>
            <button className='flex sm:hidden' onClick={handleSideBar}><FaBars className='w-[22px] h-[22px]'/></button>
        </nav>
        <div className='absolute w-full h-[5vh] top-[12vh] left-0 bg-white/10 backdrop-blur-lg flex items-center justify-start pl-[5%]'>
            <Link to='/' className='no-underline flex gap-[8px] items-center justify-center font-semibold text-[20px]'>
                <FaArrowLeft className='w-[18px] h-[18px]'/>
                Genres
            </Link>
        </div>
        <div className='w-full min-h-[82vh] pt-[5vh] mb-[3vh] px-[40px]  gap-y-[30px] gap-x-[20px] flex items justify-center flex-wrap'>    
            {genresSongs.map((genre, i) => (
                <div key={i} className='w-[230px] mx-[10px] hover:backdrop-blur-md hover:bg-white/20 duration-300 h-[300px] bg-white/10 flex flex-col items-center justify-between text-start cursor-pointer p-3 rounded-lg gap-[10px] relative'>
                    <span  className='w-full h-[200px] flex items justify-center overflow-hidden rounded-lg'>
                        <img src={genre.image} alt={genre.name} className='w-full h-full object-cover'/>
                    </span>
                    <h2 className='w-full text-start font-semibold'>{genre.name}</h2>
                </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default GenrePage