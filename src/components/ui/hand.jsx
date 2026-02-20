"use client";

import { motion } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const HandIcon = forwardRef(({ className, size = 25, ...props }, ref) => {
  return (
    <div className={cn(className)} {...props}>
      <motion.svg
        ref={ref}
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, -15, 10, -5, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        style={{
          transformOrigin: "50% 90%",
        }}
      >
        <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
        <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </motion.svg>
    </div>
  );
});

HandIcon.displayName = "HandIcon";

export { HandIcon };