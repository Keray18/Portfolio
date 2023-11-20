import React from 'react';
import video from '../img/vid.mp4'
import { useBreakpointValue } from '@chakra-ui/react';

const BgVid = () => {
    // console.log("Video")
    const isLargeScreen = useBreakpointValue({ base: false, md: true })
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
        height: isLargeScreen ? '100%' : '150vh',
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