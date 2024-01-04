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