;
import style from "./cover.module.scss"

export default function Cover() {
  return (
    <section id="cover" className={style.cover}>
      <div>
        <h2>
          <span className={style.white}>DESCUBRÍ</span> todo tu <span className={style.red}>POTENCIAL</span>
        </h2>
        <p>
          Hay un camino recorrido que avala algo mas que equipamientos y modernismos. La creatividad no sabe de tiempos ni de espacios, <span className={style.white}> crear expectativas para que algo sea distinto</span> es nuestro lema. Estar al lado de tus sueños aportando ideas para ampliar lo que un dia fue un diseño.
          Aquí estamos... para que juntos demos la nota.<span className={style.red}> Entre el silencio y el sonido algo diferente ocurrirá</span>.
        </p>
      </div>
      <img className={style.heroImageMobile}
        src="/images/hero-image-mobile.png"
        alt="ilustracion de un microfono, una consola y dos parlantes" />
      <img className={style.heroImageTablet}
        src="/images/hero-image.png"
        alt="ilustracion de un microfono, una consola y dos parlantes"
      />
      <img className={style.heroImageDesktop}
        src="/images/hero-image.png"
        alt="ilustracion de un microfono, una consola y dos parlantes"
      />
    </section>
  )
}