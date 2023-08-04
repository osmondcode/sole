import React, {useState} from 'react'
import SideBar from "./sideBar";
import NavBar from "./navBar";
import Explore from "./explore";
import ResSideBar from "./resSideBar";
import SearchPage from "./searchPage";




const Home = ({trendingSongs, genresSongs, playList, setPlayList, playSingle, handleSearchSong, HandlePlaySong, }) => {

    const [sideNav, setSideNav] = useState(false)
    const [search, setSearch] = useState(false)

    const handleSearch = () => {
      setSearch(!search)
    }

    const handleSideNav = () => {
      setSideNav(!sideNav)
    }

    
  return (
    <div className='w-full relative text-white md:pl-[200px] pl-0 md:pt-[2vh] pt-0 overflow-hidden'>
        <SideBar handleSearch={handleSearch} />
        <NavBar handleSideNav={handleSideNav}/>
        {sideNav && (
            <ResSideBar handleSideNav={handleSideNav} />
        )
        }
        {search && (
          <SearchPage handleSearch={handleSearch} handleSearchSong={handleSearchSong}/>
        )
        }
          <Explore HandlePlaySong={HandlePlaySong} trendingSongs={trendingSongs} genresSongs={genresSongs}  playList={playList} setPlayList={setPlayList} playSingle={playSingle}/>
    </div>
  )
}

export default Home