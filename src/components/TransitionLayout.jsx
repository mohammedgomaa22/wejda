"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function TransitionLayout({ children }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "keyframes", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
