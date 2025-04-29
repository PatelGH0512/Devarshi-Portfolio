"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layers, Terminal, ChevronRight } from "lucide-react";
import { cn } from "@/utils/utils";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaPython,
  FaJava,
  FaGithub,
  FaReact,
  FaVuejs,
  FaSass,
  FaGitAlt,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";
import {
  TbBrandCpp,
  TbBrandCSharp,
  TbBrandNextjs,
  TbBrandFramerMotion,
} from "react-icons/tb";
import {
  SiTypescript,
  SiMongodb,
  SiSocketdotio,
  SiRedux,
  SiMaterialformkdocs,
  SiExpress,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";

// Define TypeScript interfaces
interface TechItem {
  name: string;
  level: number;
  logo: JSX.Element;
}

interface CategoryData {
  title: string;
  icon: JSX.Element;
  items: TechItem[];
}

interface Categories {
  [key: string]: CategoryData;
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("languages");

  const categories: Categories = {
    languages: {
      title: "Programming Languages",
      icon: <Code className="mr-1" />,
      items: [
        { name: "JavaScript", level: 90, logo: <IoLogoJavascript size={25} /> },
        { name: "Python", level: 80, logo: <FaPython size={25} /> },
        { name: "", level: 75, logo: <TbBrandCSharp size={25} /> },
        { name: "", level: 65, logo: <TbBrandCpp size={25} /> },
        { name: "Java", level: 65, logo: <FaJava size={25} /> },
        { name: "TypeScript", level: 85, logo: <SiTypescript size={25} /> },
      ],
    },
    frontend: {
      title: "Frontend Tools",
      icon: <Layers className="mr-1" />,
      items: [
        { name: "React", level: 95, logo: <FaReact size={25} /> },
        { name: "Next.js", level: 90, logo: <TbBrandNextjs size={25} /> },
        { name: "Tailwind", level: 85, logo: <RiTailwindCssFill /> },
        { name: "Vue", level: 75, logo: <FaVuejs size={25} /> },
        { name: "Redux", level: 70, logo: <SiRedux size={25} /> },
        {
          name: "Frame Motion",
          level: 70,
          logo: <TbBrandFramerMotion size={25} />,
        },
        {
          name: "Material UI",
          level: 70,
          logo: <SiMaterialformkdocs size={25} />,
        },
        { name: "SASS", level: 70, logo: <FaSass size={25} /> },
      ],
    },
    backend: {
      title: "Backend Tools",
      icon: <Database className="mr-1" />,
      items: [
        { name: "Node.js", level: 90, logo: <FaNodeJs size={25} /> },
        { name: "Express", level: 85, logo: <SiExpress size={25} /> },
        { name: "PostgreSQL", level: 85, logo: <DiPostgresql size={25} /> },
        { name: "MongoDB", level: 80, logo: <SiMongodb size={25} /> },
        { name: "Socket.io", level: 80, logo: <SiSocketdotio size={25} /> },
      ],
    },
    devtools: {
      title: "Developer Tools",
      icon: <Terminal className="mr-1" />,
      items: [
        { name: "Git", level: 95, logo: <FaGitAlt size={25} /> },
        { name: "Docker", level: 85, logo: <FaDocker size={25} /> },
        { name: "VS Code", level: 90, logo: <VscVscodeInsiders size={25} /> },
        { name: "GitHub", level: 80, logo: <FaGithub size={25} /> },
      ],
    },
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row p-4 rounded-lg text-white overflow-hidden bg-black ">
      {/* Sidebar */}
      <div className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-4 backdrop-blur-sm">
        <div className="space-y-2">
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "w-full flex items-center p-3 rounded-lg transition-all duration-300 backdrop-blur-sm border hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-[1.01] group",
                activeCategory === category
                  ? "bg-purple-900/30 border-purple-500/50 text-purple-100 shadow-lg shadow-purple-900/20"
                  : "bg-purple-950/20 border-purple-800/20 hover:bg-purple-900/20 hover:border-purple-700/30 text-gray-300"
              )}
            >
              {categories[category].icon}
              <span>{categories[category].title}</span>
              <ChevronRight className="ml-auto" size={16} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 bg-black backdrop-blur-sm rounded-lg p-6 flex-1 border border-purple-500/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-[1.01] group ">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 bg-purple-900/30 rounded-lg border border-purple-700/30 mr-3">
              {categories[activeCategory].icon}
            </div>
            <h3 className="text-xl font-semibold text-purple-50">
              {categories[activeCategory].title}
            </h3>
          </div>

          <div className="space-y-6">
            {categories[activeCategory].items.map((item, index) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-black text-justify p-2 text-neutral-300 gap-1 text-pretty flex">
                    {item.logo}
                    {item.name}
                  </span>
                  <span className="text-white-100">{item.level}%</span>
                </div>
                <motion.div
                  className="h-2 w-full bg-purple-950/50 rounded-full overflow-hidden backdrop-blur-sm border border-purple-800/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={cn(
                      "h-full bg-gradient-to-r from-purple-600 to-pink-500"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
