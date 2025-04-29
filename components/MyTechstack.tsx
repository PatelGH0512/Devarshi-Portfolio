import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import TechStack from "./ui/techdetails";

export function LampDemo() {
  return (
    <LampContainer className="group">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 mb-0 font-bold bg-gradient-to-br from-white/80 to-white/15 py-4 text-center text-3xl md:text-4xl lg:text-7xl tracking-tight bg-clip-text text-transparent drop-shadow-2xl duration-300 transition-all group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
      >
        My Tech Stack
      </motion.h1>
    </LampContainer>
  );
}

const MyTechstack = () => {
  return (
    <div className="gap-1" id="techstack">
      <LampDemo></LampDemo>
      <TechStack></TechStack>
    </div>
  );
};

export default MyTechstack;
