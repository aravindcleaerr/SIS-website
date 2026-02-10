"use client";

import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/ui/FadeInView";
import { GlowButton } from "@/components/ui/GlowButton";

const contacts = [
  {
    icon: Phone,
    label: SITE_CONFIG.phone1,
    href: `tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`,
  },
  {
    icon: Phone,
    label: SITE_CONFIG.phone2,
    href: `tel:${SITE_CONFIG.phone2.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    href: `https://linkedin.com/in/${SITE_CONFIG.linkedin}`,
  },
  {
    icon: MapPin,
    label: SITE_CONFIG.fullAddress,
    href: undefined,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-sis-black to-sis-navy"
    >
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading title="Let&apos;s Connect" />

        <FadeInView>
          <p className="text-sis-gray-400 text-base sm:text-lg font-light tracking-wide mb-10">
            Ready to elevate your team&apos;s capabilities? Let&apos;s discuss how
            SIS&apos;s 39+ years of manufacturing expertise can benefit your organization.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="flex flex-col gap-4 items-center mb-10">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const Wrapper = contact.href ? "a" : "span";
              return (
                <Wrapper
                  key={contact.label}
                  {...(contact.href
                    ? {
                        href: contact.href,
                        target: contact.href.startsWith("http")
                          ? "_blank"
                          : undefined,
                        rel: contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined,
                      }
                    : {})}
                  className="flex items-center gap-3 text-sis-gray-400 hover:text-sis-gold transition-colors"
                >
                  <Icon size={18} className="text-sis-gold flex-shrink-0" />
                  <span className="text-sm text-left">{contact.label}</span>
                </Wrapper>
              );
            })}
          </div>
        </FadeInView>

        <FadeInView delay={0.4}>
          <GlowButton href={`mailto:${SITE_CONFIG.email}`}>
            Send an Email
          </GlowButton>
        </FadeInView>
      </div>
    </section>
  );
}
