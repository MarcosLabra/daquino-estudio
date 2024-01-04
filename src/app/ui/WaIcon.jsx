import Image from "next/image"
import style from "./waIcon.module.scss"
import Link from "next/link"

export default function WaIcon() {

  return (
    <Link className={style.waIconContainer} href="https://walink.co/ae5d62"  rel="noopener noreferrer"  target="_blank">
      <Image
        src="/images/wa-logo.svg"
        alt="logo de whatsapp"
        width={70} height={70}
      />
    </Link>
  )
}