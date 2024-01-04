import Image from "next/image";
import style from "./recordingStudio.module.scss"
import SectionTitle from "../SectionTitle";


export default function RecordingStudio() {
  return (
    <section id="recordingStudio" className={style.recordingStudio}>
      <SectionTitle title={"Estudio de grabación"} />
      <article>
        <p>Bienvenido al emocionante mundo de la grabación musical en nuestro estudio de vanguardia. Ofrecemos un servicio integral, desde la concepción de ideas hasta la ejecución meticulosa, en un entorno creativo donde músicos, productores y artistas colaboran para explorar nuevas dimensiones sonoras. </p>
        <p>Con equipos de última generación y un equipo apasionado, nos comprometemos a elevar la calidad de tu grabación, valorando cada fase del proceso creativo. Descubre cómo nuestro estudio no solo captura el sonido, sino que también potencia la expresión artística, convirtiendo cada proyecto en una experiencia musical enriquecedora y memorable. Confía en nosotros para llevar tu música al siguiente nivel, donde la excelencia y la creatividad se fusionan.</p>
        <div className={style.phrase}>
          <Image
            className={style.quotesUp}
            src="/images/quotes-up.svg"
            alt="comillas hacia arriba"
            width={25}
            height={18}
          />
          <h4>
            Encontrá tu <span>SONIDO</span>
          </h4>
          <Image
            className={style.quotesDown}
            src="/images/quotes-down.svg"
            alt="comillas hacia abajo"
            width={25}
            height={18}
          />
        </div>
        <iframe src="https://open.spotify.com/embed/album/5ZelHaf1LMhBIPlN26mVFJ?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </article>
    </section>
  )
}