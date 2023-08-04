import React from 'react'
import {  FaPlay,  } from "react-icons/fa";

const TrendComponent = ({trendingSongs, HandlePlaySong, playSingle}) => {


    

  return (
    <div className='w-full flex flex-col items-center justify-center pt-[2vh]'>
        <div className='w-full h-fit px-[30px] sm:px-[40px] flex items-center justify-between pb-[2vh]'>
            <h1 className='font-semibold text-[22px]'>Trending Songs</h1> 
            <button className='underline'>Show All</button>
        </div>
        <div className='w-full gap-y-[30px] gap-x-[20px] flex items justify-center flex-wrap'>
                {trendingSongs.map((song, index)  => {
                        
                    return(
                        <div key={index}  className='w-[200px] hover:backdrop-blur-md hover:bg-white/20 duration-300 h-[260px] bg-white/10 flex flex-col items-center justify-between text-start cursor-pointer px-3 pb-3 rounded-lg gap-[10px] relative'>
                            <div className='absolute flex opacity-0 hover:opacity-100 duration-300 items-center justify-center text-black w-[200px] h-[280px] bg-black/50 z-40'>
                                <span onClick={() => playSingle(song)} className='w-[45px] rounded-full h-[45px] flex items-center justify-center bg-green-500 active:rotate-180 duration-1000'>
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
    </div>
  )
}

export default TrendComponent