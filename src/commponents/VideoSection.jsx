import React from 'react'
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoSection = (videoPopup) => {
  return (
    <div className="border-2 border-white rounded-full p-2 cursor-pointer circle  hover:rotate-border  ">

        <Play  size={32} color="#c33c3c" strokeWidth={2.5} absoluteStrokeWidth  />
    </div>
  )
}



export default VideoSection

