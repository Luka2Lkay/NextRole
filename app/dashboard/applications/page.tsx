
import Link from "next/link";
import { applications } from "@/lib/data/applications";
import { Plus, MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

const statusStyles: Record<string, string> = {
    SAVED: "bg-slate-100 text-slate-700",
    APPLIED: "bg-blue-50 text-blue-700",
    INTERVIEW: "bg-amber-50 text-amber-700",
    OFFER: "bg-emerald-50 text-emerald-700",
    REJECTED: "bg-red-50 text-red-700",
};

function ApplicationsPage() {
    return (
        <main className="min-w-0 space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
            {/* Page heading */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Applications
                    </h1>
                    <p className="mt-1 text-sm text-slate-500 sm:text-base">
                        Manage and track your job applications.
                    </p>
                </div>

                <Link
                    href="/dashboard/applications/new"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
                >
                    <Plus size={18} />
                    Add Application
                </Link>
            </div>

            {/* Applications count */}
            <div>
                <p className="text-sm text-slate-500">
                    Showing <span className="font-semibold text-slate-900">{applications.length}</span>{" "}
                    applications
                </p>
            </div>

            {/* Mobile cards */}
            <div className="space-y-3 md:hidden">
                {applications.map((application) => (
                    <Link
                        key={application.id}
                        href={`/dashboard/applications/${application.id}`}
                        className="block rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <h2 className="truncate font-semibold text-slate-900">
                                    {application.company}
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    {application.position}
                                </p>
                            </div>

                            <span
                                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[application.status] || statusStyles.SAVED
                                    }`}
                            >
                                {application.status}
                            </span>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <MapPin size={14} />
                                {application.location || "Location not specified"}
                            </span>

                            <span className="flex items-center gap-1.5">
                                <CalendarDays size={14} />
                                {application.appliedAt || "Not applied"}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white md:block">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-sm">
                        <thead className="border-b border-slate-200 bg-slate-50">
                            <tr>
                                <th className="px-5 py-4 text-left font-semibold text-slate-600">
                                    Company
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-slate-600">
                                    Position
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-slate-600">
                                    Location
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-slate-600">
                                    Status
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-slate-600">
                                    Applied
                                </th>
                                <th className="px-5 py-4 text-right font-semibold text-slate-600">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {applications.map((application) => (
                                <tr
                                    key={application.id}
                                    className="transition hover:bg-slate-50"
                                >
                                    <td className="px-5 py-4 font-semibold text-slate-900">
                                        {application.company}
                                    </td>

                                    <td className="px-5 py-4 text-slate-600">
                                        {application.position}
                                    </td>

                                    <td className="px-5 py-4 text-slate-600">
                                        {application.location || "Not specified"}
                                    </td>

                                    <td className="px-5 py-4">
                                        <span
                                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[application.status] || statusStyles.SAVED
                                                }`}
                                        >
                                            {application.status}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4 text-slate-600">
                                        {application.appliedAt || "Not applied"}
                                    </td>

                                    <td className="px-5 py-4 text-right">
                                        <Link
                                            href={`/dashboard/applications/${application.id}`}
                                            aria-label={`View ${application.company} application`}
                                            className="inline-flex items-center gap-1 font-medium text-indigo-600 hover:text-indigo-700"
                                        >
                                            View
                                            <ArrowUpRight size={15} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Empty state */}
            {applications.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-300 px-4 py-12 text-center">
                    <h2 className="font-semibold text-slate-900">
                        No applications yet
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                        Start tracking your job search by adding your first application.
                    </p>
                    <Link
                        href="/dashboard/applications/new"
                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                        <Plus size={16} />
                        Add your first application
                    </Link>
                </div>
            )}
        </main>
    );
}

export default ApplicationsPage;
