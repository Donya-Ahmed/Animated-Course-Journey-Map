"use client";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Courses", to: "/courses" },
    { name: "About", to: "/about" },
    { name: "Pricing", to: "/pricing" },
    { name: "Careers", to: "/careers" },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[280px] p-6 flex flex-col gap-4">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
        </VisuallyHidden>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.to;

            return (
              <Link
                key={item.name}
                href={item.to}
                className={`py-3 text-sm font-semibold transition-colors ${
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

        <div className="flex flex-col gap-2 mt-4">
          <Button variant="outline" className="rounded-full h-11">
            Register
          </Button>
          <Button className="rounded-full h-11 bg-brand text-white">
            Join For Free
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
