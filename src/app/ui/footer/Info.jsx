
import { MdPhone, MdLocationOn, MdMap } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import style from "./info.module.scss"
import Link from "next/link";


export default function Info() {
  return (
    <div className={style.infoContainer}>
      <img
        src="/images/info-logo.svg"
        alt="Logo del estudio"
        width={145} height={26}
      />
      <div className={style.infoDiv}>

        <div className={style.info}>
          <div>
            <MdPhone className={style.icon} />
            <p>+54 9 223 690-3583</p>
          </div>

          <div>
            <MdMap className={style.icon} />
            <p>Mar del Plata, Argentina</p>
          </div>
        </div>
        <div className={style.rrss}>
          <Link className={style.rrssInstagram} href="https://www.instagram.com/daquinoestudio/" rel="noopener noreferrer" target="_blank">
            <FaInstagram className={style.rrssIcon} />
            <p>Instagram</p>
          </Link>
          <Link className={style.rrssYoutube} href="https://www.youtube.com/@daquinoestudio4227" rel="noopener noreferrer" target="_blank">
            <FaYoutube className={style.rrssIcon} />
            <p>Youtube</p>
          </Link>
        </div>
      </div>
    </div>
  )
}