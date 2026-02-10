import type { Metadata } from "next";
import { FounderContent } from "./FounderContent";

export const metadata: Metadata = {
  title: "Founder – P.S. Satish",
  description:
    "Meet the founder of Saraswati Industrial Services – P.S. Satish, with 39+ years of expertise in manufacturing industries, including 23+ years at Robert Bosch Group.",
};

export default function FounderPage() {
  return <FounderContent />;
}
