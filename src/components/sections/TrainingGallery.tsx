"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const trainingImages = [
  {
    src: "/images/training-session-1.jpg",
    alt: "P.S. Satish conducting a corporate training session in a boardroom",
    caption: "Interactive corporate training session",
  },
  {
    src: "/images/training-session-2.jpg",
    alt: "Large group training session with participants",
    caption: "Group training with manufacturing professionals",
  },
];

export function TrainingGallery() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Training in Action"
          subtitle="A glimpse of our interactive training sessions with industry professionals"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {trainingImages.map((img) => (
            <motion.div
              key={img.src}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden border border-sis-navy-mid/50 hover:border-sis-gold/30 transition-all duration-300"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-sis-black/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-sis-white text-sm sm:text-base font-medium">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
