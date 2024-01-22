import Image from "next/image";
import style from "./recordingStudio.module.scss"
import SectionTitle from "../SectionTitle";


export default function RecordingStudio() {
  return (
    <section id="recordingStudio" className={style.recordingStudio}>
      <SectionTitle title={"Estudio de grabación"} />
      <article>
        <div className={style.rscontainer}>
          <div>
            <p>Bienvenido al emocionante mundo de la grabación musical en nuestro estudio de vanguardia. Ofrecemos un servicio integral, desde la concepción de ideas hasta la ejecución meticulosa, en un entorno creativo donde músicos, productores y artistas colaboran para explorar nuevas dimensiones sonoras. </p>
            <p>Con equipos de última generación y un equipo apasionado, nos comprometemos a elevar la calidad de tu grabación, valorando cada fase del proceso creativo. Descubre cómo nuestro estudio no solo captura el sonido, sino que también potencia la expresión artística, convirtiendo cada proyecto en una experiencia musical enriquecedora y memorable. Confía en nosotros para llevar tu música al siguiente nivel, donde la excelencia y la creatividad se fusionan.</p>
          </div>
          <div className={style.phrase}>
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
              Encontrá tu <span>Sonido</span>
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
          </div>
        </div>
        <iframe width="100%" height="350" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1760763954&color=%23048e91&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" loading="lazy"></iframe>
      </article>
    </section>
  )
}