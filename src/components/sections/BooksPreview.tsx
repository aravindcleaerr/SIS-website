"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BOOKS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function BooksPreview() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-sis-black to-sis-navy/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Published Books"
          subtitle="Authored 4 books on personal development, entrepreneurship, and productivity"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BOOKS.map((book) => (
            <motion.div
              key={book.title}
              variants={fadeInUp}
              className="group bg-sis-navy-light/50 border border-sis-navy-mid/50 rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-sis-navy-mid/30">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={200}
                  height={280}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-lg text-sis-white mb-1 leading-tight">
                {book.title}
              </h3>
              <p className="text-sis-gold text-xs uppercase tracking-wider mb-3">
                {book.subtitle}
              </p>

              <p className="text-sis-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                {book.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-sis-navy-mid/30">
                <span className="text-sis-gray-600 text-xs">
                  {book.language} {book.year && `• ${book.year}`}
                </span>
                {book.amazonUrl && (
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sis-blue-light hover:text-sis-gold text-xs flex items-center gap-1 transition-colors"
                  >
                    Buy <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <GlowButton href="/books">
            View All Books
            <ExternalLink size={14} />
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
