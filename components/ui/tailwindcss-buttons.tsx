"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/utils/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-60 w-full rounded-xl border border-transparent hover:border-pink-300 group/btn overflow-hidden relative flex items-center justify-center",
        "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white dark:text-white transition duration-300",
        className
      )}
    >
      {/* Dotted Grid Overlay */}
      <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1]" />

      {/* Icon on Hover */}
      <IconClipboard className="absolute top-2 right-2 text-white/70 group-hover/btn:block hidden h-4 w-4 transition duration-200" />

      {/* Content */}
      <div className="relative z-40">{children}</div>
    </div>
  );
};
