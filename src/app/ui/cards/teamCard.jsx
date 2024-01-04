import Image from "next/image"
import style from "./teamCard.module.scss"

export default function TeamCard({ teamPhoto, teamMember, teamRole, teamColor }) {
  const cardStyle = {
    borderBottom: `10px solid ${teamColor}`,
  };

  return (
    <div className={style.teamCard} style={cardStyle}>
      <Image
        src={teamPhoto}
        alt={"foto de perfil"}
        width={120} height={120}
      />
      <h3 style={{ color: teamColor }}>{teamMember}</h3>
      <p>{teamRole}</p>
    </div>
  )
}