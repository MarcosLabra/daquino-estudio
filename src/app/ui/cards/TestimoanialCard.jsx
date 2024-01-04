import Image from "next/image"
import style from "./testimonialCard.module.scss"

export default function TestimonialCard({ photo, artist, testimonial }) {

  return (
    <div className={style.testimonialCard}>
      <Image
        src="/images/quotes-testimonials.svg"
        alt="comillas"
        width={20} height={14}
      />
      <p>{testimonial}</p>
      <Image
        src={photo}
        alt={"foto de perfil"}
        width={47} height={47}
      />
      <h3>{artist}</h3>
    </div>
  )
}