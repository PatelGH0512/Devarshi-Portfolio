"use client";
import React from "react";
import { Spotlight } from "@/components/ui/SpotLight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaCopy } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-16 pt-16 relative w-full h-full" id="home">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="-top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="-top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center mx-auto px-4 text-center space-y-10 max-w-4xl">
        <h1 className="text-center uppercase tracking-widest font-bold text-4xl md:text-6xl lg:text-7xl">
          Hello, I am <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-400 to-pink-700">
            Devarshi Patel
          </span>
        </h1>
        <p className="text-center md:tracking-wider md-4 text-sm md:text-lg lg:text-2xl">
          Nice to meet you!
        </p>
        <TextGenerateEffect
          className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed text-center w-full"
          words="I am a passionate Full Stack Developer specializing in building exceptional digital experiences. Transforming ideas into elegant solutions through clean code and intuitive design."
        />
        <div className="flex justify-center w-full">
          <a href="#connect">
            <MagicButton
              title="Show my work"
              icon={<FaCopy />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
