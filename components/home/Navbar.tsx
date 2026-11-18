"use client"

import Link from 'next/link'
import { BriefcaseBusiness } from 'lucide-react'
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
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
          <a href="#home" className="transition hover:text-indigo-600">Home</a>
          <a href="#features" className="transition hover:text-indigo-600">Features</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="sign-in" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:px-4">Sign in</Link>
          <Link href="sign-up" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:px-4">Sign up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar