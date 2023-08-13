"use client"
import React from 'react'

export default function myprofile() {
  return (
    <main className='w-full h-auto bg-[#f8fafe]'>

      {/* CARD HEAD COVER */}
      <div className='h-[71px] md:h-[169px] mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3'>
      <p className='text-white text-xs md:text-sm font-medium  '>My Profile</p>
      </div>


      <div className='grid md:grid-cols-2 gap-5  m-[40px]  rounded-[7.125px] bg-[#FFF] border border-[#EBEBEE]   -mt-[30px] md:-mt-20 p-5 md:m-16 shadow-lg mb-10'>

        {/* COL 1ST */}
        <div className=''>
          <div className='flex '>
            <img src="/assets/profilePhoto.svg" alt="" className='w-[71px]' />
            <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 h-min text-xs font-normal m-auto mr-3'>
              Upload Photo
            </button>
          </div>


          {/* All Inner Card Container Col 1ST/ */}
          <div className='flex flex-col gap-4 '>

            {/* Card 1 Most Inner */}
            <div className='rounded-[4.444px] border-2 p-[14px] text-sm shadow-sm flex flex-col gap-5 '>
              <div className='flex flex-col gap-2'>
                <p className='text-[#1f1f1f]'>Your Name</p>
                <p className='font-medium '>Vishnu Swaroop</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[#1f1f1f]'>Email</p>
                <p className='font-medium '>vishnu@oruphones.com</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[#1f1f1f]'>Phone Number</p>
                <p className='font-medium '>+91 49652845732</p>
              </div>
            </div>

            {/* Card 2 Most Inner */}
            <div className='rounded-[4.444px] border-2 p-[14px] text-sm shadow-sm flex flex-col gap-2 '>
              <div className='flex justify-between'>
                <h1 className='text-[#1f1f1f] text-sm font-medium'>About Sid</h1>
                <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal'>Edit</button>
              </div>
              <p className='font-normal'>Lorem ipsum dolor sit amet consectetur Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur</p>
            </div>


            {/* Card 3 Most Inner */}
            <div className='rounded-[4.444px] border-2 p-[14px] text-sm shadow-sm flex flex-col gap-2 '>
              <h1 className='text-[#1f1f1f] text-sm font-medium'>Skills</h1>
              <div className='flex flex-col gap-4 font-medium '>
                <p className=' font-normal'>Next Js</p>
                <p className=' font-normal'>Typescript</p>
              </div>
            </div>

          </div>

        </div>

        {/* COL 2ND */}

        <div className='flex flex-col gap-4 font-medium justify-start'>

          {/* COL2 CARD1 */}
          <div className=' rounded-[8.946px] border-2 p-[14px] text-sm shadow-sm flex flex-col gap-2 '>
            <div className='flex'>
              <div className='flex flex-col gap-4 font-medium '>
                <h1 className='text-[#1f1f1f] text-sm font-medium'>Professional Details</h1>
                <p className='text-xs font-normal'>This are the professional details shown to users in the app.</p>
              </div>
              <img src="/assets/Stars.svg" alt="" />
            </div>
          </div>


          {/* COL 2 CARD 2 */}
          <div className=' text-[10.667px]  flex flex-col gap-2 '>
            <div className='flex justify-between'>
              <h1 className='text-[#1f1f1f] text-sm font-medium'>Certifications</h1>
              <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal'>Edit</button>
            </div>

            <div className=' rounded-[26.667px] h-12 border-2  text-[10.667px] shadow-sm flex justify-around '>
              <div className=' w-[30%] m-auto'>
                <img src="/assets/Vector.svg" alt="" className='w-6 m-auto' />
              </div>
              <div className='flex flex-col  font-medium w-[70%] pr-[20%  ] '>
                <h1 className='text-[#1f1f1f] text-sm font-medium m-auto'>Python</h1>
                <p className='text-[10.667px] m-auto'>Coding Ninjas</p>
              </div>
            </div>
          </div>

          {/* COL2 CARD3 */}
          <div className='  flex flex-col gap-2 '>
            <div className='flex justify-between '>
              <h1 className='text-[#1f1f1f] text-[11.399px] font-medium'>Experience</h1>
              <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal'>Edit</button>
            </div>
            <div className='flex justify-between gap-1 rounded-[8.946px]  border-2 p-[14px] text-sm shadow-sm '>
              <div className='flex flex-col gap-1 font-medium '>
                <h1 className='text-[#1f1f1f] text-3 font-medium'>7 Years  (2014-2021)                Full-time</h1>
                <p className='text-xs  text-slate-500'>Oruphones        -- Full Stack Developer</p>
              </div>
              <img src="/assets/logo.svg" alt="" />
            </div>
            <div className='flex justify-between gap-1 rounded-[8.946px]  border-2 p-[14px] text-sm shadow-sm '>
              <div className='flex flex-col gap-1 font-medium '>
                <h1 className='text-[#1f1f1f] text-sm font-medium'>7 Years  (2014-2021)                Full-time</h1>
                <p className='text-xs  text-slate-500'>Oruphones        -- Full Stack Developer</p>
              </div>
              <img src="/assets/logo.svg" alt="" />
            </div>



            {/* COL2 CARD4 */}
            <div className='  flex flex-col gap-2 '>
              <div className='flex justify-between'>
                <h1 className='text-[#1f1f1f] text-sm font-medium'>Education</h1>
                <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal'>Edit</button>
              </div>

              <div className='flex justify-between gap-1 rounded-[8.946px]  border-2 p-[14px] text-[10.667px] shadow-sm '>
                <div className='flex flex-col gap-1 font-medium '>
                  <h1 className='text-[#413B89] text-sm font-medium'>IIT HYDERABAD</h1>

                  <div className='flex justify-between '>
                    <h1 className='text-[#1f1f1f] text-xs font-medium'>(2010-2914)</h1>
                    <h1 className='text-[#1f1f1f] text-xs font-medium'>Btech</h1>
                  </div>
                  <p className='text-xs  text-slate-500'>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>




    </main>
  )
}
