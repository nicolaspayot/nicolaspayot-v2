"use client";

import { useState, useEffect } from "react";
import { TbMoon, TbSunHigh } from "react-icons/tb";
import { useTheme } from "next-themes";

export default function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return <></>;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`p-2 ${className}`}
    >
      {resolvedTheme === "dark" ? (
        <TbSunHigh className="h-6 w-6 text-gray-300 hover:text-sky-400" />
      ) : (
        <TbMoon className="h-6 w-6 text-gray-600 hover:text-sky-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
