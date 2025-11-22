import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
export const metadata = {
  title: "Delveng",
  description: "Delve into engineering",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body suppressHydrationWarning>
        <main className="">
          <Header />
          <div className="lg:px-20  md:px-4 px-1 min-h-screen">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
