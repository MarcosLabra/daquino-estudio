
import style from "./waIcon.module.scss"
import Link from "next/link"

export default function WaIcon() {

  return (
    <Link className={style.waIconContainer} href="https://wa.link/avhjog"  rel="noopener noreferrer"  target="_blank">
      <img
        src="/images/wa-logo.svg"
        alt="logo de whatsapp"
        width={70} height={70}
      />
    </Link>
  )
}