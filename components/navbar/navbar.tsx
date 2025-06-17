import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-amber-300  ">
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
          className="text-gray-900 dark:text-gray-800 "
        >
          Home
        </Link>
        <Link
          href="/personal-page"
          className="text-gray-900 dark:text-gray-800 hover:underline"
        >
          Personal Form
        </Link>
        <Link
          href="/satisfaction-page"
          className="text-gray-900 dark:text-gray-800 hover:underline"
        >
          Satisfaction Form
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
