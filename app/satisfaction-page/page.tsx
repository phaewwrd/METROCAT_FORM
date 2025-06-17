import { Metadata } from "next";
import SatisForm from "@/components/form/satisform";

const metadata: Metadata = {
  title: "Personal Form",
  description: "A form to collect personal information",
};


export default function SatisfactionPage() {
  return (
    <div className="flex justify-center">
      <div className="w-[900px] grid-cols-1 p-10 m-10 border-1 rounded-xl justify-center text-center ">
        <div>
          <h1 className="text-3xl font-bold">แบบฟอร์มสำรวจความพึงพอใจบริการ</h1>
          <p className="text-xl">
            แบบฟอร์มเพื่อสำรวจความคิดเห็นและความพึงพอใจในการให้บริการของเรา
          </p>
        </div>
        <SatisForm />
      </div>
    </div>
  );
}
