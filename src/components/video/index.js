import React from 'react';
import source from '../../assets/video/sharks_2017.mp4';

const Video = () => {
  return(
    <video id="background-video" autoPlay loop muted>
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video;