'use client'
import Image from "next/image";
import style from "./StudioCarousel.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function StudioCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <Image
        src="/estudio-mobile/estudio-5.jpg"
        alt="foto estudio"
        width={360}
        height={270}
      />
      <Image
        src="/estudio-mobile/estudio-1.jpg"
        alt="foto estudio"
        width={360}
        height={270}
      />
      <Image
        src="/estudio-mobile/estudio-3.jpg"
        alt="foto estudio"
        width={360}
        height={270}
      />
      <Image
        src="/estudio-mobile/estudio-4.jpg"
        alt="foto estudio"
        width={360}
        height={270}
      />
      <Image
        src="/estudio-mobile/estudio-2.jpg"
        alt="foto estudio"
        width={360}
        height={270}
      />
    </Slider>
  )
}