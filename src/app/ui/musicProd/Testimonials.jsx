"use client"

import style from "./testimonials.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "../cards/TestimoanialCard";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  }

  return (
    <section className={style.testimonials} >

      <Slider {...settings}>
        {
          team.map((member, index) => (
            <TestimonialCard
              key={index}
              photo={member.photo}
              artist={member.artist}
              testimonial={member.testimonial}
            />
          ))
        }
      </Slider >

    </section >
  )
}