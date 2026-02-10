"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2
        className={`font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-[42px] mb-3 ${
          light ? "text-sis-white" : "text-sis-white"
        }`}
      >
        {title}
      </h2>
      <div className="w-15 h-1 bg-gradient-to-r from-sis-gold to-sis-blue mx-auto rounded-full" />
      {subtitle && (
        <p className="text-sis-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
