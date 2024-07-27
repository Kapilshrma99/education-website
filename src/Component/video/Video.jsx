import React, { useRef } from 'react'
import "./video.css"
import video from "../../assets/video.mp4"
const Video = ({play,setplay}) => {
    const player = useRef(null);
    const closeplayer=(e)=>{
        if(e.target===player.current){
            setplay(false);
        }
    }

  return (
    <div onClick={closeplayer} ref ={player} className={`video-player ${play?"":'hide'}`}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Video
