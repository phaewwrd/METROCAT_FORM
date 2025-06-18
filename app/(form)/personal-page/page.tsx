import PersonalForm from "@/components/form/personalform";
import MyForm1 from "@/components/form/personalform";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MY FORM",
};
export default function PersonalPage() {
  return (
    <div className="flex flex-col justify-center  min-h-screen dark:bg-gray-600">
      {/* <div className="w-[900px] grid-cols-1 p-10 m-10 border-1 rounded-xl justify-center text-center "> */}
      <div className="flex flex-col w-100 m-20 gap-5">
        <h1 className="text-3xl font-bold text-start text-white">
          แบบฟอร์มขอข้อมูลทั่วไป
        </h1>
        <p className="text-sm text-gray-400">
          {" "}
          แบบฟอร์มนี้จัดทำขึ้นเพื่อรวบรวมข้อมูลพื้นฐานที่จำเป็นในการติดต่อสื่อสาร
          รวมถึงใช้เป็นข้อมูลเบื้องต้นสำหรับการวิเคราะห์หรือให้บริการที่ตรงตามความต้องการของผู้ใช้งาน
          โดยข้อมูลที่ให้จะถูกเก็บรักษาอย่างปลอดภัยและใช้เพื่อวัตถุประสงค์ที่ระบุไว้เท่านั้น
        </p>
      </div>
      <div className="absolute -z-10 top-0 w-full h-[400px] overflow-hidden ">
        <div className="w-full h-[400px] bg-gray-900 opacity-80 z-10 absolute"></div>

        <Image
          src="/metro-cat_03.jpg"
          alt="Metro Cat Logo"
          width={1200}
          height={200}
          className=""
        />
      </div>
      <PersonalForm />
      {/* </div> */}

    </div>
  );
}
