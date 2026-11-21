
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMenuOpen(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-green-900/10 bg-stone-100/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-950 text-lime-300 transition-transform duration-300 group-hover:-rotate-6">
              <BriefcaseBusiness size={20} />
            </div>

            <span className="text-xl font-bold tracking-tight text-green-950">
              Next<span className="text-green-700">Role</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-9 text-sm font-semibold text-stone-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 transition-colors duration-200 hover:text-green-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop authentication */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/sign-in"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-950/5"
            >
              Sign in
            </Link>

            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-2 rounded-lg bg-green-950 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-green-900"
            >
              Get Started
              <ArrowUpRight
                size={16}
                className="text-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-green-950 transition hover:bg-green-950/10 md:hidden"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-green-900/10 py-5 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-stone-600 transition hover:bg-green-950/5 hover:text-green-950"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-green-900/10 pt-4">
              <Link
                href="/sign-in"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-green-950 transition hover:bg-green-950/5"
              >
                Sign in
              </Link>

              <Link
                href="/sign-up"
                onClick={closeMenu}
                className="group flex items-center justify-center gap-2 rounded-lg bg-green-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
              >
                Get Started
                <ArrowUpRight size={16} className="text-lime-300" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
