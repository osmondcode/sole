import React, {useState} from 'react'
import { FaBars, FaUser, FaPlay, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SideBar from "./trendingSidebar";
import Footer from "./footer";

const TrendingSongsPage = ({trendingSongs, HandlePlaySong}) => {
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
        <div className='absolute w-full h-[5vh] top-[12vh] left-0 bg-white/10 backdrop-blur-lg flex items-center justify-start pl-[5%]'>
            <Link to='/' className='no-underline flex gap-[8px] items-center justify-center font-semibold text-[20px]'>
                <FaArrowLeft className='w-[18px] h-[18px]'/>
                Trending Songs
            </Link>
        </div>
        <div className='w-full md:px-[120px] 2sm:px-[60px] px-[20px] mt-[20vh] gap-y-[30px] gap-x-[20px] flex items justify-center flex-wrap'>
        {trendingSongs.map((song, index)  => {
                        
                return(
                    <div key={index}  className='w-[200px] hover:backdrop-blur-md hover:bg-white/20 duration-300 h-[260px] bg-white/10 flex flex-col items-center justify-between text-start cursor-pointer px-3 pb-3 rounded-lg gap-[10px] relative'>
                        <div className='absolute flex opacity-0 hover:opacity-100 duration-300 items-center justify-center text-black w-[200px] h-[280px] bg-black/50 z-40'>
                            <span onClick={() => HandlePlaySong(song)} className='w-[45px] rounded-full h-[45px] flex items-center justify-center bg-green-500 active:rotate-180 duration-1000'>
                                <FaPlay className='w-[22px] h-[22px] text-white'/>
                            </span>
                        </div>
                        <div className='w-full h-[200px] flex items justify-center overflow-hidden rounded-lg mt-3'>
                            <img src={song.image} alt={song.artist} className='w-full h-full object-cover'/>
                        </div>
                        <h3 className='w-full text-[15px] text-start font-semibold'>{song.artist}</h3>
                        <p className='w-full text-start font-light text-slate-300'>{song.title}</p>
                    </div>
                )}
                )}
        </div>
        <Footer/>
    </div>
  )
}

export default TrendingSongsPage