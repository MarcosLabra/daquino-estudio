import style from "./copyright.module.scss"
import { MdLanguage } from "react-icons/md";

export default function Copyright() {
    return (
        <div className={style.copyright}>
            <a href="https://mlabra-dev.netlify.app/" rel="noopener noreferrer" target="_blank">

                <MdLanguage />
                <div>
                    <p className={style.dev}>Desarrollo </p>
                    <p className={style.name}>Marcos Labra</p>
                </div>
            </a>
            <p className={style.copy}>Derechos de autor © 2024 Estudio Daquino.
                Todos los derechos reservados.</p>
        </div>
    )
}