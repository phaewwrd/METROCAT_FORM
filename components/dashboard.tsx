import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function DashBoard() {
  return (
    <div className="m-10 pt-90">
      <h1 className="text-2xl font-bold text-center">
        เลือกแบบฟอร์มที่ต้องการกรอก
      </h1>
      <div className="grid grid-cols-2 m-10 gap-10 ">
        {[
          [
            "แบบฟอร์มขอข้อมูลทั่วไป",
            "แบบฟอร์มสำหรับเก็บข้อมูลพื้นฐานเพื่อการติดต่อและการวิเคราะห์",
            "/personal-page",
          ],
          [
            "แบบฟอร์มสำรวจความพึงพอใจบริการ",
            "แบบฟอร์มเพื่อสำรวจความคิดเห็นและความพึงพอใจในการให้บริการของเรา",
            "/satisfaction-page",
          ],
        ].map((value,index) => (
          <Card className="" key={index}>
            <CardHeader>
              <CardTitle>{value[0]}</CardTitle>
              <CardDescription>{value[1]}</CardDescription>
            </CardHeader>
            <CardContent>
              <CardAction>
                <Button>
                  <Link href={value[2]}>กรอกข้อมูล</Link>
                </Button>
              </CardAction>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
