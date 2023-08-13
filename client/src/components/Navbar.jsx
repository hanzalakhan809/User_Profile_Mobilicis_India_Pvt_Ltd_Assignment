

export default function Navbar() {
  return (
    <nav className='w-full h-14 md:h-20 bg-[#FFF] flex justify-between p-4 border-b-2 mb-5 '>

      {/* FOR MEDIUM DEVICES */}
      <div>
        <div className="flex gap-3 md:hidden " >
          <img src='/assets/menu.svg' alt="" className='w-6 ' />
          <img src="/assets/logo.svg" alt="" className="w-[59px] " />
        </div>



        {/* FOR MEDIUM DEVICES ABOVE MEDIUM DEVICES*/}
        <div className=" hidden md:flex w-[183px] h-[47px] mx-auto rounded-[8.889px] shadow-sm border-2 ml-6 ">
          <div className="m-auto h-auto text-[24px] font-medium">Dashboard</div>
        </div>
      </div>






      {/* FOR MEDIUM DEVICES */}
      <div className="md:hidden flex gap-3">
        <img src='/assets/Notification.svg' alt="" className='w-6 ' />
        <img src="/assets/profilePhoto.svg" alt="" className=" w-6 h-full  bg-contain" />
      </div>



      {/* FOR MEDIUM DEVICES ABOVE MEDIUM DEVICES*/}
      <div className=" hidden md:flex  gap-3 ">
        <img src='/assets/Notification.svg' alt="" className='w-6 ' />
        <div className="md:border-2 md:border-[#E8EFF7] md:flex rounded-md ">
          <div className="w-7 rounded-md  bg-[#ffa78d] m-auto ml-2">
            <img src="/assets/profileSquare.svg" alt="" className=" w-full h-full  bg-contain" />
          </div>

          <div className="flex gap-3">
            <div className="md:flex md:flex-col md:m-auto md:ml-3   ">
              <p className="text-sm">Welocome back</p>
              <p className=" text-4   w-full font-medium">Hanzala</p>
            </div>
            <img src="/assets/arrowDown.svg" alt="" className="w-6 m-auto mr-2 ml-3" />
          </div>

        </div>
      </div>
    </nav>

  )
}
