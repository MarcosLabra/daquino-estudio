"use client"

import style from "./testimonials.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "../cards/TestimonialCard";
import { useEffect, useState } from "react";

const team = [
  {
    photo: "/testimonialCards/julio.jpg",
    testimonial: "La mejor experiencia grabando en un lugar donde me senti muy comodo. El buen gusto de un productor como Marcos es esencial para llevar a cabo un trabajo tan personal como nuestra música",
    artist: "Julio César Lucero",
  },
  {
    photo: "/testimonialCards/walter.jpg",
    testimonial: 'quedamos super conformes de lo que fue nuestro primer disco llamado "Semilla" grabado en Estudio Daquino un laburo impecable todo lo que fue la producción.',
    artist: "Walter Gigena",
  },
  {
    photo: "/testimonialCards/nelson.jpg",
    testimonial: "Muy contento del trabajo realizado, muy profesional, buen criterio para resolver y un feedback excelente para lograr el resultado esperado. Recomiendo y vuelvo a elegir seguir trabajando así. ",
    artist: "Nelson Cinalto",
  },
  {
    photo: "/testimonialCards/marcelo.jpg",
    testimonial: "Grabar con Marcos es un lujo. No solo tiene un equipamiento de primera sino también un trato impecable, siempre con la mejor onda para involucrarse de lleno en el proyecto",
    artist: "Marcelo Santini",
  },
  {
    photo: "/testimonialCards/leo.jpg",
    testimonial: "Como banda encontramos una producción con compromiso y calidad que superó nuestras expectativas, no solo en lo artístico sino en lo humano. ",
    artist: "Leonel Rojas",
  },

]


export default function Testimonials() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [centerMode, setCenterMode] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    centerMode: centerMode,
    autoplay: true,
  };

  const updateSettings = () => {

    if (window.innerWidth >= 1600) {
      setSlidesToShow(4);
      setCenterMode(false);
    } else if (window.innerWidth >= 1200) {
      setSlidesToShow(3);
      setCenterMode(false);
    } else if (window.innerWidth >= 768) {
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
    <section className={style.testimonials}>
      <Slider {...settings}>
        {team.map((member, index) => (
          <TestimonialCard
            key={index}
            photo={member.photo}
            artist={member.artist}
            testimonial={member.testimonial}
          />
        ))}
      </Slider>
    </section>
  );
}