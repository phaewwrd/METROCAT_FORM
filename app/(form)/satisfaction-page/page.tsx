import { Metadata } from "next";
import SatisForm from "@/components/form/satisform";
import Image from "next/image";
import SatisFormDetails from "@/components/form/satic-details";

const metadata: Metadata = {
  title: "Personal Form",
  description: "A form to collect personal information",
};

export default function SatisfactionPage() {
  return (
    <div className="grid grid-cols-1 justify-center  dark:bg-gray-600">
      {/* <div className="w-[900px] grid-cols-1 p-10 m-10 border-1 rounded-xl justify-center text-center "> */}
      <div className="flex ">
        <div className="flex flex-col m-20 gap-5 text-gray-800">
          <h1 className="text-3xl font-bold text-center">แบบฟอร์มสำรวจความพึงพอใจบริการ</h1>
        </div>
        <div className="w-200 bg-[url('/metro-cat_03.jpg')] bg-cover bg-center  overflow-hidden">
          
        </div>
      <SatisFormDetails />
      </div>

      <SatisForm />

        
      {/* <div className="absolute -z-10 top-0 w-full h-[700px] overflow-hidden ">
        </div> */}
    </div>
  );
}
