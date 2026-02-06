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
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FiChevronUp } from "react-icons/fi";
export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const { y } = useWindowScroll();
  useEffect(() => {
    if (y > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }, [y]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black-400 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-black-200 hover:scale-110 text-white rounded-full p-3 shadow-lg hover:shadow-xl z-50"
          aria-label="Scroll to top"
        >
          <FiChevronUp size={24} />
        </button>
      )}
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
                  href="/DevarshiPatel_FullStackSWE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download={"Devarshi's Resume"}
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
