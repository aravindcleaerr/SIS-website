"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TimelineItemProps {
  period: string;
  title: string;
  org: string;
  description: string;
  index: number;
}

export function TimelineItem({
  period,
  title,
  org,
  description,
  index,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative mb-12 last:mb-0"
    >
      {/* Desktop layout: alternating left/right */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-start">
        <div className={isLeft ? "text-right" : ""}>
          {isLeft && (
            <div className="bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-xl p-6">
              <span className="inline-block bg-sis-gold/10 text-sis-gold text-xs px-3 py-1 rounded-full mb-3">
                {period}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-sis-white mb-1">
                {title}
              </h3>
              <p className="text-sis-blue-light text-sm mb-3">{org}</p>
              <p className="text-sis-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-sis-gold border-2 border-sis-black animate-pulse-glow" />
        </div>

        <div>
          {!isLeft && (
            <div className="bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-xl p-6">
              <span className="inline-block bg-sis-gold/10 text-sis-gold text-xs px-3 py-1 rounded-full mb-3">
                {period}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-sis-white mb-1">
                {title}
              </h3>
              <p className="text-sis-blue-light text-sm mb-3">{org}</p>
              <p className="text-sis-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout: left-aligned */}
      <div className="lg:hidden relative pl-8 border-l-2 border-sis-navy-mid/50">
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-sis-gold" />
        <div className="bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-xl p-5">
          <span className="inline-block bg-sis-gold/10 text-sis-gold text-xs px-3 py-1 rounded-full mb-3">
            {period}
          </span>
          <h3 className="font-[family-name:var(--font-playfair)] text-lg text-sis-white mb-1">
            {title}
          </h3>
          <p className="text-sis-blue-light text-sm mb-2">{org}</p>
          <p className="text-sis-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
