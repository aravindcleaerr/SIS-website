"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Users,
} from "lucide-react";
import {
  FOUNDER,
  CAREER,
  EDUCATION,
  CERTIFICATIONS,
  OTHER_ROLES,
  ASSOCIATE,
} from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const eduIcons = [GraduationCap, Award];

export function FounderContent() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Founder Profile Hero */}
        <FadeInView>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-sis-gold/30 flex-shrink-0">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-sis-white mb-2">
                {FOUNDER.name}
              </h1>
              <p className="text-sis-gold text-lg tracking-widest uppercase font-light mb-4">
                {FOUNDER.title}
              </p>
              <p className="text-sis-gray-400 text-lg leading-relaxed max-w-2xl">
                {FOUNDER.about}
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Career Journey */}
        <SectionHeading title="Career Journey" />

        <div className="relative mb-24">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sis-gold via-sis-blue to-sis-navy-mid" />
          {CAREER.map((entry, index) => (
            <TimelineItem key={entry.title} {...entry} index={index} />
          ))}
        </div>

        {/* Education */}
        <SectionHeading title="Education" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          {EDUCATION.map((edu, index) => {
            const Icon = eduIcons[index] || GraduationCap;
            return (
              <motion.div
                key={edu.degree}
                variants={fadeInUp}
                className="text-center bg-sis-navy-light/30 border border-sis-navy-mid/50 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={40} className="text-sis-gold mx-auto mb-4" />
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-sis-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-sis-gray-400 text-sm">{edu.institution}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Professional Certifications */}
        <SectionHeading title="Professional Certifications" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeInUp}
              className="bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sis-blue to-sis-navy flex items-center justify-center flex-shrink-0">
                  <Award size={22} className="text-sis-white" />
                </div>
                <div>
                  <span className="text-sis-gold text-xs font-medium uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-sis-white mt-1 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sis-gray-400 text-sm leading-relaxed">
                    {cert.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Professional Roles */}
        <SectionHeading title="Other Professional Roles" />

        <FadeInView>
          <div className="bg-gradient-to-br from-sis-navy to-sis-navy-mid rounded-3xl p-8 lg:p-12 mb-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sis-blue to-sis-navy flex items-center justify-center flex-shrink-0">
                <Briefcase size={26} className="text-sis-white" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-sis-white mt-2">
                  Industry Contributions & Affiliations
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {OTHER_ROLES.map((role) => (
                <div
                  key={role}
                  className="flex items-start gap-3 text-sis-gray-400 text-sm"
                >
                  <BadgeCheck
                    size={16}
                    className="text-sis-blue-light flex-shrink-0 mt-0.5"
                  />
                  {role}
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Associate Profile */}
        <SectionHeading title="Our Associate" />

        <FadeInView>
          <div className="bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sis-gold to-sis-gold-dim flex items-center justify-center flex-shrink-0">
                <Users size={26} className="text-[#0f172a]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-sis-white">
                  {ASSOCIATE.name}
                </h3>
                <p className="text-sis-gold text-sm uppercase tracking-wider mt-1">
                  {ASSOCIATE.title}
                </p>
                <p className="text-sis-blue-light text-sm mt-1">
                  {ASSOCIATE.qualifications} &bull; {ASSOCIATE.education}
                </p>
                <p className="text-sis-gray-400 text-sm mt-1">
                  {ASSOCIATE.experience}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              {ASSOCIATE.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 text-sis-gray-400 text-sm"
                >
                  <BadgeCheck
                    size={16}
                    className="text-sis-gold flex-shrink-0 mt-0.5"
                  />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </main>
  );
}
