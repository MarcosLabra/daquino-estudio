import { manrope } from './ui/fonts/fonts'
import './globals.css'
import Navbar from './ui/navbar/NavBar'
import Head from 'next/head'


export const metadata = {
  title: 'Daquino Estudio - Estudio de Grabación y Producción Musical en Mar del Plata',
  description: 'Descubri todo tu potencial en nuestro estudio, en donde el proceso creativo es tan importante como el producto final',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Estudio, Producción, Musical, Grabación, Músicos, Sesión, Mar del Plata, Mezcla, Masterización" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Daquino Estudio" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Mar del Plata" />
        <meta name="geo.position" content="-38.0000;-57.5500" />
        <meta name="ICBM" content="-38.0000, -57.5500" />
      </Head>
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
