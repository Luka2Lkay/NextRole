"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import {
    BriefcaseBusiness,
    LayoutDashboard,
    ChartNoAxesCombined,
    LogOut,
    Menu,
    X,
} from "lucide-react";

const navLinks = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Applications",
        href: "/dashboard/applications",
        icon: BriefcaseBusiness,
    },
    {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: ChartNoAxesCombined,
    },
];

function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/dashboard") {
            return pathname === href;
        }

        return pathname.startsWith(href);
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-green-900/10 bg-stone-100">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2"
                    onClick={closeMenu}
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-950 text-lime-300">
                        <BriefcaseBusiness size={20} />
                    </div>

                    <span className="text-xl font-bold tracking-tight text-green-950">
                        Next<span className="text-green-700">Role</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${active
                                    ? "bg-green-950 text-lime-300"
                                    : "text-stone-600 hover:bg-green-900/5 hover:text-green-950"
                                    }`}
                            >
                                <Icon size={18} />
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden items-center gap-4 md:flex">
                    <UserButton />

                    <SignOutButton redirectUrl="/">
                        <button
                            type="button"
                            title="Sign out"
                            className="rounded-lg p-2 text-stone-500 transition-colors hover:bg-red-50 hover:text-red-600"
                        >
                            <LogOut size={20} />
                        </button>
                    </SignOutButton>
                </div>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg p-2 text-green-950 transition-colors hover:bg-green-900/5 md:hidden"
                    aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {isMenuOpen && (
                <div className="border-t border-green-900/10 bg-stone-100 px-4 py-4 md:hidden">
                    <div className="space-y-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${active
                                        ? "bg-green-950 text-lime-300"
                                        : "text-stone-600 hover:bg-green-900/5 hover:text-green-950"
                                        }`}
                                >
                                    <Icon size={20} />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-green-900/10 pt-4">
                        <div className="flex items-center gap-3">
                            <UserButton />
                            <span className="text-sm font-medium text-green-950">
                                Your account
                            </span>
                        </div>

                        <SignOutButton redirectUrl="/">
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                            >
                                <LogOut size={17} />
                                Sign out
                            </button>
                        </SignOutButton>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
