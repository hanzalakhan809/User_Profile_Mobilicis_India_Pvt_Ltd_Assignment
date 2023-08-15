import './globals.css'
import { Outfit } from 'next/font/google'


const OutfitFont = Outfit({
  subsets: ['latin']
})

export const metadata = {
  title: 'Moilicis Assigment',
  description: 'Created by Mohammad Hanzala Khan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={OutfitFont.className}>
        {children}
      </body>
    </html>
  )
}
