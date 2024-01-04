import style from './footer.module.scss'

import ContactForm from "./ContactForm";
import Info from './Info';
import Copyright from './Copyright';

export default function Footer() {
    return (
        <footer id='contact' className={style.footer}>
            <ContactForm />
            <Info />
            <Copyright />
        </footer>
    )
}