'use client'
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between p-4 bg-amber-300 shadow-xl ">
      <Link
        href="/"
        className="text-xl font-bold text-gray-900 dark:text-gray-800 "
      >
        <Image
          src="/images.png"
          alt="Metro Cat Logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </Link>
      <div className="flex items-center space-x-10 transition-all duration-300 font-semibold">
        <Link
          href="/"
          className={`group relative  dark:text-gray-800 ${ pathname === '/' ? 'text-gray-500' : 'text-gray-900'}`}
        >
          หน้าแรก
          <span className="absolute left-0 -bottom-1.5 h-[2px] bg-gray-800 transition-all duration-300 w-0 group-hover:w-full" />
        </Link>

        <Link
          href="/personal-page"
          className={`group relative  dark:text-gray-800 ${ pathname === '/personal-page' ? 'text-gray-500' : 'text-gray-900'}`}
        >
          แบบฟอร์มขอข้อมูลทั่วไป
          <span className="absolute left-0 -bottom-1.5 h-[2px] bg-gray-800 transition-all duration-300 w-0 group-hover:w-full" />
        </Link>
        <Link
          href="/satisfaction-page"
          className={`group relative  dark:text-gray-800 ${ pathname === '/satisfaction-page' ? 'text-gray-500' : 'text-gray-900'}`}
        >
          แบบฟอร์มสำรวจความพึงพอใจบริการ
          <span className="absolute left-0 -bottom-1.5 h-[2px] bg-gray-800 transition-all duration-300 w-0 group-hover:w-full" />
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
