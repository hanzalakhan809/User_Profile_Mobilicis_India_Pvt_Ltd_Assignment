"use client"
import React, { useState } from 'react'
import AuthService from '../services/authServices'
import { useRouter } from 'next/navigation'
import Modal from './Modal';


export default function MyProfile() {

  const router = useRouter();
  const [show, setShow] = useState(AuthService.isAuthenticated())
  if (show === false) {
    router.push('/')
  }

  const dummyData = {
    name: "Vishnu Swaroop",
    email: "vishnu@oruphones.com",
    phone: "+91 49652845732",
    about: "Lorem ipsum dolor sit amet consectetur Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur",
    skills: ["Next Js", "Typescript"],
    professionalDetails: "This are the professional details shown to users in the app.",
    certification: { certificationName: "Python", certificationInstitute: "Coding Ninjas" },
    experiences: [{
      fromYearToYear: "7 Years (2014-2021) Full-time",
      organizationWithRole: "Oruphones -- Full Stack Developer"
    },
    {
      fromYearToYear: "7 Years (2014-2021) Full-time",
      organizationWithRole: "Oruphones -- Full Stack Developer"
    }],
    higherEducation: {
      higherEducationInstitute: "IIT HYDERABAD",
      fromYearToYear: "(2010-2914)",
      course: "Btech",
      aboutEducation: "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur."
    },
    myConnections: [{
      connectionName: "Rahul",
      connectionPosition: "App Developer @ Mobilicis"
    },
    {
      connectionName: "Cristian",
      connectionPosition: "Software Engineer @ Mindtrot"
    },
    {
      connectionName: "Andrew",
      connectionPosition: "App Developer @ BlackCoffer"
    },
    {
      connectionName: "Sophia",
      connectionPosition: "UI/UX Designer @ Creatify"
    },
    {
      connectionName: "Alex",
      connectionPosition: "Backend Developer @ Datawise"
    },
    {
      connectionName: "Emma",
      connectionPosition: "Data Scientist @ Analytica"
    },
    {
      connectionName: "Michael",
      connectionPosition: "Cloud Engineer @ CloudSafe"
    },
    {
      connectionName: "Isabella",
      connectionPosition: "DevOps Engineer @ Pipeline"
    },
    {
      connectionName: "Daniel",
      connectionPosition: "QA Tester @ BugHunter"
    },
    {
      connectionName: "Olivia",
      connectionPosition: "Product Manager @ Productify"
    }],
    suggestionConnectins: [
      {
        connectionName: "David",
        connectionPosition: "Cybersecurity Expert @ SecureNet"
      },
      {
        connectionName: "Mia",
        connectionPosition: "Frontend Developer @ Webify"
      },
      {
        connectionName: "Samuel",
        connectionPosition: "Database Administrator @ DBMasters"
      }]
  }

  const [myProfileData, setMyProfileData] = useState(dummyData)


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPassingInputName, setModalPassingInputName] = useState(null);


  const handleModal = (event) => {
    setModalPassingInputName(event.target.name);
    setIsModalVisible(true)
  }

  return (
    show &&
    <main className='w-full h-auto bg-[#f8fafe]'>
      {/* CARD HEAD COVER */}
      <div className='h-[71px] md:h-[169px] mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3'>
        <p className='text-white text-xs md:text-sm font-medium  '>My Profile</p>
      </div>

      <Modal
        openModal={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onClose={() => setIsModalVisible(false)}
        name={modalPassingInputName}
        myProfileData={myProfileData}
        setMyProfileData={setMyProfileData}
      />

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
                <div className='flex justify-between' >
                  <p className='text-[#1f1f1f]'>Your Name</p>
                  <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="name" onClick={handleModal}>Edit</button>
                </div>
                <p className='font-medium '>{myProfileData.name}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <p className='text-[#1f1f1f]'>Email</p>
                  <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="email" onClick={handleModal}>Edit</button></div>
                <p className='font-medium '>{myProfileData.email}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <p className='text-[#1f1f1f]'>Phone Number</p>
                  <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="phone" onClick={handleModal}>Edit</button></div>
                <p className='font-medium '>{myProfileData.phone}</p>
              </div>
            </div>

            {/* Card 2 Most Inner */}
            <div className='rounded-[4.444px] border-2 p-[14px] text-sm shadow-sm flex flex-col gap-2 '>
              <div className='flex justify-between'>
                <h1 className='text-[#1f1f1f] text-sm font-medium'>About {myProfileData.name}</h1>
                <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="about" onClick={handleModal}>Edit</button>
              </div>
              <p className='font-normal'>{myProfileData.about}</p>
            </div>


            {/* Card 3 Most Inner */}
            <div className='rounded-[4.444px] border-2 p-[14px] text-sm shadow-sm flex flex-col gap-2 '>
              <div className='flex justify-between'>
                <h1 className='text-[#1f1f1f] text-sm font-medium'>Skills</h1>
                <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="skills" onClick={handleModal}>Edit</button></div>
              <div className='flex flex-col gap-4 font-medium '>
                {
                  myProfileData.skills.map((item) => {
                    return <p className=' font-normal' key={item}>{item}</p>
                  })
                }
              </div>
            </div>

          </div>

        </div>

        {/* COL 2ND */}

        <div className='flex flex-col gap-4 font-medium justify-start'>

          {/* COL2 CARD1 */}
          <div className=' rounded-[8.946px] border-2 p-[14px] text-sm shadow-sm flex flex-col gap-2 '>
            <div className='flex w-full'>
              <div className='flex flex-col gap-4 font-medium w-full '>
                <div className='flex justify-between'>
                  <h1 className='text-[#1f1f1f] text-sm font-medium'>Professional Details</h1>
                  <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="professionalDetails" onClick={handleModal}>Edit</button></div>
                <div className='flex justify-between' >
                  <p className='text-xs font-normal'>{myProfileData.professionalDetails}</p>
                  <img src="/assets/Stars.svg" alt="" />
                </div>
              </div>
            </div>
          </div>


          {/* COL 2 CARD 2 */}
          <div className=' text-[10.667px]  flex flex-col gap-2 '>
            <div className='flex justify-between'>
              <h1 className='text-[#1f1f1f] text-sm font-medium'>Certifications</h1>
              <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="certification" onClick={handleModal}>Edit</button>
            </div>
            <div className=' rounded-[26.667px] h-12 border-2  text-[10.667px] shadow-sm flex justify-around '>
              <div className=' w-[30%] m-auto'>
                <img src="/assets/Vector.svg" alt="" className='w-6 m-auto' />
              </div>
              <div className='flex flex-col  font-medium w-[70%] pr-[20%  ] '>
                <h1 className='text-[#1f1f1f] text-sm font-medium m-auto'>{myProfileData.certification.certificationName}</h1>
                <p className='text-[10.667px] m-auto'>{myProfileData.certification.certificationInstitute}</p>
              </div>
            </div>

          </div>

          {/* COL2 CARD3 */}
          <div className='  flex flex-col gap-2 '>
            <div className='flex justify-between '>
              <h1 className='text-[#1f1f1f] text-[11.399px] font-medium'>Experience</h1>
              <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="experiences" onClick={handleModal}>Edit</button>
            </div>


            {
              myProfileData.experiences.map((experience, index) => {
                return (
                  <div className='flex justify-between gap-1 rounded-[8.946px]  border-2 p-[14px] text-sm shadow-sm ' key={index}>
                    <div className='flex flex-col gap-1 font-medium '>
                      <h1 className='text-[#1f1f1f] text-3 font-medium'>{experience.fromYearToYear}</h1>
                      <p className='text-xs  text-slate-500'>{experience.organizationWithRole}</p>
                    </div>
                    <img src="/assets/logo.svg" alt="" />
                  </div>
                )
              })
            }



            {/* COL2 CARD4 */}
            <div className='  flex flex-col gap-2 '>
              <div className='flex justify-between'>
                <h1 className='text-[#1f1f1f] text-sm font-medium'>Education</h1>
                <button className=' bg-[#F0EFFA]  rounded-[64.587px] px-4 py-1 text-xs font-normal' name="higherEducation" onClick={handleModal}>Edit</button>
              </div>

              <div className='flex justify-between gap-1 rounded-[8.946px]  border-2 p-[14px] text-[10.667px] shadow-sm '>
                <div className='flex flex-col gap-1 font-medium '>
                  <h1 className='text-[#413B89] text-sm font-medium'>{myProfileData.higherEducation.higherEducationInstitute}</h1>

                  <div className='flex justify-between '>
                    <h1 className='text-[#1f1f1f] text-xs font-medium'>{myProfileData.higherEducation.fromYearToYear}</h1>
                    <h1 className='text-[#1f1f1f] text-xs font-medium'>{myProfileData.higherEducation.course}</h1>
                  </div>
                  <p className='text-xs  text-slate-500'>{myProfileData.higherEducation.aboutEducation}</p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>




    </main>
  )
}
