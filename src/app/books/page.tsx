import type { Metadata } from "next";
import { BooksContent } from "./BooksContent";

export const metadata: Metadata = {
  title: "Published Books",
  description:
    "Books authored by P.S. Satish – Knowing Is Not Same as Doing, Sanjeevana, The Great Entrepreneur Blueprint, and Lose Your Old Scissors.",
};

export default function BooksPage() {
  return <BooksContent />;
}
