import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <header className="border-b border-slate-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <BriefcaseBusiness size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Next<span className="text-indigo-600">Role</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-indigo-600">Features</a>
            <a href="#fabout" className="transition hover:text-indigo-600">About</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="sign-in" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:px-4">Sign in</Link>
            <Link href="sign-up" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:px-4">Sign up</Link>
          </div>
        </nav>
      </header>
    </main>
  );
}
