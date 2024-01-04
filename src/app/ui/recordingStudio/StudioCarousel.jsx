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
        src="/studio-mockup.png"
        alt="foto estudio"
        width={360}
        height={320}
      />
      <Image
        src="/studio-mockup.png"
        alt="foto estudio"
        width={360}
        height={320}
      />
      <Image
        src="/studio-mockup.png"
        alt="foto estudio"
        width={360}
        height={320}
      />
    </Slider>
  )
}