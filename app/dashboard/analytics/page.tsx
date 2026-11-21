
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
        color: "bg-stone-100 text-stone-600",
    },
    APPLIED: {
        label: "Applied",
        icon: Send,
        color: "bg-green-100 text-green-800",
    },
    INTERVIEW: {
        label: "Interviews",
        icon: CalendarCheck,
        color: "bg-amber-100 text-amber-800",
    },
    OFFER: {
        label: "Offers",
        icon: Trophy,
        color: "bg-lime-100 text-lime-800",
    },
    REJECTED: {
        label: "Rejected",
        icon: XCircle,
        color: "bg-red-100 text-red-700",
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
        <main className="min-w-0 space-y-6 bg-stone-100 p-4 sm:space-y-8 sm:p-6 lg:p-8">

            <div>
                <h1 className="text-2xl font-bold tracking-tight text-green-950 sm:text-3xl">
                    Analytics
                </h1>
                <p className="mt-2 text-sm text-stone-600 sm:text-base">
                    Understand your job search activity and track your progress.
                </p>
            </div>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="min-w-0 rounded-xl border border-green-900/10 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-stone-600">
                            Total Applications
                        </p>
                        <BriefcaseBusiness className="text-green-700" size={20} />
                    </div>
                    <p className="mt-4 text-3xl font-bold text-green-950">
                        {totalApplications}
                    </p>
                    <p className="mt-1 text-xs text-stone-500">
                        Applications tracked
                    </p>
                </div>

                <div className="min-w-0 rounded-xl border border-green-900/10 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-stone-600">
                            Interviews
                        </p>
                        <CalendarCheck className="text-amber-600" size={20} />
                    </div>
                    <p className="mt-4 text-3xl font-bold text-green-950">
                        {interviews}
                    </p>
                    <p className="mt-1 text-xs text-stone-500">
                        Interview opportunities
                    </p>
                </div>

                <div className="min-w-0 rounded-xl border border-green-900/10 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-stone-600">
                            Offer Rate
                        </p>
                        <TrendingUp className="text-lime-700" size={20} />
                    </div>
                    <p className="mt-4 text-3xl font-bold text-green-950">
                        {offerRate}%
                    </p>
                    <p className="mt-1 text-xs text-stone-500">
                        Offers relative to all tracked applications
                    </p>
                </div>
            </section>

            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-semibold text-green-950">
                        Application Status
                    </h2>
                    <p className="mt-1 text-sm text-stone-600">
                        Breakdown of your applications by status.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {statusStats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.status}
                                className="min-w-0 rounded-xl border border-green-900/10 bg-white p-4 shadow-sm sm:p-5"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-sm font-medium text-stone-600">
                                        {stat.label}
                                    </p>
                                    <div className={`rounded-lg p-2 ${stat.color}`}>
                                        <Icon size={18} />
                                    </div>
                                </div>

                                <p className="mt-4 text-2xl font-bold text-green-950">
                                    {stat.count}
                                </p>

                                <p className="mt-1 text-xs text-stone-500">
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
