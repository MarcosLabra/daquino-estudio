import style from "./copyright.module.scss"
import { FaWhatsapp } from "react-icons/fa";

export default function Copyright() {
    return (
        <div className={style.copyright}>

            <p className={style.copy}>Derechos de autor © 2024 Estudio Daquino.
                Todos los derechos reservados.</p>
        </div>
    )
}