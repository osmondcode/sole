import React from 'react'

const artistSidebar = ({handleSideBar}) => {
  return (
    <div onClick={handleSideBar} className='w-full h-screen fixed top-0 left-0 bg-black/70 z-50'>artistSidebar</div>
  )
}

export default artistSidebar