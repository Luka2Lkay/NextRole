import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
