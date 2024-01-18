'use client'
import style from "./StudioCarousel.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function StudioCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1
  };

  // Verificar el ancho de la pantalla y ajustar slidesToShow en consecuencia
  if (window.innerWidth > 1200) {
    settings.slidesToShow = 2;
  } else {
    settings.slidesToShow = 1;
  }

  return (
    <Slider {...settings} className={style.carouselContainer}>
      <img
        src="/estudio-desktop/estudio-5.jpg"
        alt="foto estudio"
      />
      <img
        src="/estudio-desktop/estudio-1.jpg"
        alt="foto estudio"
      />
      <img
        src="/estudio-desktop/estudio-3.jpg"
        alt="foto estudio"
      />
      <img
        src="/estudio-desktop/estudio-4.jpg"
        alt="foto estudio"
      />
      <img
        src="/estudio-desktop/estudio-2.jpg"
        alt="foto estudio"
      />
    </Slider>
  )
}
