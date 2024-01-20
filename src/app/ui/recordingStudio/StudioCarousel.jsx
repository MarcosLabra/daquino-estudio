'use client'
import style from "./StudioCarousel.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

export default function StudioCarousel() {

  const [slidesToShow, setSlidesToShow] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
    autoplay: true,
  };

  const updateSettings = () => {

    if (window.innerWidth >= 854) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  return (
    <Slider {...settings} className={style.carouselContainer}>
      <img
        src="/estudio/estudio-5.jpg"
        alt="foto del estudio"
      />
      <img
        src="/estudio/estudio-1.jpg"
        alt="foto del estudio"
      />
      <img
        src="/estudio/estudio-3.jpg"
        alt="foto del estudio"
      />
      <img
        src="/estudio/estudio-4.jpg"
        alt="foto del estudio"
      />
      <img
        src="/estudio/estudio-2.jpg"
        alt="foto del estudio"
      />
    </Slider>
  )
}
