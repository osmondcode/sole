import React, { useState } from 'react'
import { FaArrowLeft, FaBars, FaClock, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import SideBar from "./songSideBar";
import Footer from "./footer";

const SongPage = ({playSong}) => {
    const [sideBar, setSideBar] = useState(false)

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
  return (
    <div className='w-full min-h-screen flex flex-col items-center text-white'>
        {sideBar && <SideBar handleSideBar={handleSideBar}/>}
        <nav className='w-full h-[12vh] bg-white/20 backdrop-blur-lg flex items-center justify-between px-[2vh] 2sm:px-[7vh]'>
            <Link to='/' className='text-[35px] no-underline font-bold italic'>Sole</Link>
            <div className='sm:flex hidden items-center gap-[15px]'>
                    <span className='p-1.5 border-[1px] border-white  rounded-md cursor-pointer hover:bg-white/10'><FaUser className='w-[23px] h-[21px]'/></span>
                    <button className='px-3 bg-green-400 text-black py-2 rounded-xl'>Download</button>
                </div>
                <button onClick={handleSideBar} className='flex sm:hidden'><FaBars className='w-[22px] h-[22px]'/></button>
        </nav>
        <div className='w-full py-2 px-[10vh] flex items-center justify-start'>
            <Link to='/' className='no-underline flex items-center justify-start gap-[10px] font-semibold'>
                <FaArrowLeft className='w-[18px] h-[18px]'/>
                Home
            </Link>
        </div>
        <div className='w-full min-h-[88vh] mt-[8.5vh] flex flex-col items-center'>
            {playSong.map((song, i) => (
                <div key={i} className='w-full h-fit bg-gradient-to-b from-black/70 to-white/10'>
                    {i === 0 && (
                        <div className='w-full  flex flex-col md:flex-row items-center md:items-end md:justify-start justify-center md:px-[10vh] px-[4vh] py-[4vh]'>
                            <span className='2sm:w-[250px] w-[200px] 2sm:h-[250px] h-[200px] flex items-center justify-center overflow-hidden rounded-md'>
                                <img src={song.image} alt={song.artist} className='w-full h-full object-cover'/>
                            </span>
                            <span className='mx-[5vh] md:w-fit w-full flex flex-col md:text-start text-center my-[2vh]'>
                                <h4 className='md:text-[18px] md:font-normal font-thin text-[14px] '>Single</h4>
                                <h1 className='md:text-[42px] text-[28px] font-bold w-full truncate'>{song.title}</h1>
                                <p className='md:text-[21px] font-thin md:font-normal text-[18px] w-full truncate'>{song.artist}</p>
                            </span>
                        </div>
                    )}
                </div>
            ))}
            <div className='w-full h-[44vh] flex flex-col items-center bg-black'>
                <span className='w-full md:px-[10vh] px-[4vh] flex items-center justify-between py-[2vh] bg-white/10 mt-[1vh]'>
                    <span className='flex items-center gap-[25px]'>
                        <p>#</p>
                        <p>Title</p>
                    </span>
                    <span>
                        <FaClock/>
                    </span>
                </span>
                {playSong.map((song, i) => (
                    <span key={i} className='w-full flex justify-center items-center md:px-[9vh] px-[2vh] my-[2vh] cursor-pointer'>
                        {i === 0 && (
                            <div className='w-full flex items-center justify-between p-[10px] bg-white/10 rounded-md text-slate-100 hover:scale-[1.01]'>
                                <div className='flex items-center gap-[25px]'>
                                    <p className='font-bold'>1</p>
                                    <div>
                                        <h1 className='font-semibold'>{song.title}</h1>
                                        <h3 className='font-thin text-slate-200'>{song.artist}</h3>
                                    </div>
                                </div>
                                <div>
                                    <p>2:40</p>
                                </div>
                            </div>
                        )}
                    </span>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SongPage