"use client"

import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Hamburger from 'hamburger-react'

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest(`.${styles.navbarContainer}`)) {
        setIsMenuOpen(false);
      }
    };

    const closeMenuOnScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Añadir event listeners
    window.addEventListener("click", closeMenuOnOutsideClick);
    window.addEventListener("scroll", closeMenuOnScroll);

    // Limpiar event listeners al desmontar el componente
    return () => {
      window.removeEventListener("click", closeMenuOnOutsideClick);
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.navbarContainer}>
      <div>
        <Link href="#cover">
          <Image
            src="/images/daquino-logo-desktop.svg"
            alt="Logo del estudio"
            width={123}
            height={43}
          />
        </Link>
        <div>
          <div className={styles.hamburger}>
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="#551414" />
          </div>
          <nav className={styles.navDesktop}>
            <ul>
              <li><Link href="#musicProd">Producción musical</Link></li>
              <li><Link href="#session">Músicos de sesión</Link></li>
              <li><Link href="#recordingStudio">Estudio de grabación</Link></li>
              <li><Link href="#mastering">Mastering Analogico</Link></li>
              <li>
                <Link  href="https://walink.co/ae5d62" rel="noopener noreferrer" target="_blank">
                  <button>
                    <FaWhatsapp className={styles.waIcon} />
                    Contacto
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <nav className={`${isMenuOpen ? styles.openMenu : styles.closedMenu} ${styles.navbarMobile}`}>
        <ul>
          <li><Link href="#musicProd" onClick={toggleMenu}>Producción musical</Link></li>
          <li><Link href="#session" onClick={toggleMenu}>Músicos de sesión</Link></li>
          <li><Link href="#recordingStudio" onClick={toggleMenu}>Estudio de grabación</Link></li>
          <li><Link href="#mastering">Mastering Analogico</Link></li>
          <li><Link href="#contact" onClick={toggleMenu}>Contacto</Link></li>
        </ul>

        <div className={styles.rrss}>
          <Link href="https://www.instagram.com/daquinoestudio/" rel="noopener noreferrer" target="_blank">
            <FaInstagram className={styles.rrssIcon} />
          </Link>
          <Link href="https://www.youtube.com/@daquinoestudio4227" rel="noopener noreferrer" target="_blank">
            <FaYoutube className={styles.rrssIcon} />
          </Link>
          <Link href="https://walink.co/ae5d62" rel="noopener noreferrer" target="_blank">
            <FaWhatsapp className={styles.rrssIcon} />
          </Link>
        </div>
      </nav>

    </header >
  );
}
