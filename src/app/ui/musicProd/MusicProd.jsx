import Image from "next/image";
import style from "./musicProd.module.scss"
import SectionTitle from "../SectionTitle";


export default function MusicProd() {
  return (
    <section id="musicProd" className={style.musicProd}>
      <SectionTitle title={"Produccion Musical"} />
      <article>
        <p>En la producción musical, el viaje creativo es tan crucial como el resultado final. Aunque alcanzar un resultado excepcional es el objetivo, el proceso es donde se despliega la pasión y la expresión artística. Cada fase, desde la concepción hasta la ejecución, aporta valor. </p>
        <p>Los artistas exploran, enfrentan desafíos y encuentran nuevas formas de comunicar emociones. Abrazar cada etapa permite un desarrollo auténtico y conexión profunda con la obra. Valorar la travesía creativa fomenta la experimentación, autenticidad y resultados inesperados, haciendo del proceso musical una experiencia rica y satisfactoria. </p>
        <div className={style.phrase}>
          <Image
            className={style.quotesUp}
            src="/images/quotes-up.svg"
            alt="comillas hacia arriba"
            width={25}
            height={18}
          />
          <h4>
            Encontrá tu <span>IDENTIDAD</span>
          </h4>
          <Image
            className={style.quotesDown}
            src="/images/quotes-down.svg"
            alt="comillas hacia abajo"
            width={25}
            height={18}
          />
        </div>
        <iframe src="https://open.spotify.com/embed/album/4rB6AFiDR9fLs3kokOzv8q?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      </article>
    </section>
  )
}