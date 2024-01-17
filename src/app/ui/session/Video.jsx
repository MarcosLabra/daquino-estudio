"use client"

import style from "./video.module.scss";

export default function Video() {

  return (
    <div className={style.video}>

      <video controls className={style.videoMobile}>
        <source src={"/videos/video480lite.mp4"} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      <video className={style.videoDesktop} controls>
        <source src={"/videos/video1080lite.mp4"} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

    </div>
  );
}
