
import Link from "next/link"
import { Application } from "@/lib/data/applications"

interface Props {
    applications: Application[]
}

function RecentApplications({ applications }: Props) {
    const recentApplications = applications.slice(0, 5)

    return (
        <div className="rounded-xl border border-green-900/10 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-green-900/10 p-5">
                <div>
                    <h2 className="text-lg font-semibold text-green-950">
                        Recent Applications
                    </h2>
                    <p className="text-sm text-stone-500">
                        Your latest job applications.
                    </p>
                </div>

                <Link
                    href="/dashboard/applications"
                    className="text-sm font-medium text-green-800 transition-colors hover:text-green-950 hover:underline"
                >
                    View All
                </Link>
            </div>

            {/* Applications */}
            <div className="divide-y divide-stone-100">
                {recentApplications.map((recentApplication) => (
                    <Link
                        key={recentApplication.id}
                        href={`/dashboard/applications/${recentApplication.id}`}
                        className="flex items-center justify-between gap-3 p-5 transition-colors hover:bg-stone-50"
                    >
                        {/* Company initial */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 font-bold text-green-800">
                            <span>
                                {recentApplication.company.charAt(0)}
                            </span>
                        </div>

                        {/* Company and position */}
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-green-950">
                                {recentApplication.company}
                            </p>
                            <p className="truncate text-sm text-stone-500">
                                {recentApplication.position}
                            </p>
                        </div>

                        {/* Application status */}
                        <span
                            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${recentApplication.status === "APPLIED"
                                    ? "bg-blue-50 text-blue-700"
                                    : recentApplication.status === "INTERVIEW"
                                        ? "bg-amber-50 text-amber-700"
                                        : recentApplication.status === "OFFER"
                                            ? "bg-green-100 text-green-800"
                                            : recentApplication.status === "SAVED"
                                                ? "bg-stone-100 text-stone-600"
                                                : "bg-red-50 text-red-600"
                                }`}
                        >
                            {recentApplication.status}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Empty state */}
            {recentApplications.length === 0 && (
                <div className="p-8 text-center">
                    <p className="text-sm font-medium text-green-950">
                        No applications yet
                    </p>
                    <p className="mt-1 text-sm text-stone-500">
                        Start tracking your job search by adding your first application.
                    </p>
                </div>
            )}
        </div>
    )
}

export default RecentApplications
