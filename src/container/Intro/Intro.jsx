import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from '../../assets/meal.mp4';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const vidRef = useRef();

  const handlePlayPause = () => {
    setPlayVideo(!playVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <div
      className="app__video"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop={true}
        muted={true}
        controls={false}
      />
      {(!playVideo || isHovered) && (
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handlePlayPause}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
