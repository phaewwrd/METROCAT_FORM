import {
  LockKeyhole,
  FileText,
  PencilLine,
} from "lucide-react";

export default function PersonalDetails() {
  return (
    <div>
        <div className="grid grid-cols-3 gap-10 m-5 items-center">
        <div className=" group hover:-mt-15 my-custom-form">
          <PencilLine size={30} className="group-hover:text-white " />
          <h1 className="text-md font-semibold">วัตถุประสงค์ของแบบฟอร์ม </h1>
          <p className="text-sm">
            แบบฟอร์มนี้จัดทำขึ้นเพื่อใช้ในการเก็บรวบรวมข้อมูลพื้นฐานของผู้ใช้
            เช่น ชื่อ เบอร์ติดต่อ อีเมล หรือข้อมูลที่เกี่ยวข้อง
            โดยมีเป้าหมายเพื่อให้สามารถติดต่อกลับได้อย่างสะดวกและเหมาะสม{" "}
          </p>
        </div>
        <div className="group hover:-mt-15 my-custom-form">
          <FileText size={30} className="group-hover:text-white" />
          <h1 className="text-md font-semibold">การนำข้อมูลไปใช้</h1>
          <p className="text-sm">
            ข้อมูลที่ได้รับจะถูกนำไปใช้สำหรับการวิเคราะห์เบื้องต้น เช่น
            ความสนใจของผู้ใช้ กลุ่มเป้าหมาย หรือความต้องการเฉพาะ
            เพื่อพัฒนาหรือปรับปรุงบริการให้ตรงจุดมากยิ่งขึ้น{" "}
          </p>
        </div>
        <div className="group hover:-mt-15 my-custom-form">
          <LockKeyhole size={30} className="group-hover:text-white" />
          <h1 className="text-md font-semibold">การรักษาความลับของข้อมูล</h1>
          <p className="text-sm">
            ข้อมูลทั้งหมดที่ผู้ใช้กรอกจะถูกเก็บไว้อย่างปลอดภัย
            และจะไม่ถูกเผยแพร่หรือส่งต่อให้บุคคลภายนอกโดยไม่ได้รับความยินยอม
            ข้อมูลจะถูกใช้เฉพาะในกรอบวัตถุประสงค์ที่ระบุไว้เท่านั้น{" "}
          </p>
        </div>
      </div>
    </div>
  )
}
