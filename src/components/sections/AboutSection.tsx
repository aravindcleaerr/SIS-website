"use client";

import { COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About SIS" />

        <FadeInView>
          <p className="text-sis-gray-400 text-base sm:text-lg leading-relaxed text-center">
            {COMPANY.about}
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
