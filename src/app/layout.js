import { manrope } from './ui/fonts/fonts'
import './globals.css'
import Navbar from './ui/navbar/NavBar'


export const metadata = {
  title: 'Daquino Estudio',

}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
