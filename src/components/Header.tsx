"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50 h-[88px]  flex items-center">
      <div className="flex  px-4 md:px-10 xl:px-20   justify-between items-center  w-full">
        <div className="flex items-center gap-4 md:gap-10">
          <Link href="/">
            <div className="relative w-[100px] md:w-[168px] h-10 md:h-[50px]">
              <Image src="/logo.png" alt="logo" fill />
            </div>
          </Link>

          <div className="hidden xl:block">
            <SearchBar />
          </div>
        </div>

        <DesktopNav />

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="outline" className="rounded-full px-6 h-12  border-primary">
            Register
          </Button>

          <Button className="rounded-full px-6 h-12 bg-brand text-white hover:bg-primary">
            Join For Free
          </Button>
        </div>

    
        <button className="lg:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <MobileMenu open={open} onOpenChange={setOpen} />
    </header>
  );
}
