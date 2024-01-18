"use client"

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoMdPlay } from 'react-icons/io';
import style from "./video.module.scss";

const Video = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [showVideo, setShowVideo] = useState(false);

  const getVideoSource = () => {
    return isMobile ? '/videos/video480lite.mp4' : '/videos/video1080lite.mp4';
  };

  const getImageSource = () => {
    return isMobile ? '/images/480thumb.png' : '/images/1080thumb.png';
  };

  const handleClick = () => {
    setShowVideo(true);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (showVideo) {
        const videoElement = document.querySelector(`.${style.video}`);
        const videoPosition = videoElement.getBoundingClientRect().top;

        if (videoPosition >= 0 && videoPosition <= window.innerHeight) {
          if (videoElement.paused) {
            videoElement.play();
          }
        } else {
          videoElement.pause();
          setShowVideo(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showVideo]);

  return (
    <div className={style.videoContainer}>
      {!showVideo && (
        <div className={style.videoOverlay} >
          <img
            src={getImageSource()}
            alt="video de sesion musical"
            className={style.video}
          />
          <IoMdPlay className={style.playIcon} onClick={handleClick} />
        </div>
      )}

      {showVideo && (
        <video autoPlay controls className={style.video}>
          <source src={getVideoSource()} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      )}
    </div>
  );
};

export default Video;
