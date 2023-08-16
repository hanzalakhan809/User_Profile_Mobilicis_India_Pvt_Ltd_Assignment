"use client"
import React, { useState, useEffect } from 'react'
import AuthService from '../services/authServices'
import { useRouter } from 'next/navigation'





export default function MyConnections() {
  const router = useRouter();
  const [show, setShow] = useState(AuthService.isAuthenticated())
  if (show === false) {
    router.push('/')
  }


  const dummyData = {
    name: "Hanzala Khan",
    email: "han@gmail.com",
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
  const [updateMyprofileData, setUpdateMyProfileData] = useState();

  useEffect(() => {
    AuthService.getMyProfileData().then((data) => {
      setMyProfileData(data)
    })
  }, [])


  useEffect(() => {
    if (!updateMyprofileData) return;
    setMyProfileData(updateMyprofileData);
    AuthService.updateUserProfile(updateMyprofileData).then((response) => {
      console.log(response);
    });

  }, [updateMyprofileData]);


  const handleRemoveConnection = (myConnectionIndex) => {
    const afterRemovingConnection = myProfileData.myConnections.filter((connection, index) => index !== myConnectionIndex);
    setUpdateMyProfileData({ ...myProfileData, myConnections: afterRemovingConnection })
  }


  const handleToConnect = (suggestionConnectionsIndex) => {
    // Get connection object from suggestionConnections
    const connectionToAdd = myProfileData.suggestionConnectins[suggestionConnectionsIndex];

    //  Remove the connection obj from suggestionConnections
    const updatedSuggestionConnections = myProfileData.suggestionConnectins.filter((_, index) => index !== suggestionConnectionsIndex);

    // Append the Remove connection object to myConnections
    const updatedMyConnections = [...myProfileData.myConnections, connectionToAdd];

    // Update state with the new added and Remove Connection
    setUpdateMyProfileData(prevState => ({
      ...prevState,
      suggestionConnectins: updatedSuggestionConnections,
      myConnections: updatedMyConnections
    }));
  }


  return (
    show && <main className='w-full min-h-screen bg-[#f8fafe]'>

      {/* CARD HEAD COVER */}
      <div className='h-[71px]  mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3'>
        <p className='text-white text-xs md:text-lg font-medium'>My Connections</p>
      </div>

      {/* CARD CONTAINER 1 */}
      <div className="w-full flex flex-wrap gap-6    md:p-4 p-3 justify-center md:justify-start ">
        {/* CONNECTION CARD1 */}

        {
          myProfileData.myConnections.map((connection, index) => {
            return (
              <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm " key={index}>
                <div className="w-[65%] flex flex-col gap-3 p-2 m-auto">
                  <h1>{connection.connectionName}</h1>
                  <p className="text-xs text-slate-500">{connection.connectionPosition}</p>
                  <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-4 py-1 h-min text-xs font-medium' onClick={() => handleRemoveConnection(index)}>
                    Remove Connection
                  </button>
                </div>
                <div className="w-[35%] m-auto">
                  <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                </div>
              </div>
            )
          })
        }
      </div>





      {/* CARD CONTAINER 2 */}
      <div className="w-full flex">
        <h1 className="  mx-auto md:ml-5 mt-10 text-xl ">People You can Also Connect</h1>
      </div>
      <div className="w-full flex flex-wrap gap-6    md:p-4 p-3 justify-center md:justify-start ">


        {
          myProfileData.suggestionConnectins.map((connection, index) => {
            return (
              <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm " key={index}>
                <div className="w-[65%] flex flex-col gap-3 p-2 m-auto">
                  <h1>{connection.connectionName}</h1>
                  <p className="text-xs text-slate-500">{connection.connectionPosition}</p>
                  <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-2 py-1 h-min text-xs font-medium' onClick={() => handleToConnect(index)}>Connect</button>
                </div>
                <div className="w-[35%] m-auto">
                  <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                </div>
              </div>
            )
          })
        }


      </div>

    </main>
  )
}
