"use client"

export default function MyConnections() {
    return (
        <main className='w-full min-h-screen bg-[#f8fafe]'>

            {/* CARD HEAD COVER */}
            <div className='h-[71px]  mx-4 w-auto bg-[#1E2875] rounded-[2.78px]  md:rounded-lg md:p-4 p-3'>
                <p className='text-white text-xs md:text-lg font-medium'>My Connections</p>
            </div>

            {/* CARD CONTAINER 1 */}
            <div className="w-full flex flex-wrap gap-6    md:p-4 p-3 justify-center md:justify-start ">

                {/* CONNECTION CARD1 */}
                <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm ">
                    <div className="w-[65%] flex flex-col gap-3 p-2 m-auto">
                        <h1>Vishnu Swaroop</h1>
                        <p className="text-xs text-slate-500">FullStack Developer @ Mindtrot</p>
                        <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-4 py-1 h-min text-xs font-medium'>
                            Remove Connection
                        </button>
                    </div>
                    <div className="w-[35%] m-auto">
                        <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                    </div>
                </div>

                {/* CONNECTION CARD2 */}
                <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm ">
                    <div className="w-[65%] flex flex-col gap-3 p-2">
                        <h1>Vishnu Swaroop</h1>
                        <p className="text-xs text-slate-500">FullStack Developer @ Mindtrot</p>
                        <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-4 py-1 h-min text-xs font-medium'>
                            Remove Connection
                        </button>
                    </div>
                    <div className="w-[35%] m-auto">
                        <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                    </div>
                </div>
                {/* CONNECTION CARD2 */}
                <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm ">
                    <div className="w-[65%] flex flex-col gap-3 p-2">
                        <h1>Vishnu Swaroop</h1>
                        <p className="text-xs text-slate-500">FullStack Developer @ Mindtrot</p>
                        <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-4 py-1 h-min text-xs font-medium'>
                            Remove Connection
                        </button>
                    </div>
                    <div className="w-[35%] m-auto">
                        <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                    </div>
                </div>
            </div>





            {/* CARD CONTAINER 2 */}
            <div className="w-full flex">
                <h1 className="  mx-auto md:ml-5 mt-10 text-xl ">People You can Also Connect</h1>
            </div>
            <div className="w-full flex flex-wrap gap-6    md:p-4 p-3 justify-center md:justify-start ">

                {/* CONNECTION CARD1 */}
                <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm ">
                    <div className="w-[65%] flex flex-col gap-3 p-2 m-auto">
                        <h1>Vishnu Swaroop</h1>
                        <p className="text-xs text-slate-500">FullStack Developer @ Mindtrot</p>
                        <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-2 py-1 h-min text-xs font-medium'>Connect</button>
                    </div>
                    <div className="w-[35%] m-auto">
                        <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                    </div>
                </div>

                {/* CONNECTION CARD2 */}
                <div className="flex w-[250px] h-[119px] rounded-md shadow-sm border border-[#CECECE] text-sm ">
                    <div className="w-[65%] flex flex-col gap-3 p-2">
                        <h1>Vishnu Swaroop</h1>
                        <p className="text-xs text-slate-500">FullStack Developer @ Mindtrot</p>
                        <button className=' bg-[#BAB6EB]   rounded-[64.587px] px-2 py-1 h-min text-xs font-medium'>
                            Connect
                        </button>
                    </div>
                    <div className="w-[35%] m-auto">
                        <img src="/assets/profilePhoto.svg" alt="" className="w-full h-full bg-contain " />
                    </div>
                </div>

            </div>

        </main>
    )
}
