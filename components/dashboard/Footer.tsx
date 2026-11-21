
import Link from "next/link"

const footerLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Applications", href: "/dashboard/applications" },
    { label: "Analytics", href: "/dashboard/analytics" },
    { label: "Settings", href: "/dashboard/settings" },
]

function Footer() {
    return (
        <footer className="mt-auto border-t border-green-900/10 bg-stone-100">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-green-950">
                        Next<span className="text-green-700">Role</span> &copy;{" "}
                        {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>

                <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-medium text-stone-600 transition-colors hover:text-green-800"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <p className="text-center text-xs text-stone-500 sm:text-right">
                    Your next opportunity starts here.
                </p>
            </div>
        </footer>
    )
}

export default Footer
