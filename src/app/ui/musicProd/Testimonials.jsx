"use client"

import style from "./testimonials.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "../cards/TestimoanialCard";
import { useEffect, useState } from "react";

const team = [
  {
    photo: "/testimonialCards/artist-1.png",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Massa tristique quam felis sit. Turpis venenatis velit massa lectus donec et diam eu. ",
    artist: "Artista 1",
  },
  {
    photo: "/testimonialCards/artist-1.png",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Massa tristique quam felis sit. Turpis venenatis velit massa lectus donec et diam eu. ",
    artist: "Artista 2",
  },
  {
    photo: "/testimonialCards/artist-1.png",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Massa tristique quam felis sit. Turpis venenatis velit massa lectus donec et diam eu. ",
    artist: "Artista 3",
  },

]


export default function Testimonials() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
  };

  const updateSettings = () => {
    if (window.innerWidth >= 1200) {
      setSlidesToShow(4);
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
  }, []); // Empty dependency array ensures useEffect runs only on mount, i.e., on the client side

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