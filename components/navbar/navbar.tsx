import Link from "next/link"
import ThemeToggle from "../theme-toggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow">
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">METRO CAT FORM</Link>
      <ThemeToggle />
    </nav>
  )
}
