
import Link from 'next/link'
import { BriefcaseBusiness } from 'lucide-react'

const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Sign In', href: '/sign-in' },
    { name: 'Sign Up', href: '/sign-up' },
]

function Footer() {
    return (
        <footer className="border-t border-green-900/10 bg-stone-100">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    {/* Brand and description */}
                    <div className="max-w-sm">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-lime-300">
                                <BriefcaseBusiness size={20} />
                            </div>

                            <span className="text-xl font-bold tracking-tight text-green-950">
                                Next<span className="text-green-700">Role</span>
                            </span>
                        </Link>

                        <p className="mt-4 text-sm leading-7 text-stone-600">
                            Job hunting is already stressful enough. Keep your
                            applications, interviews, and opportunities in one place
                            so you can focus on getting that next opportunity.
                            Organize your job search, track your applications,
                            and take the next step in your career.
                        </p>
                    </div>

                    {/* Navigation links */}
                    <div>
                        <h3 className="text-sm font-semibold text-green-950">
                            Explore
                        </h3>

                        <ul className="mt-4 space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-stone-600 transition-colors hover:text-green-800"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Closing message */}
                    <div className="max-w-xs">
                        <h3 className="text-sm font-semibold text-green-950">
                            One application at a time.
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-stone-600">
                            {"Whether you're looking for your first job, an internship, or your next big career move, NextRole is here to help you keep track of the journey."}
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-green-900/10 pt-6 text-center sm:flex-row sm:text-left">
                    <p className="text-sm text-stone-600">
                        © {new Date().getFullYear()} NextRole. All rights reserved.
                    </p>

                    <p className="text-sm text-stone-500">
                        Your next opportunity is worth keeping track of.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
