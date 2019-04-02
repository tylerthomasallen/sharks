import React from 'react';
import source from '../../assets/video/sharks_2017.mp4';

const Video = () => {
  return(
    <div className="video-container">
      <video id="video"autoPlay loop muted muted controls>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video;