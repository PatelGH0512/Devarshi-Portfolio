"use client";
import {
  //useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundGradient } from "./backgroundgradientcard";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10">
        <h2 className="font-bold text-3xl text-center md:text-4xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 mb-8 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
          Experiences
        </h2>
        <p className="text-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed tracking-wide  animate-fade-in">
          Here&apos;s a glimpse into the journey that shaped who I am today.
        </p>
      </div>
      <div className="h-1"></div>
      <BackgroundGradient></BackgroundGradient>
      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row gap-6 md:gap-12 pt-12 md:pt-24"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-sm md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl font-semibold text-neutral-700 dark:text-neutral-400 mb-2">
                {item.title}
              </h3>
              <BackgroundGradient className="rounded-2xl">
                <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  {item.content}
                </div>
              </BackgroundGradient>
            </div>
          </div>
        ))}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#53457d] via-[#6a49a0] to-[#833d8e] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
