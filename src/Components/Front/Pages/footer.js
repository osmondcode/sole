import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-[50vh] md:px-[10vh] px-[3vh] mt-[5vh] bg-white/5 text-slate-200 pt-[3vh] pb-[2vh] mb-[13vh]'>
        <div className='w-full flex items-start justify-between flex-wrap gap-[25px]'>
            <div className='w-[60%] flex flex-wrap items-start justify-between'>
                <div className='my-[20px] md:my-0'>
                    <h2 className='font-bold'>Company</h2>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>About</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Jobs</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>For the Record</p>
                </div>
                <div className='my-[20px] md:my-0'>
                    <h2 className='font-bold'>Communities</h2>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>For Artists</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Developers</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Advertising</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Investors</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Vendors</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Sole for Work</p>
                </div>
                <div className='my-[20px] md:my-0'>
                    <h2 className='font-bold'>Useful lins</h2>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Support</p>
                    <p className='cursor-pointer hover:underline my-2 font-thin'>Free Mobile App</p>
                </div>
            </div>
            <div className='flex gap-[20px] items-start'>
                <p className='w-[40px] p-1 h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 bg-white/10 cursor-pointer'>
                    <FaTwitter className='w-[20px] h-[20px]'/>
                </p>
                <p className='w-[40px] p-1 h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 bg-white/10 cursor-pointer'>
                    <FaFacebook className='w-[20px] h-[20px]'/>
                </p>
                <p className='w-[40px] p-1 h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 bg-white/10 cursor-pointer'>
                    <FaInstagram className='w-[20px] h-[20px]'/>
                </p>
            </div>
        </div>
        <div className='w-full flex items-center justify-between border-t-[0.2px] border-slate-400 mt-[4vh] pt-[4vh] flex-wrap'>
            <div className='flex items-center flex-wrap justify-between w-[70%]'>
            <p className='cursor-pointer hover:underline my-2 font-thin '>Legal</p>
            <p className='cursor-pointer hover:underline my-2 font-thin '>Privacy Center</p>
            <p className='cursor-pointer hover:underline my-2 font-thin '>Privacy Policy</p>
            <p className='cursor-pointer hover:underline my-2 font-thin '>Cookies</p>
            <p className='cursor-pointer hover:underline my-2 font-thin '>About Ads</p>
            <p className='cursor-pointer hover:underline my-2 font-thin '>Accessibility</p>
            </div>
            <div>
                <p>© 2023 OsmondCode</p>
            </div>
        </div>
    </div>
  )
}

export default footer