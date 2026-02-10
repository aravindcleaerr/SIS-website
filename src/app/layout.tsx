import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: {
    default: "Saraswati Industrial Services | Corporate Training & Consulting - Bengaluru",
    template: "%s | Saraswati Industrial Services",
  },
  description:
    "Saraswati Industrial Services provides expert corporate training, mentoring, and consulting for manufacturing industries. Founded by P.S. Satish with 39+ years of experience including 23+ years at Robert Bosch.",
  keywords: [
    "corporate training bangalore",
    "manufacturing consulting india",
    "supplier development training",
    "quality training",
    "purchase training",
    "Saraswati Industrial Services",
    "PS Satish",
    "management consulting",
    "mentoring manufacturing",
  ],
  openGraph: {
    title: "Saraswati Industrial Services | Corporate Training & Consulting",
    description:
      "Expert corporate training, mentoring and consulting with 39+ years of manufacturing experience",
    siteName: "Saraswati Industrial Services",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-sis-black text-sis-white`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
