import React from 'react'

const genresComponent = ({genresSongs}) => {
  return (
    <div className='w-full gap-[30px] flex flex-col items justify-center flex-wrap'>
        <div className='w-full h-fit px-[30px] sm:px-[40px] flex items-center justify-between'>
            <h1 className='font-semibold text-[22px]'>Genres</h1> 
            <button className='underline'>Show All</button>
        </div>
        <div className='w-full gap-y-[30px] gap-x-[20px] flex items justify-center flex-wrap'>
        {genresSongs.map((genre, index) => (
            <div key={index} className='w-[200px] hover:backdrop-blur-md hover:bg-white/20 duration-300 h-[280px] bg-white/10 flex flex-col items-center justify-between text-start cursor-pointer p-3 rounded-lg gap-[10px] relative'>
                <div className='w-full h-[200px] flex items justify-center overflow-hidden rounded-lg'>
                    <img src={genre.image} alt={genre.name} className='w-full h-full object-cover'/>
                </div>
                <h2 className='w-full text-start font-semibold'>{genre.name}</h2>
            </div>
        ))}
        </div>
    </div>
  )
}

export default genresComponent