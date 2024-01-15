import Image from "next/image";
import style from "./session.module.scss"
import SectionTitle from "../SectionTitle";


export default function Session() {
  return (
    <section id="session" className={style.session}>
      <SectionTitle title={"Músicos de sesión"} />
      <article>
        <div>
          <p>Explora la fascinante producción musical con nuestro servicio exclusivo de músicos de sesión desde nuestro estudio para tus proyectos. Comprometidos en elevar la calidad de tu música, nuestros talentosos artistas participan activamente en cada fase, desde la concepción de ideas hasta la ejecución meticulosa, aportando experiencia y creatividad a cada nota. Nuestros músicos no solo destacan por sus habilidades técnicas excepcionales, sino también por su apasionado compromiso con la música. </p>
          <p>Nos sumergimos en el proceso creativo contigo, abrazando cada etapa para lograr un desarrollo auténtico y una conexión profunda con tu obra. Valoramos la travesía creativa, fomentando la experimentación y autenticidad en cada sesión, superando expectativas y haciendo del proceso musical una experiencia rica y satisfactoria en sí misma. Confía en nosotros para llevar tu música al siguiente nivel desde nuestro estudio, transformando tu proyecto en una obra única y memorable. </p>
        </div>

        {/* <div className={style.phrase}>
          <Image
            className={style.quotesUpMobile}
            src="/images/quotes-up.svg"
            alt="comillas hacia arriba"
            width={25}
            height={18}
          />
          <Image
            className={style.quotesUpDesktop}
            src="/images/quotes-up.svg"
            alt="comillas hacia arriba"
            width={50}
            height={35}
          />
          <h4>
            Encontrá tu <span>IDENTIDAD</span>
          </h4>
          <Image
            className={style.quotesDownMobile}
            src="/images/quotes-down.svg"
            alt="comillas hacia abajo"
            width={25}
            height={18}
          />
          <Image
            className={style.quotesDownDesktop}
            src="/images/quotes-down.svg"
            alt="comillas hacia abajo"
            width={50}
            height={35}
          />
        </div> */}

      </article>
    </section>
  )
}