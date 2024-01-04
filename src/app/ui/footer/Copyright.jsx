import style from "./copyright.module.scss"
import { FaWhatsapp } from "react-icons/fa";

export default function Copyright() {
    return (
        <div className={style.copyright}>
            <a href="https://walink.co/8a5dfa" rel="noopener noreferrer" target="_blank">

                <p className={style.dev}>Desarrollo </p>
                <div>
                    <FaWhatsapp />
                    <p className={style.name}>Marcos Labra</p>
                </div>
            </a>
            <p className={style.copy}>Derechos de autor © 2024 Estudio Daquino.
                Todos los derechos reservados.</p>
        </div>
    )
}