import React from 'react'
import { FaSearch } from 'react-icons/fa'

const searchPage = ({handleSearch, handleSearchSong}) => {
     
  return (
    <div className='w-full h-screen z-50 bg-black/30 fixed top-0 backdrop-blur-lg left-0 flex flex-col items-center justify-center text-white'>
        <div className='w-full h-screen flex flex-col items-center pt-[3vh] justify-center'> 
            <div className='w-full sm:w-[85%] flex items-center justify-center p-4 h-[11vh] bg-black/50 rounded-md gap-[20px]'>
                <input type='text' className='w-full h-full bg-transparent border-[1px] border-[#fff] outline-none rounded-md pl-[20px] py-2' placeholder='Search your favourite song'/>
                <button className='w-[40px] rounded-md h-full border-[1px] border-white flex items-center hover:bg-white/20 duration-500 justify-center'>
                    <FaSearch className='w-[20px] h-[20px]'/>
                </button>
            </div>
            <div className='w-full h-[86vh]'  onClick={handleSearch}>

            </div>
        </div>
    </div>
  )
}

export default searchPage