
import Link from "next/link";
import { applications } from "@/lib/data/applications";
import { Plus, MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

const statusStyles: Record<string, string> = {
    SAVED: "bg-stone-100 text-stone-700",
    APPLIED: "bg-blue-50 text-blue-700",
    INTERVIEW: "bg-amber-50 text-amber-700",
    OFFER: "bg-green-100 text-green-800",
    REJECTED: "bg-red-50 text-red-700",
};

function ApplicationsPage() {
    return (
        <main className="min-w-0 space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-green-950 sm:text-3xl">
                        Applications
                    </h1>
                    <p className="mt-1 text-sm text-stone-600 sm:text-base">
                        Manage and track your job applications.
                    </p>
                </div>

                <Link
                    href="/dashboard/applications/new"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-900 sm:w-auto"
                >
                    <Plus size={18} />
                    Add Application
                </Link>
            </div>

            <div>
                <p className="text-sm text-stone-600">
                    Showing{" "}
                    <span className="font-semibold text-green-950">
                        {applications.length}
                    </span>{" "}
                    applications
                </p>
            </div>

            <div className="space-y-3 md:hidden">
                {applications.map((application) => (
                    <Link
                        key={application.id}
                        href={`/dashboard/applications/${application.id}`}
                        className="block rounded-xl border border-stone-200 bg-white p-4 transition hover:border-green-800/30 hover:shadow-sm"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <h2 className="truncate font-semibold text-green-950">
                                    {application.company}
                                </h2>
                                <p className="mt-1 text-sm text-stone-600">
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

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-stone-100 pt-3 text-xs text-stone-500">
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

            <div className="hidden overflow-hidden rounded-xl border border-stone-200 bg-white md:block">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-sm">
                        <thead className="border-b border-stone-200 bg-stone-50">
                            <tr>
                                <th className="px-5 py-4 text-left font-semibold text-green-950">
                                    Company
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-green-950">
                                    Position
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-green-950">
                                    Location
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-green-950">
                                    Status
                                </th>
                                <th className="px-5 py-4 text-left font-semibold text-green-950">
                                    Applied
                                </th>
                                <th className="px-5 py-4 text-right font-semibold text-green-950">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-stone-100">
                            {applications.map((application) => (
                                <tr
                                    key={application.id}
                                    className="transition hover:bg-stone-50"
                                >
                                    <td className="px-5 py-4 font-semibold text-green-950">
                                        {application.company}
                                    </td>

                                    <td className="px-5 py-4 text-stone-600">
                                        {application.position}
                                    </td>

                                    <td className="px-5 py-4 text-stone-600">
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

                                    <td className="px-5 py-4 text-stone-600">
                                        {application.appliedAt || "Not applied"}
                                    </td>

                                    <td className="px-5 py-4 text-right">
                                        <Link
                                            href={`/dashboard/applications/${application.id}`}
                                            aria-label={`View ${application.company} application`}
                                            className="inline-flex items-center gap-1 font-medium text-green-800 transition hover:text-green-950"
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

            {applications.length === 0 && (
                <div className="rounded-xl border border-dashed border-stone-300 bg-white px-4 py-12 text-center">
                    <h2 className="font-semibold text-green-950">
                        No applications yet
                    </h2>
                    <p className="mt-2 text-sm text-stone-600">
                        Start tracking your job search by adding your first application.
                    </p>
                    <Link
                        href="/dashboard/applications/new"
                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-900"
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
