import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-12 md:py-20 lg:py-[86px] px-4 md:px-10 lg:px-20 mt-8" >
      <div className=" mx-auto flex flex-col items-center gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="relative w-[180px] md:w-[230px] h-[54px] md:h-[68px]">
            <Image
            src="/logo.png"
            alt="logo"
            fill
          />

          </div>
          <p className="w-full max-w-[690px] text-center text-sm font-normal text-muted-foreground leading-[150%] tracking-[-0.28px] px-4">
            At Delveng, we make learning engineering fun and effective. Our
            approach combines interactive lessons, real-world projects, and
            gamified elements to keep you engaged and motivated.
          </p>
        </div>

        <nav className="text-center text-base md:text-lg font-medium text-foreground leading-[150%] flex flex-wrap justify-center gap-2 md:gap-0">
          <Link href="/" className="hover:text-primary transition-colors px-2">
            Home
          </Link>
          <span className="hidden md:inline mx-2 md:mx-4">Courses</span>
          <span className="md:hidden px-2">Courses</span>
          <span className="hidden md:inline mx-2 md:mx-4">About Us</span>
          <span className="md:hidden px-2">About Us</span>
          <span className="hidden md:inline mx-2 md:mx-4">Pricing</span>
          <span className="md:hidden px-2">Pricing</span>
          <span className="hidden md:inline mx-2 md:mx-4">Community</span>
          <span className="md:hidden px-2">Community</span>
        </nav>

        <div className="flex flex-col items-center gap-3 md:gap-3.5">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            Follow Us:
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600 transition-colors"
            >
              <SiFacebook className="w-5 h-5 text-white" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600 transition-colors"
            >
              <SiInstagram className="w-5 h-5 text-white" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600 transition-colors"
            >
              <SiLinkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
          <div className="w-full max-w-[1150px] h-px bg-gray-100" />
          <p className="text-sm font-normal text-gray-400 leading-[125%] tracking-[-0.28px]">
            all rights reserved 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
