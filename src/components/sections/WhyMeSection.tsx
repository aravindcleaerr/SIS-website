"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle,
  Globe,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  CheckCircle,
  Globe,
  Wrench,
};

export function WhyMeSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Why Choose SIS?" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {WHY_US.map((item) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="text-center p-4 sm:p-6 rounded-xl bg-sis-navy-light/50 backdrop-blur-sm border border-sis-navy-mid/50 hover:bg-sis-navy-light transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={40} className="text-sis-gold mx-auto mb-4" />
                <h4 className="text-sis-white text-sm font-medium whitespace-pre-line leading-relaxed">
                  {item.title}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
