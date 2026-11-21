
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
    SAVED: "bg-stone-100 text-stone-700",
    APPLIED: "bg-blue-50 text-blue-700",
    INTERVIEW: "bg-amber-50 text-amber-700",
    OFFER: "bg-green-100 text-green-800",
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
                <div className="w-full max-w-md rounded-xl border border-green-900/10 bg-white p-6 text-center sm:p-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
                        <BriefcaseBusiness className="text-stone-500" size={22} />
                    </div>

                    <h1 className="mt-4 text-xl font-bold text-green-950">
                        Application not found
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-stone-600">
                        {"The application you're looking for doesn't exist or may have been removed."}
                    </p>

                    <Link
                        href="/dashboard/applications"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-green-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-900"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-green-950"
            >
                <ArrowLeft size={17} />
                Back to applications
            </Link>

            <div className="mx-auto w-full max-w-4xl">
                {/* Application heading */}
                <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-green-700">
                            {application.company}
                        </p>

                        <h1 className="mt-1 break-words text-2xl font-bold tracking-tight text-green-950 sm:text-3xl">
                            {application.position}
                        </h1>

                        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-stone-500">
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
                <div className="rounded-xl border border-green-900/10 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                    <h2 className="mb-6 text-lg font-semibold text-green-950">
                        Application details
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                        {/* Company */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-stone-500">
                                <BriefcaseBusiness size={16} />
                                Company
                            </div>
                            <p className="mt-2 break-words font-medium text-green-950">
                                {application.company}
                            </p>
                        </div>

                        {/* Position */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-stone-500">
                                <BriefcaseBusiness size={16} />
                                Position
                            </div>
                            <p className="mt-2 break-words font-medium text-green-950">
                                {application.position}
                            </p>
                        </div>

                        {/* Location */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-stone-500">
                                <MapPin size={16} />
                                Location
                            </div>
                            <p className="mt-2 break-words font-medium text-green-950">
                                {application.location || "Not specified"}
                            </p>
                        </div>

                        {/* Salary */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-stone-500">
                                <Banknote size={16} />
                                Salary
                            </div>
                            <p className="mt-2 font-medium text-green-950">
                                {application.salary || "Not specified"}
                            </p>
                        </div>

                        {/* Applied date */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-stone-500">
                                <CalendarDays size={16} />
                                Applied date
                            </div>
                            <p className="mt-2 font-medium text-green-950">
                                {application.appliedAt || "Not applied"}
                            </p>
                        </div>

                        {/* Job URL */}
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm text-stone-500">
                                <ExternalLink size={16} />
                                Job listing
                            </div>

                            {application.jobUrl ? (
                                <a
                                    href={application.jobUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex max-w-full items-center gap-1 break-all font-medium text-green-700 transition hover:text-green-900"
                                >
                                    View job listing
                                    <ExternalLink size={14} className="shrink-0" />
                                </a>
                            ) : (
                                <p className="mt-2 text-sm text-stone-500">
                                    No job URL provided
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="mt-8 border-t border-green-900/10 pt-6">
                        <div className="flex items-center gap-2 text-sm text-stone-500">
                            <FileText size={16} />
                            Notes
                        </div>

                        <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-stone-700">
                            {application.notes || "No notes added yet."}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ApplicationPage;
