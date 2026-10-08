import { applications } from "@/lib/data/applications"

function AnalyticsPage() {

    const statuses = [
        "SAVED",
        "APPLIED",
        "INTERVIEW",
        "OFFER",
        "REJECTED",
    ]

    return (
        <main className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
                <p className="mt-2 text-slate-500">Understand your job search activity.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {statuses.map((status) => {
                    const count = applications.filter((application) => application.status === status).length;

                    return (

                        // Add Navbar
                        <div key={status} className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                            <p className="text-sm text-gray-500">{status}</p>
                            <p className={`mt-2 text-3xl font-bold ${status === "APPLIED" ?
                                "bg-blue-50 text-blue-700" : status === "INTERVIEW" ?
                                    "bg-amber-50 text-amber-700" : status === "OFFER" ?
                                        "bg-emerald-50 text-emerald-700" : status === "SAVED" ?
                                            "bg-slate-100 text-slate-600" : "bg-red-50 text-red-600"
                                }`}>{count}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default AnalyticsPage