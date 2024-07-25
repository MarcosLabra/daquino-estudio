import Image from "next/image"
import style from "./testimonialCard.module.scss"

export default function TestimonialCard({photo, artist, testimonial }) {

  return (
    <div className={style.testimonialCard}>
      <Image
        className={style.mobilePic}
        src="/images/quotes-testimonials.svg"
        alt="comillas"
        width={20} height={14}
      />
      <Image
        className={style.desktopPic}
        src="/images/quotes-testimonials.svg"
        alt="comillas"
        width={50} height={34}
      />
      <p>{testimonial}</p>
      <Image
        className={style.mobileProfilePic}
        src={photo}
        alt={"foto de perfil"}
        width={47} height={47}
      />
      <Image
        className={style.desktopProfilePic}
        src={photo}
        alt={"foto de perfil"}
        width={70} height={70}
      />
      <h3>{artist}</h3>
    </div>
  )
}