import PersonalForm from "@/components/form/personalform"
import MyForm1 from "@/components/form/personalform"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata ={
  title : "MY FORM"
}
export default function PersonalPage() {
  return (
    <div className="flex flex-col justify-center  dark:bg-gray-600">
      {/* <div className="w-[900px] grid-cols-1 p-10 m-10 border-1 rounded-xl justify-center text-center "> */}
      <div className="absolute -z-10 top-0 w-full h-[400px] overflow-hidden ">
        <div  className="w-full h-[400px] bg-gray-900 opacity-60 z-10 absolute"></div>

     <Image src="/metro-cat_03.jpg" alt="Metro Cat Logo" width={1200} height={200} className="" />
      </div>
      <PersonalForm/>
      {/* </div> */}
    </div>
  )
}
