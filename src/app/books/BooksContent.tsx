"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";
import { BOOKS, SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function BooksContent() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Published Books"
          subtitle="Four books on personal development, entrepreneurship, and productivity authored by P.S. Satish"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {BOOKS.map((book, index) => (
            <motion.div
              key={book.title}
              variants={fadeInUp}
              className="group bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-2xl p-6 sm:p-8 hover:border-sis-gold/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Book cover */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-40 rounded-lg overflow-hidden bg-sis-navy-mid/30">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={112}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Book details */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-sis-white leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-sis-gold text-sm uppercase tracking-wider mt-1">
                        {book.subtitle}
                      </p>
                    </div>
                    <span className="text-sis-gray-600 text-xs bg-sis-navy-mid/30 px-3 py-1 rounded-full">
                      {book.language} {book.year && `• ${book.year}`}
                    </span>
                  </div>

                  <p className="text-sis-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {book.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-sis-gray-600">{book.publisher}</span>
                    {book.amazonUrl && (
                      <a
                        href={book.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sis-blue-light hover:text-sis-gold transition-colors"
                      >
                        Buy on Amazon <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Signed copies CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-br from-sis-navy to-sis-navy-mid rounded-3xl p-8 sm:p-12"
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-sis-white mb-4">
            Get Signed Copies
          </h3>
          <p className="text-sis-gray-400 text-base mb-6 max-w-lg mx-auto">
            Want a personally signed copy with online discussion and clarifications from the author?
            Contact directly via WhatsApp.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Mr.%20Satish%2C%20I%20am%20interested%20in%20your%20books.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sis-gold text-[#0f172a] font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
          >
            <MessageCircle size={16} />
            WhatsApp for Signed Copies
          </a>
        </motion.div>
      </div>
    </main>
  );
}
