// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group w-10 p-2  rounded-lg bg-white font-semibold hover:w-20 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 "
      aria-label="Toggle theme"
    >
      {mounted &&
        (theme === "dark" ? (
          <div className=" flex items-center  gap-2">
            <Sun className="w-5 h-5 shrink-0" />
            <p className="opacity-0 group-hover:opacity-100 whitespace-nowrap">Light</p>
          </div>
        ) : (
          <div className="flex items-center  gap-2">
            <Moon className="w-5 h-5 shrink-0" />
            <div className="opacity-0 group-hover:opacity-100 whitespace-nowrap">Dark</div>
          </div>
        ))}
    </button>
  );
}
