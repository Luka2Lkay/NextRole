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
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="max-w-sm">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                <BriefcaseBusiness size={20} />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">
                                Next<span className="text-indigo-600">Role</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm leading-7 text-slate-500">
                            Job hunting is already stressful enough. Keep your
                            applications, interviews, and opportunities in one place
                            so you can focus on getting that next opportunity. Organize your job search, track your applications,
                            and take the next step in your career.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Explore
                        </h3>

                        <ul className="mt-4 space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-500 transition hover:text-indigo-600">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="text-sm font-semibold text-slate-900">One application at a time.</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-500">
                            Whether you're looking for your first job, an internship,
                            or your next big career move, NextRole is here to help
                            you keep track of the journey.
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-center sm:flex-row sm:text-left">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} NextRole. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-400">
                        Your next opportunity is worth keeping track of.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer