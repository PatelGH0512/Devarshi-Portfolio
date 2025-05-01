import React from "react";
import { BackgroundBeamsDemo } from "./ui/background-beams";

const About = () => {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16" id="about">
      <div
        className="grid gap-6 w-full h-full
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-6 lg:grid-rows-6"
      >
        {/* About Me Section */}
        <div
          className="relative overflow-hidden rounded-2xl border dark:border-white/[0.1] 
  sm:col-span-3 
  lg:col-span-3 lg:row-span-6 
  transition duration-300 hover:animate-glow bg-black/30 backdrop-blur-md"
        >
          {/* The image */}
          <img
            src="/MyPhoto.png"
            alt="Developer Profile"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Soft gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0 rounded-2xl" />

          {/* Text moved to bottom-left and slightly away from center */}
          <div className="absolute bottom-6 left-6 z-10  p-1 sm:p-6 rounded-xl overflow-auto max-w-lg">
            <h3 className="text-gray-200 text-sm font-semibold tracking-widest uppercase">
              Full-Stack Developer
            </h3>
            <h2 className="text-white text-3xl font-bold mb-2">About Me</h2>
            <p className="text-gray-100 text-base font-light leading-relaxed text-justify">
              I’m an innovative full-stack developer with a passion for crafting
              scalable, high-performance applications from the ground up. I love
              to dive into projects and implement ltest features into it it
              honing my skills as a developer and student.
            </p>
          </div>
        </div>

        {/* Always Leveling Up Section */}
        <div
          className="rounded-2xl border dark:border-black
          sm:col-span-2 
          lg:col-span-3 lg:row-span-3 
         transition duration-300 hover:animate-glow bg-gradient-to-br from-[#0f051d] to-[#1e0945] backdrop-blur-md"
        >
          <BackgroundBeamsDemo />
        </div>

        {/* Education Section */}
        <div
          className="rounded-2xl border dark:border-white/[0.1] 
          sm:col-span-2 
          lg:col-span-3 lg:row-span-3 
          transition duration-300 hover:shadow-2xl"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent), radial-gradient(circle at top right, rgba(255, 168, 255, 0.07), transparent), linear-gradient(135deg, #090025 0%, #1c0049 50%, #140117 100%)",
          }}
        >
          <div className="h-full w-full flex flex-col justify-between relative p-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Education</h2>

              <div className="space-y-6 relative">
                {/* GWU */}
                <div className="relative pl-8 border-l-2 border-purple-400">
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-purple-300"></div>
                  <h3 className="text-2xl font-semibold text-white">
                    The George Washington University
                  </h3>
                  <p className="text-purple-200 text-lg font-medium">
                    MS in Computer Science
                  </p>
                  <p className="text-gray-300 text-sm">
                    August 2023 - May 2025
                  </p>
                </div>

                {/* MS Ramaiah */}
                <div className="relative pl-8 border-l-2 border-purple-400">
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-purple-300"></div>
                  <h3 className="text-2xl font-semibold text-white">
                    MS Ramaiah University of Applied Sciences
                  </h3>
                  <p className="text-purple-200 text-lg font-medium">
                    B.Tech in Computer Science
                  </p>
                  <p className="text-gray-300 text-sm">
                    August 2018 - August 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative SVG */}
            <div className="absolute top-4 right-4 opacity-10 p-2">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
