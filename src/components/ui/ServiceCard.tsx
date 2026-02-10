"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import {
  GraduationCap,
  Users,
  Target,
  Mic,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  Target,
  Mic,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  items: string[];
}

export function ServiceCard({ icon, title, items }: ServiceCardProps) {
  const Icon = iconMap[icon] || GraduationCap;

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-sis-navy-light/50 backdrop-blur-sm border border-sis-navy-mid/50 rounded-2xl p-5 sm:p-8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(26,86,219,0.15)] overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sis-gold to-sis-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-sis-blue to-sis-navy flex items-center justify-center mb-5">
        <Icon size={24} className="text-sis-white" />
      </div>

      <h3 className="font-[family-name:var(--font-playfair)] text-xl lg:text-[22px] text-sis-white mb-4">
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative pl-5 text-sis-gray-400 text-[15px] leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-2 before:rounded-full before:bg-sis-gold"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
