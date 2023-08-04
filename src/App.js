import './App.css';
import Trend from "./Components/Back/trend/trendingsong";
import Genres from "./Components/Back/genres/genres";
import Home from "./Components/Front/Pages/Home";
import React, { useState, useRef } from "react";
import BottomPlayer from "./Components/Front/Pages/bottomplayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenrePage from "./Components/Front/Pages/genrePage";
import SongPage from "./Components/Front/Pages/songPage";
import ArtistPage from "./Components/Front/Pages/artist";
import TrendingSongsPage from "./Components/Front/Pages/trendingSongsPage";
import Artist from "./Components/Back/genres/artistData/artistData";

function App() {
  const { trendingSongs } = Trend;
  const { genresSongs } = Genres;
  const { ArtistData } = Artist

    const [isLiked, setIsLiked] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [playList, setPlayList] = useState([])
    const audioRef = useRef();
    const [currentSong, setCurrentSong] = useState(trendingSongs[0]);

    const playSingle = (music) => {
      const findMusic = trendingSongs.find(song => song.id === music.id)

      if (findMusic){
        setCurrentSong(music)
      }
      
      
    }

  
    const handleToggle = () => {
      setIsPlaying(!isPlaying);
      setIsActive(!isActive)
    };
    
    const handleLike = () => {
        setIsLiked(!isLiked)
    }


    const [search, setSearch] = useState([])

    const handleSearchSong = (music) => {
      const songCorrect = trendingSongs.find(song => song.id === music.id)
      if (songCorrect) {
        setSearch(search.map((song) => song.id === music.id ? {...songCorrect, quantity: songCorrect.quantity + 1}: song))
      }
      console.log(search);
    }

    const [deleteModal, setDeleteModal] = useState(false)

    const deleteOption = () => {
      setDeleteModal(!deleteModal)
    }


    const [playSong, setPlaySong] = useState([])


    // const lastElement = playSong[playSong.length - 1]

    // const getLastObject = () => {
    //   if (playSong.length === 0) {
    //     console.log('not yet'); // Return null or handle empty array case
    //   }
    //   const lastElement = playSong[playSong.length - 1];
    //   console.log(lastElement);
    // };
    
    
    
    
    const HandlePlaySong = (music) => {
      const currentSong = trendingSongs.find(song => song.id === music.id)
      setPlaySong([])
      if (playSong.length === 0) {
        if (currentSong) {
          setPlaySong([...playSong, {...music, quantity: 1}])
        } else{
          setPlaySong(playSong.map((song) => song.id === music.id ? 
          {...currentSong, quantity: currentSong.quantity + 1}: song)
          )
        }
      } 
      console.log(playSong.length);
      console.log(music);
      
    }
    



  return (
    <div className="App w-full bg-[#000] text-white">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home playSingle={playSingle} deleteModal={deleteModal} deleteOption={deleteOption} trendingSongs={trendingSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isActive={isActive} playSong={playSong} setIsActive={setIsActive}  handleToggle={handleToggle} genresSongs={genresSongs} playList={playList}  HandlePlaySong={HandlePlaySong} isLiked={isLiked} handleLike={handleLike}    setPlayList={setPlayList} handleSearchSong={handleSearchSong} />} />
            
            <Route path='/genre' element={<GenrePage genresSongs={genresSongs} />}/>
            <Route path='/artistPage' element={<ArtistPage ArtistData={ArtistData}/>}/>
            <Route path='/trending' element={<TrendingSongsPage trendingSongs={trendingSongs} HandlePlaySong={HandlePlaySong}/>} />
            <Route path='/songPage' element={<SongPage playSong={playSong}/>}/>
        </Routes>
      </BrowserRouter>
        <BottomPlayer   trendingSongs={trendingSongs} handleLike={handleLike} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isActive={isActive} setIsActive={setIsActive} audioRef={audioRef} playSong={playSong} handleToggle={handleToggle} isLiked={isLiked} setPlaySong={setPlaySong} currentSong={currentSong} setCurrentSong={setCurrentSong} playSingle={playSingle}/>
    </div>
  );
}

export default App;
