import Image from "next/image";
import style from "./musicProd.module.scss"
import SectionTitle from "../SectionTitle";


export default function MusicProd() {
  return (
    <section id="musicProd" className={style.musicProd}>
      <SectionTitle title={"Produccion Musical"} />
      <article>
        <div>
          <p>En la producción musical, el viaje creativo es tan crucial como el resultado final. Aunque alcanzar un resultado excepcional es el objetivo, el proceso es donde se despliega la pasión y la expresión artística. Cada fase, desde la concepción hasta la ejecución, aporta valor. </p>
          <p>Los artistas exploran, enfrentan desafíos y encuentran nuevas formas de comunicar emociones. Abrazar cada etapa permite un desarrollo auténtico y conexión profunda con la obra. Valorar la travesía creativa fomenta la experimentación, autenticidad y resultados inesperados, haciendo del proceso musical una experiencia rica y satisfactoria. </p>
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
          </div>
        </div>
        <Image
              className={style.quotesUpMobile}
              src="/images/instruments.svg"
              alt="comillas hacia arriba"
              width={400}
              height={400}
            />
      </article>
    </section>
  )
}