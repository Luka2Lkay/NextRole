
import { applications } from "@/lib/data/applications";
import {
    Bookmark,
    Send,
    CalendarCheck,
    Trophy,
    XCircle,
    BriefcaseBusiness,
    TrendingUp,
} from "lucide-react";

const statusConfig = {
    SAVED: {
        label: "Saved",
        icon: Bookmark,
        color: "bg-slate-100 text-slate-600",
    },
    APPLIED: {
        label: "Applied",
        icon: Send,
        color: "bg-blue-50 text-blue-700",
    },
    INTERVIEW: {
        label: "Interviews",
        icon: CalendarCheck,
        color: "bg-amber-50 text-amber-700",
    },
    OFFER: {
        label: "Offers",
        icon: Trophy,
        color: "bg-emerald-50 text-emerald-700",
    },
    REJECTED: {
        label: "Rejected",
        icon: XCircle,
        color: "bg-red-50 text-red-600",
    },
} as const;

function AnalyticsPage() {
    const totalApplications = applications.length;

    const statusStats = Object.entries(statusConfig).map(([status, config]) => {
        const count = applications.filter(
            (application) => application.status === status
        ).length;

        return {
            status,
            ...config,
            count,
        };
    });

    const offers = applications.filter(
        (application) => application.status === "OFFER"
    ).length;

    const interviews = applications.filter(
        (application) => application.status === "INTERVIEW"
    ).length;

    const offerRate = totalApplications
        ? Math.round((offers / totalApplications) * 100)
        : 0;

    return (
        <main className="min-w-0 space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
            {/* Page heading */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Analytics
                </h1>
                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                    Understand your job search activity and track your progress.
                </p>
            </div>

            {/* Overview cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-500">
                            Total Applications
                        </p>
                        <BriefcaseBusiness className="text-slate-400" size={20} />
                    </div>
                    <p className="mt-4 text-3xl font-bold text-slate-900">
                        {totalApplications}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        Applications tracked
                    </p>
                </div>

                <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-500">
                            Interviews
                        </p>
                        <CalendarCheck className="text-amber-500" size={20} />
                    </div>
                    <p className="mt-4 text-3xl font-bold text-slate-900">
                        {interviews}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        Interview opportunities
                    </p>
                </div>

                <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-500">
                            Offer Rate
                        </p>
                        <TrendingUp className="text-emerald-500" size={20} />
                    </div>
                    <p className="mt-4 text-3xl font-bold text-slate-900">
                        {offerRate}%
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        Offers relative to all tracked applications
                    </p>
                </div>
            </section>

            {/* Application status breakdown */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        Application Status
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Breakdown of your applications by status.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {statusStats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.status}
                                className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-sm font-medium text-slate-500">
                                        {stat.label}
                                    </p>
                                    <div className={`rounded-lg p-2 ${stat.color}`}>
                                        <Icon size={18} />
                                    </div>
                                </div>

                                <p className="mt-4 text-2xl font-bold text-slate-900">
                                    {stat.count}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    {totalApplications
                                        ? Math.round((stat.count / totalApplications) * 100)
                                        : 0}
                                    % of total applications
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}

export default AnalyticsPage;
