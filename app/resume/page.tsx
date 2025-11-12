import ResumeTimeline from "@/components/ResumeTimeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Tinashe Makamure",
  description: "Professional experience and education timeline of Tinashe Makamure",
};

export default function ResumePage() {
  return <ResumeTimeline />;
}
