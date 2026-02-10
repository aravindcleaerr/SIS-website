import type { Metadata } from "next";
import { TrainingContent } from "./TrainingContent";

export const metadata: Metadata = {
  title: "Training Modules",
  description:
    "55+ corporate training modules by Saraswati Industrial Services covering Purchase & Supply Chain, Quality, Management & Soft Skills, Engineering, and Engineering College Programs.",
};

export default function TrainingPage() {
  return <TrainingContent />;
}
