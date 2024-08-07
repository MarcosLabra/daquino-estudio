import style from "./mastering.module.scss"
import SectionTitle from "../SectionTitle";


export default function Mastering() {
  return (
    <section id="mastering" className={style.session}>
      <SectionTitle title={"Mastering Analogico"} />
      <article>
        <div>
          <p>Colaborando con  <a href="https://www.chromamastering.com/" target="_blank" rel="noopener noreferrer">Chroma Mastering</a>  ofrecemos el servicio de mastering analógica. Esta alianza nos permitirá ofrecer a nuestros clientes un nivel de calidad sonora superior, aprovechando la tecnología de vanguardia y la experiencia de Chroma Studio en el campo del audio. Con esta nueva oferta, nuestros proyectos no solo tendrán un sonido impecable, sino que también estarán a la altura de los estándares más altos de la industria musical.  </p>
          <a href="https://www.chromamastering.com/" target="_blank" rel="noopener noreferrer">www.chromamastering.com</a>
        </div>
        <img src="/images/instruments2.png" alt="ilustracion" className={style.illustration} />
      </article>
    </section>
  )
}