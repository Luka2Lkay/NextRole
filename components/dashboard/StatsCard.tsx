
import {
    BriefcaseBusiness,
    Send,
    CalendarCheck,
    Trophy,
} from "lucide-react";

interface Props {
    total: number;
    applied: number;
    interviews: number;
    offers: number;
}

function StatsCard({ total, applied, interviews, offers }: Props) {
    const stats = [
        {
            label: "Total Applications",
            value: total,
            icon: BriefcaseBusiness,
            color: "text-green-950",
            iconBg: "bg-green-100",
        },
        {
            label: "Applied",
            value: applied,
            icon: Send,
            color: "text-green-700",
            iconBg: "bg-green-50",
        },
        {
            label: "Interviews",
            value: interviews,
            icon: CalendarCheck,
            color: "text-amber-700",
            iconBg: "bg-amber-50",
        },
        {
            label: "Offers",
            value: offers,
            icon: Trophy,
            color: "text-lime-700",
            iconBg: "bg-lime-100",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.label}
                        className="min-w-0 rounded-xl border border-green-900/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                    >
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-xs font-medium text-stone-500 sm:text-sm">
                                {stat.label}
                            </p>

                            <div
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${stat.iconBg}`}
                            >
                                <Icon size={18} className={stat.color} />
                            </div>
                        </div>

                        <p className={`mt-3 text-2xl font-bold sm:text-3xl ${stat.color}`}>
                            {stat.value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default StatsCard;
