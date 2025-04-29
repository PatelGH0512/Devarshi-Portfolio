import { cn } from "@/utils/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div
      className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.001] bg-grid-black-100/[0.01] bg-transparent
       absolute top-0 left-0 flex items-center justify-center"
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_10px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_10px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}
