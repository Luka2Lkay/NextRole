import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Header />
      <Hero />
      <Features />
      // add another component
    </main>
  );
}
