import { LockKeyhole, FileText, PencilLine } from "lucide-react";

export default function SatisFormDetails() {
  return (
      <div className="grid grid-cols- gap-5 items-center p-5  ">
        <div className=" group satic-custom-form">
          {/* <PencilLine size={30} className="group-hover:text-white " /> */}
          <h1 className="text-lg font-semibold text-amber-400 ">วัตถุประสงค์ของแบบฟอร์ม </h1>
          <p className="text-sm">
            เพื่อสำรวจความคิดเห็นและความพึงพอใจของผู้ใช้บริการ
            นำไปใช้พัฒนาคุณภาพการให้บริการ
          </p>
        </div>
        <div className="group  satic-custom-form">
          {/* <FileText size={30} className="group-hover:text-white" /> */}
          <h1 className="text-lg font-semibold text-amber-400">เนื้อหาที่สำรวจ</h1>
          <p className="text-sm">
            ครอบคลุมด้านการให้บริการ เช่น ความรวดเร็ว ความสุภาพ ความสะดวก
            และข้อเสนอแนะ
          </p>
        </div>
        <div className="group  satic-custom-form">
          {/* <LockKeyhole size={30} className="group-hover:text-white" /> */}
          <h1 className="text-lg font-semibold text-amber-400">การนำข้อมูลไปใช้</h1>
          <p className="text-sm">
            ข้อมูลที่ได้รับจะถูกวิเคราะห์เพื่อนำไปปรับปรุงบริการ
            และจะเก็บเป็นความลับ
          </p>
        </div>
      </div>
  );
}
