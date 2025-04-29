import { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full pt-24 pb-12 relative overflow-hidden"
      id="contact"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-200/30 z-0" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-full h-full grid grid-cols-12 gap-4">
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="col-span-1 h-full border-r border-white/5"
                style={{
                  animationDuration: `${Math.random() * 4 + 3}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="col-span-12 w-full border-t border-white/5"
                style={{
                  animationDuration: `${Math.random() * 4 + 3}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 mb-6">
            Let&apos;s Create Together
          </h2>

          <p className="text-white/70 text-center max-w-2xl mb-10 text-lg">
            Ready to elevate your digital presence? I&apos;m just one message
            away from turning your vision into reality.
          </p>

          {/* Interactive contact button */}
          <a
            href="mailto:contact@jsmastery.pro"
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`absolute inset-0 bg-purple-500/20 rounded-full blur-xl transition-all duration-300 ${
                isHovered ? "scale-125 opacity-100" : "scale-100 opacity-0"
              }`}
            ></div>
            <button className="relative flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 py-3 px-8 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 group-hover:translate-y-1">
              <span>Start a conversation</span>
              <FaEnvelope
                className={`transition-all duration-300 ${
                  isHovered ? "rotate-12 translate-x-1" : ""
                }`}
              />
            </button>
          </a>
        </div>

        {/* Footer divider with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12" />

        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
              Devarshi Patel
            </div>
            <p className="text-white/60 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Social media links */}
          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                className="group w-10 h-10 flex justify-center items-center rounded-lg bg-black-300/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-black-200 hover:scale-110"
              >
                <img
                  src={info.img}
                  alt={"social icon"}
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
