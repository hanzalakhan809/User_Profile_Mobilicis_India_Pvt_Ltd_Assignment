import Navbar from '@/components/Navbar'
import SideMenu from '@/components/SideMenu'


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
