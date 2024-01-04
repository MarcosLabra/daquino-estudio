"use client"

import TeamCard from "../cards/teamCard"
import style from "./teamCarrousel.module.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [{
  teamPhoto: "/teamCards/marcos.png",
  teamMember: "Marcos Daquino",
  teamRole: "Baterista de sesión, Producción Musical, Grabación - Mezcla - Mastering.",
  teamColor: "#f1b67c"
}, {
  teamPhoto: "/teamCards/jose.png",
  teamMember: "Jose Daquino",
  teamRole: "Coaching vocal, Letras.",
  teamColor: "#048E91"
}, {
  teamPhoto: "/teamCards/brian.png",
  teamMember: "Brian Rosas",
  teamRole: "Tecladista de sesión, Producción Musical, Arreglador.",
  teamColor: "#F6343C"
}]



export default function TeamCarrousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
  }

  const mediaQuery768 = window.matchMedia('(min-width: 768px)');
  const mediaQuery1200 = window.matchMedia('(min-width: 1200px)');

  const updateSettings = () => {
    if (mediaQuery768.matches) {
      settings.slidesToShow = 2;
    } else if (mediaQuery1200.matches) {
      settings.slidesToShow = 3;
    } else {
      settings.slidesToShow = 1;
    }
  };

  updateSettings();

   window.addEventListener('resize', updateSettings);

  return (
    <section className={style.teamCarrousel} >

      <Slider {...settings}>
        {
          team.map((member, index) => (
            <TeamCard
              key={index}
              teamPhoto={member.teamPhoto}
              teamMember={member.teamMember}
              teamRole={member.teamRole}
              teamColor={member.teamColor}
            />
          ))
        }
      </Slider >

    </section >
  )
}