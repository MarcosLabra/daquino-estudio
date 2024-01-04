import style from "./sectionTitle.module.scss"

export default function SectionTitle({ title }) {
    return (
        <div className={style.title}>
            <h3>{title}</h3>
        </div>
    )
}