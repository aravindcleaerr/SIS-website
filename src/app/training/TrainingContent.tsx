"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Award,
  Brain,
  Wrench,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { TRAINING_MODULES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Award,
  Brain,
  Wrench,
  BookOpen,
};

const categories = Object.values(TRAINING_MODULES);

export function TrainingContent() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Training Modules"
          subtitle="55+ customized training modules designed and delivered across manufacturing industries, engineering colleges, and professional associations"
        />

        <div className="space-y-16">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || BookOpen;
            return (
              <div key={category.title}>
                {/* Category header */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sis-gold to-sis-gold-dim flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#0f172a]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-sis-white">
                      {category.title}
                    </h3>
                    <p className="text-sis-gray-600 text-sm">
                      {category.modules.length} modules
                    </p>
                  </div>
                </motion.div>

                {/* Module grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {category.modules.map((module) => (
                    <motion.div
                      key={module}
                      variants={fadeInUp}
                      className="bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-xl p-4 hover:border-sis-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-sis-gold mt-2 flex-shrink-0" />
                        <span className="text-sis-gray-400 text-sm leading-relaxed">
                          {module}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
