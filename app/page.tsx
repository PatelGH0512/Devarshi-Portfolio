"use client";
import { BackgroundGradientAnimation } from "@/components/ui/Gradient-bg";
import { PiReadCvLogoFill } from "react-icons/pi";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentsProjects from "@/components/RecentsProjects";
import About from "@/components/About";
import MyTechstack from "@/components/MyTechstack";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Main Content Wrapper */}
      <div className="max-w-7xl w-full px-0 py-5 gap-2">
        <NavbarDemo></NavbarDemo>
        <div className="h-17"></div>
        {/* Hero Section */}
        <Hero></Hero>
        <div className="h-20"></div>

        {/* About Section */}
        <div className="m-4">
          <About></About>
        </div>

        {/* Gap between Grid and Gradient Animation */}
        <div className="h-50"></div>
        {/* Gradient Animation Section - override the default height and width */}
        <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-[1.01] group">
          <BackgroundGradientAnimation containerClassName="!w-full !h-72 rounded-2xl transition-all duration-300">
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white px-4 pointer-events-none">
              <p className="font-bold text-3xl text-center md:text-4xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 mb-8 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                Checkout my resume <PiReadCvLogoFill size={"24px"} />
              </p>
              <div className="!pointer-events-auto">
                <a
                  href="/Users/patelmac05/Desktop/portfolio/public/DevarshiAPatel_ResumeSDE.pdf"
                  download={"Devarshi's resume"}
                >
                  <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="text-lg px-8 py-2 flex gap-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                      Download{" "}
                      <PiReadCvLogoDuotone className="mt-1" size={"20px"} />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </BackgroundGradientAnimation>
        </div>

        {/* Bottom spacing */}
        <div className="h-10"></div>
        <div>
          <Experience></Experience>
        </div>
        <div className="h-10"></div>
        <div>
          <RecentsProjects></RecentsProjects>
        </div>
        <div>
          <MyTechstack></MyTechstack>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}
