"use client"
import { useEffect, useState } from 'react';
import { IoMdPlay } from 'react-icons/io';
import style from "./video.module.scss";

const Video = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const isMobile = screenWidth <= 767;

  const getVideoSource = () => {
    return isMobile ? '/videos/video480lite.mp4' : '/videos/video1080lite.mp4';
  };

  const getImageSource = () => {
    const source = isMobile ? '/images/videoImgMobile.jpg' : '/images/videoImgDesktop.jpg';
    return source;
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

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [showVideo]);

  return (
    <div className={style.videoContainer}>
      {!showVideo && (
        <div className={style.videoOverlay}>
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
