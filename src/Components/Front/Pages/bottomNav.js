import React from 'react'
import { FaPause, FaPlay, } from "react-icons/fa";

const bottomNav = ({trendingSongs, isPlaying, setIsPlaying, isActive, setIsActive, audioRef, handleToggle}) => {
  return (
    <div  className='w-full z-50 h-[10vh] left-0 bottom-0 fixed bg-white/20 flex sm:hidden items-center justify-center backdrop-blur-lg'>
      <div className='w-full h-full' >
        {trendingSongs.map((song, i) => (
          <div key={i} className='w-full h-full'>
            {i === 0 && (
              <div className='relative w-full h-full flex items-center justify-between'>
                <div className='w-full absolute top-0 flex items-center justify-center overflow-hidden lg:hidden left-0'>
                  <input type='range' className='range w-full mini-range' />
                </div>
                <span className='w-[40px] overflow-hidden h-[40px] flex items-center justify-center ml-2 rounded-md'><img src={song.image} className='w-full h-full object-cover' alt={song.artist} /></span>
                <span className='w-[70%] h-[8vh] flex flex-col items-center justify-center gap-0.5'>
                  <h4 className='font-medium text-[18px]'>{song.artist}</h4>
                  <p  className='font-light text-[14px]'>{song.title}</p>
                </span>
                <span className='w-[40px] h-[40px] rounded-lg hover:bg-white/10 mr-2 flex items-center justify-center' onClick={handleToggle}>{
                  isPlaying ? <FaPause className='w-[22px] h-[22px]'/> : <FaPlay className='w-[22px] h-[22px]'/> 
                }</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default bottomNav