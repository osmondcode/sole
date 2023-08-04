import React, { useState } from 'react'
import { FaArrowLeft, FaBars, FaHeadset, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SideBar from "./artistSidebar";
import Footer from "./footer";

const Artist = ({ArtistData}) => {

  const [sideBar, setSideBar] = useState(false)

  const handleSideBar = () => {
      setSideBar(!sideBar)
  }
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center text-white'>
      {sideBar && <SideBar handleSideBar={handleSideBar}/>}
        <nav className='w-full fixed top-0 left-0 bg-white/20 backdrop-blur-lg z-40 h-[12vh] flex px-8 items-center justify-between'>
            <Link to='/' className='no-underline cursor-pointer italic text-[35px] font-bold'>Sole</Link>    
            <div className='sm:flex hidden items-center gap-[15px]'>
              <span className='p-1.5 border-[1px] border-white  rounded-md cursor-pointer hover:bg-white/10'><FaUser className='w-[23px] h-[21px]'/></span>
              <button className='px-3 bg-green-400 text-black py-2 rounded-xl'>Download</button>
            </div>
            <button className='flex sm:hidden' onClick={handleSideBar}><FaBars className='w-[22px] h-[22px]'/></button>
        </nav>
        <div className='w-full min-h-[88vh] mt-[12vh] flex flex-col'>
        <div className='absolute w-full h-[5vh] top-[12vh] left-0 bg-white/10 backdrop-blur-lg flex items-center justify-start pl-[5%]'>
            <Link to='/' className='no-underline flex gap-[8px] items-center justify-center font-semibold text-[20px]'>
                <FaArrowLeft className='w-[18px] h-[18px]'/>
                Artists
            </Link>
        </div>
          <div className='w-full flex min-h-[82vh] items-center justify-center gap-[20px] flex-wrap pb-[5vh] px-[5vh] mt-[7vh]'>
            {ArtistData.map((song) => (
              <div key={song.id} className='w-[200px] h-[250px] bg-black flex flex-col items-center justify-center rounded-md hover:bg-white/10 cursor-pointer'>
                <span className='w-[150px] h-[150px] overflow-hidden rounded-full mb-[15px]'>
                  <img src={song.image} alt={song.name} className='w-full h-full object-cover'/>
                </span>
                <h4 className='w-full truncate capitalize flex gap-[5px] items-center justify-center font-bold'>{song.name}</h4>
                <h4 className='w-full truncate flex gap-[5px] items-center justify-center font-thin'><FaHeadset/>{song.likes}m</h4>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Artist