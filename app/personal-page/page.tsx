import PersonalForm from "@/components/form/personalform"
import MyForm1 from "@/components/form/personalform"
import { Metadata } from "next"

export const metadata: Metadata ={
  title : "MY FORM"
}
export default function PersonalPage() {
  return (
    <div className="flex justify-center">
      <div className="w-[900px] grid-cols-1 p-10 m-10 border-1 rounded-xl justify-center text-center ">
      <div>
        <h1 className="text-3xl font-bold">แบบฟอร์มขอข้อมูลทั่วไป</h1>
        <p className="text-xl">แบบฟอร์มสำหรับเก็บข้อมูลพื้นฐานเพื่อการติดต่อและการวิเคราะห์</p>
      </div>
      <PersonalForm/>
      </div>
    </div>
  )
}
