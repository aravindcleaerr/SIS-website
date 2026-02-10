"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function StatsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-sis-navy to-sis-navy-mid rounded-3xl py-12 sm:py-16 px-5 sm:px-8 lg:px-16">
        <SectionHeading title="Our Impact in Numbers" light />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {COMPANY.detailedStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center p-4 sm:p-6 rounded-xl bg-sis-white/5 backdrop-blur-sm border border-sis-white/10 hover:bg-sis-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-sis-gold leading-none mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sis-gray-400 text-xs uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
