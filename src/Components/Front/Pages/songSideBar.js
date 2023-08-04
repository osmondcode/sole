import React from 'react'

const songSideBar = ({handleSideBar}) => {
  return (
    <div onClick={handleSideBar} className='w-full h-screen bg-white/10 backdrop-blur-lg fixed top-0 left-0'>
        SIDEBAR
    </div>
  )
}

export default songSideBar