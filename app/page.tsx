import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Header />
      <Hero />
      // add another component
    </main>
  );
}
