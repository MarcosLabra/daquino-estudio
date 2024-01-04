"use client"
import React, { useEffect, useState } from "react";
import TeamCard from "../cards/teamCard";
import style from "./teamCarrousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    teamPhoto: "/teamCards/marcos.png",
    teamMember: "Marcos Daquino",
    teamRole: "Baterista de sesión, Producción Musical, Grabación - Mezcla - Mastering.",
    teamColor: "#f1b67c",
  },
  {
    teamPhoto: "/teamCards/jose.png",
    teamMember: "Jose Daquino",
    teamRole: "Coaching vocal, Letras.",
    teamColor: "#048E91",
  },
  {
    teamPhoto: "/teamCards/brian.png",
    teamMember: "Brian Rosas",
    teamRole: "Tecladista de sesión, Producción Musical, Arreglador.",
    teamColor: "#F6343C",
  },
];

export default function TeamCarrousel() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
  };

  const updateSettings = () => {
    if (window.innerWidth >= 1200) {
      setSlidesToShow(3);
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
    <section className={style.teamCarrousel}>
      <Slider {...settings}>
        {team.map((member, index) => (
          <TeamCard
            key={index}
            teamPhoto={member.teamPhoto}
            teamMember={member.teamMember}
            teamRole={member.teamRole}
            teamColor={member.teamColor}
          />
        ))}
      </Slider>
    </section>
  );
}
