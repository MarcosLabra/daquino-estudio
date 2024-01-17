"use client"

import { useState, useEffect } from "react";
import style from "./video.module.scss";

export default function Video() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.video}>
      {windowWidth > 854 ? (
        <video controls>
          <source src={"/videos/video1080lite.mp4"} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      ) : (
        <video controls>
          <source src={"/videos/video480lite.mp4"} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      )}
    </div>
  );
}
