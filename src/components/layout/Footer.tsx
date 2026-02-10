import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-sis-black border-t border-sis-navy-mid/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <Logo size="sm" className="mb-4" />
            <p className="text-sis-gray-400 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sis-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", href: "/#services" },
                { label: "Founder", href: "/founder" },
                { label: "Training Modules", href: "/training" },
                { label: "Books", href: "/books" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sis-gray-400 hover:text-sis-gold text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sis-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sis-gray-400 hover:text-sis-gold text-sm transition-colors"
              >
                <Phone size={14} />
                {SITE_CONFIG.phone1}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sis-gray-400 hover:text-sis-gold text-sm transition-colors"
              >
                <Mail size={14} />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`https://linkedin.com/in/${SITE_CONFIG.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sis-gray-400 hover:text-sis-gold text-sm transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn Profile
              </a>
              <span className="flex items-center gap-2 text-sis-gray-400 text-sm">
                <MapPin size={14} />
                {SITE_CONFIG.location}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-sis-navy-mid/30 mt-8 pt-8 text-center">
          <p className="text-sis-gray-600 text-xs">
            &copy; {SITE_CONFIG.founded}&ndash;{new Date().getFullYear()}{" "}
            {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
