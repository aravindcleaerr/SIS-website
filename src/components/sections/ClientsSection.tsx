"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const topClients = [
  "Robert Bosch Engineering",
  "Mercedes Benz R&D",
  "L&T",
  "Moog Controls",
  "Autoliv",
  "Gabriel",
  "Rane Group",
  "Sundaram Brake Linings",
  "Mann and Hummel",
  "Dynamatic Hydraulics",
  "Sartorius Stedim India",
  "Titan Eye Care",
  "IIM Bangalore",
  "Christ University",
  "VIT Vellore",
  "ACMA",
  "IIMM",
  "CII",
  "DQS India",
  "TUV-Rheinland",
];

export function ClientsSection() {
  const totalClients =
    CLIENTS.manufacturing.length +
    CLIENTS.services.length +
    CLIENTS.institutions.length +
    CLIENTS.associations.length;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Trusted By Industry Leaders"
          subtitle={`${totalClients}+ companies, institutions, and associations across India`}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {topClients.map((client) => (
            <motion.div
              key={client}
              variants={fadeInUp}
              className="text-center py-4 px-3 rounded-xl bg-sis-navy-light/30 border border-sis-navy-mid/30 hover:border-sis-gold/30 transition-all duration-300"
            >
              <span className="text-sis-gray-400 text-sm font-medium">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sis-gray-600 text-sm mt-8"
        >
          ...and {totalClients - topClients.length}+ more companies across manufacturing, services, and education sectors
        </motion.p>
      </div>
    </section>
  );
}
