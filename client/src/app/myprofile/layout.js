"use client"
import Navbar from '@/components/Navbar'
import SideMenu from '@/components/SideMenu'
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
    <>
      <Navbar />
      <div className='flex'>
        <SideMenu />
        {children}
      </div>
    </>

  )
}
