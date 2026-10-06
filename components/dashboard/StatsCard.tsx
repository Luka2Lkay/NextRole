
interface Props {
    total: number;
    applied: number;
    interviews: number;
    offers: number
}

function StatsCard({ total, applied, interviews, offers }: Props) {

    const stats = [
        {
            label: "Total Applications",
            value: total,
            color: "text-slate-900"
        },
        {
            label: "Applied",
            value: applied,
            color: "text-blue-600"
        },
        {
            label: "Interviews",
            value: interviews,
            color: "text-amber-600"
        },
        {
            label: "Offers",
            value: offers,
            color: "text-emerald-600"
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                    <p className="text-xs text-slate-500">
                        {stat.label}
                    </p>

                    <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default StatsCard