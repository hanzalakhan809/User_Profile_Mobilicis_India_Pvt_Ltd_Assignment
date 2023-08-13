"use client"
import { useRouter } from "next/navigation"

export default function SideMenu() {


    const router = useRouter()
    return (
        <>
            <section className="w-[350px] cursor-pointer md:flex flex-col gap-8 hidden">

                <div className="flex">
                    <img src="/assets/chevronRight.svg" alt="" className="w-[14px] -mr-8 ml-auto" />
                    <div className="flex active:border-3  w-[183px] h-[47px] mx-auto rounded-[8.889px] cursor-pointer ">
                        <div className="m-auto h-auto text-5 font-normal ml-4" onClick={()=>router.push('/')}>My profile</div>
                    </div>
                </div>


                <div className="flex">
                    <img src="/assets/chevronRight.svg" alt="" className="w-[14px] -mr-8 ml-auto" />
                    <div className="flex active:border-3  w-[183px] h-[47px] mx-auto rounded-[8.889px] cursor-pointer " onClick={()=>router.push('/connections')} >
                        <div className="m-auto h-auto text-5 font-normal ml-4">My Connections</div>
                    </div>
                </div>


            </section>
        </>
    )
}
