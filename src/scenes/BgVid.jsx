import React from 'react';
import video from '../img/vid.mp4'

const BgVid = () => {
    console.log("Video")
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
        filter: "brightness(0.7)"
      }}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default BgVid