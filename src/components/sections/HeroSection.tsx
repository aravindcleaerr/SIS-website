"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { COMPANY, SITE_CONFIG } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlowButton } from "@/components/ui/GlowButton";
import { Logo } from "@/components/ui/Logo";
import { KnowledgeHero } from "@/components/hero/KnowledgeHero";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-sis-black" />
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(80,50,160,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sis-black to-transparent z-10" />

      <div className="relative z-[5] w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
              <Logo size="lg" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-sis-blue-light tracking-widest uppercase font-light mb-6 sm:mb-8"
            >
              Corporate Training &bull; Mentoring &bull; Consulting
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sis-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8 italic"
            >
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 sm:gap-10 mb-8 sm:mb-10"
            >
              {COMPANY.heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-sis-gold leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-[10px] sm:text-xs text-sis-gray-400 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowButton href="/#contact">
                Get In Touch
                <ArrowDown size={16} />
              </GlowButton>
            </motion.div>
          </motion.div>

          {/* Knowledge visualization */}
          <div className="relative h-[280px] sm:h-[400px] lg:h-[550px]">
            <KnowledgeHero />
          </div>
        </div>
      </div>
    </section>
  );
}
