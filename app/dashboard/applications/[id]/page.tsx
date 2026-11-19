
import { applications } from "@/lib/data/applications";
import {
    ArrowLeft,
    MapPin,
    BriefcaseBusiness,
    Banknote,
    CalendarDays,
    ExternalLink,
    FileText,
} from "lucide-react";
import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>;
}

const statusStyles: Record<string, string> = {
    SAVED: "bg-slate-100 text-slate-700",
    APPLIED: "bg-blue-50 text-blue-700",
    INTERVIEW: "bg-amber-50 text-amber-700",
    OFFER: "bg-emerald-50 text-emerald-700",
    REJECTED: "bg-red-50 text-red-700",
};

async function ApplicationPage({ params }: Props) {
    const { id } = await params;

    const application = applications.find(
        (application) => application.id === id
    );

    if (!application) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center p-4 sm:p-6">
                <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 text-center sm:p-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                        <BriefcaseBusiness className="text-slate-500" size={22} />
                    </div>

                    <h1 className="mt-4 text-xl font-bold text-slate-900">
                        Application not found
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        The application you're looking for doesn't exist or may have
                        been removed.
                    </p>

                    <Link
                        href="/dashboard/applications"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                        <ArrowLeft size={17} />
                        Back to applications
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-w-0 space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
            {/* Back navigation */}
            <Link
                href="/dashboard/applications"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
                <ArrowLeft size={17} />
                Back to applications
            </Link>

            <div className="mx-auto w-full max-w-4xl">
                {/* Application heading */}
                <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                        <p className="text-sm font-medium text-indigo-600">
                            {application.company}
                        </p>

                        <h1 className="mt-1 break-words text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            {application.position}
                        </h1>

                        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <MapPin size={15} />
                                {application.location || "Location not specified"}
                            </span>
                        </div>
                    </div>

                    <span
                        className={`w-fit shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[application.status] || statusStyles.SAVED
                            }`}
                    >
                        {application.status}
                    </span>
                </div>

                {/* Application details */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                    <h2 className="mb-6 text-lg font-semibold text-slate-900">
                        Application details
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                        {/* Company */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <BriefcaseBusiness size={16} />
                                Company
                            </div>
                            <p className="mt-2 break-words font-medium text-slate-900">
                                {application.company}
                            </p>
                        </div>

                        {/* Position */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <BriefcaseBusiness size={16} />
                                Position
                            </div>
                            <p className="mt-2 break-words font-medium text-slate-900">
                                {application.position}
                            </p>
                        </div>

                        {/* Location */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <MapPin size={16} />
                                Location
                            </div>
                            <p className="mt-2 break-words font-medium text-slate-900">
                                {application.location || "Not specified"}
                            </p>
                        </div>

                        {/* Salary */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <Banknote size={16} />
                                Salary
                            </div>
                            <p className="mt-2 font-medium text-slate-900">
                                {application.salary || "Not specified"}
                            </p>
                        </div>

                        {/* Applied date */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <CalendarDays size={16} />
                                Applied date
                            </div>
                            <p className="mt-2 font-medium text-slate-900">
                                {application.appliedAt || "Not applied"}
                            </p>
                        </div>

                        {/* Job URL */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <ExternalLink size={16} />
                                Job listing
                            </div>

                            {application.jobUrl ? (
                                <a
                                    href={application.jobUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex max-w-full items-center gap-1 break-all font-medium text-indigo-600 hover:text-indigo-700"
                                >
                                    View job listing
                                    <ExternalLink size={14} className="shrink-0" />
                                </a>
                            ) : (
                                <p className="mt-2 text-sm text-slate-500">
                                    No job URL provided
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="mt-8 border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <FileText size={16} />
                            Notes
                        </div>

                        <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-slate-700">
                            {application.notes || "No notes added yet."}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ApplicationPage;
