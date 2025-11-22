"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Courses", to: "/courses" },
    { name: "About", to: "/about" },
    { name: "Pricing", to: "/pricing" },
    { name: "Careers", to: "/careers" },
  ];

  return (
    <nav className="hidden lg:flex items-center">
      {navItems.map((item) => {
        const isActive = pathname === item.to;

        return (
          <Link
            key={item.name}
            href={item.to}
            className={`px-4 py-4 text-sm font-semibold transition-colors ${
              isActive
                ? "text-brand border-b-2 border-brand"
                : "text-muted-foreground hover:text-brand"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
