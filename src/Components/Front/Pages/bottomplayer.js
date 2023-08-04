import React, { useEffect, useState} from 'react'
import { FaStepBackward, FaStepForward, FaPlay, FaVolumeDown, FaVolumeUp, FaPause } from "react-icons/fa";

const Bottomplayer = ({trendingSongs, audioRef, setCurrentSong, currentSong, handleLike }) => {

  const [cTime, setCTime] = useState('00:00')
  const [duraTion, setDuraTion] = useState('00:00')
  const [ctFormattedTime, setCTFormattedTime] = useState('00:00')
  const [dtFormattedTime, setDTFormattedTime] = useState('00:00')
  

      const skipBackward = () => {
        

        const index = trendingSongs.findIndex(x => x.title === currentSong.title)
        
        if (index === 0) {
            setCurrentSong(trendingSongs[trendingSongs.length - 1])

              } else {
                  setCurrentSong(trendingSongs[index - 1])
                }

        
                
      }

      const onPlaying = () => {
        const duration = audioRef.current.duration;
        const ct = audioRef.current.currentTime;

        setCurrentSong({...currentSong, 'progress': ct / duration * 100, 'length': duration})
        
        
        setCTime(ct);
        setDuraTion(duration)
        
    }

    useEffect(() => {
        const minutes = Math.floor(cTime / 60);
        const seconds = Math.floor(cTime % 60);
        const ctformattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        setCTFormattedTime(ctformattedTime);
      }, [cTime]);
    useEffect(() => {
        const minutes = Math.floor(duraTion / 60);
        const seconds = Math.floor(duraTion % 60);
        const dtformattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        setDTFormattedTime(dtformattedTime);
      }, [duraTion]);
      const skipForward = () => {
        

        const index = trendingSongs.findIndex(x => x.title === currentSong.title)
        
        if (index === trendingSongs.length-1) {
            setCurrentSong(trendingSongs[0])

              } else {
                  setCurrentSong(trendingSongs[index + 1])
                }

        
                
      }

  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
  })

  const playBtn = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className='w-full h-[12vh] fixed bottom-0 left-0 z-50 flex items-center justify-center flex-col bg-black/20 backdrop-blur-lg'>
       <input type='range'  className='range absolute top-0 left-0 w-full' value={currentSong.progress}/>
        <div className='absolute top-2 right-4 md:flex hidden items-center justify-center gap-[5px]'>
            <p className='text-[14px]'>{ctFormattedTime}</p>
            <p className='text-[14px]'>/</p>
            <p className='text-[14px]'>{dtFormattedTime}</p>
        </div>
      <div className='w-full flex items-center justify-between sm:px-4 px-2' key={currentSong.id}>
          <div className='w-[250px] sm:flex hidden items-center
            gap-[15px] overflow-hidden cursor-pointer'>
            <span className='w-[50px] h-[50px] flex items-center justify-center overflow-hidden rounded-md'>
                  <img src={currentSong.image} alt={currentSong.artist}/>  
                </span>
                <span className='flex flex-col'>
                    <h3 className='w-full truncate'>{currentSong.title}</h3>
                    <p className='w-full truncate'>{currentSong.artist}</p>
                </span>
            <audio src={currentSong.song} onTimeUpdate={onPlaying} ref={audioRef} type='audio/mp3' controls className='absolute opacity-0'/>
          </div>
          <div className='w-full flex items-center justify-between sm:hidden'>
                <span className='w-[50px] h-[50px] flex items-center justify-center overflow-hidden rounded-md'>
                <img src={currentSong.image} alt={currentSong.artist}/>  
                </span>
                <span className='flex flex-col text-center'>
                    <h3 className='w-full truncate'>{currentSong.title}</h3>
                    <p className='w-full truncate'>{currentSong.artist}</p>
                </span>
                <span>
                  <button className='w-[40px] h-[40px] flex items-center justify-center rounded-xl bg-white/10' onClick={playBtn}>
                    <FaPlay className='w-[20px] h-[20px]'/>
                  </button>
                </span>
          </div>
          <div className='sm:flex hidden items-center justify-center gap-[20px]'>
            <button className='w-[35px] h-[35px] flex items-center justify-center bg-white/10 rounded-full' onClick={skipBackward}>
              <FaStepBackward/>
            </button>
            <button className='w-[40px] h-[40px] flex items-center justify-center bg-white/10 rounded-full' onClick={playBtn}>
              {isPlaying ? 
                <FaPlay className='w-[20px] h-[20px]'/>
                :
                <FaPause className='w-[20px] h-[20px]'/>
              }
            </button>
            <button className='w-[35px] h-[35px] flex items-center justify-center bg-white/10 rounded-full' onClick={skipForward}>
              <FaStepForward/>
            </button>
          </div>
     <div className='md:flex mt-[15px] hidden items-center justify-center gap-[15px]'>
            <div className='flex items-center justify-center gap-[5px]'>
                <FaVolumeDown/>
                <input type='range' className='range'/>
                <FaVolumeUp/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Bottomplayer