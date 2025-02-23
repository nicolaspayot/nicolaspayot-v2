import type React from "react";
import Link from "next/link";

export default function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-400 transition-colors"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </Link>
  );
}
