import React from 'react'
import TrendComponent from "./trendComponent";
import GenresComponent from "./genresComponent";
import Footer from "./footer";

const explore = ({trendingSongs, playList, genresSongs, playlistsAdd, isLiked, setPlayList, HandlePlaySong, playSingle}) => {
  return (
    <div className='lg:w-full md:mt-0 2sm:mt-[10vh] mt-[4vh] w-full min-h-[88vh] overflow-x-hidden overflow-y-scroll flex flex-col pb-[16vh] items-center justify-center flex-wrap 2sm:pt-0 pt-[7vh]'>
        <div className='w-full flex items justify-center flex-wrap gap-y-[30px] gap-x-[20px]'>
            <TrendComponent HandlePlaySong={HandlePlaySong} trendingSongs={trendingSongs} playlistsAdd={playlistsAdd} playList={playList} isLiked={isLiked} setPlayList={setPlayList} playSingle={playSingle}/>
            <GenresComponent genresSongs={genresSongs}/>
        </div>
        <Footer/>
    </div>
  )
}

export default explore