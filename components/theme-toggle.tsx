// components/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {mounted && ( theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
    </button>
  )
}
