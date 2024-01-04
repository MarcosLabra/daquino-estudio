import style from "./video.module.scss"

export default function Video() {
    return (
        <div className={style.video}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QrR_gm6RqCo?si=4UYfakdftaHIwpPO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}