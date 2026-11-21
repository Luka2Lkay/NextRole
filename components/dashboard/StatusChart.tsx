
import { Application, ApplicationStatus } from "@/lib/data/applications"

interface Props {
    applications: Application[]
}

const statuses: ApplicationStatus[] = [
    "SAVED",
    "APPLIED",
    "INTERVIEW",
    "OFFER",
    "REJECTED",
]

const statusStyles: Record<ApplicationStatus, string> = {
    SAVED: "bg-stone-400",
    APPLIED: "bg-green-700",
    INTERVIEW: "bg-amber-500",
    OFFER: "bg-lime-500",
    REJECTED: "bg-red-400",
}

function StatusChart({ applications }: Props) {
    const total = applications.length

    return (
        <div className="rounded-xl border border-green-900/10 bg-stone-50 p-5 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-green-950">
                    Application Status
                </h2>

                <p className="text-sm text-stone-500">
                    Breakdown of your current applications
                </p>
            </div>

            <div className="space-y-5">
                {statuses.map((status) => {
                    const count = applications.filter(
                        (application) => application.status === status
                    ).length

                    const percentage = total > 0
                        ? (count / total) * 100
                        : 0

                    return (
                        <div key={status}>
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="font-medium text-green-950">
                                    {status}
                                </span>

                                <span className="font-semibold text-stone-600">
                                    {count}
                                    <span className="ml-2 text-stone-400">
                                        {percentage.toFixed(0)}%
                                    </span>
                                </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${statusStyles[status]}`}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StatusChart
