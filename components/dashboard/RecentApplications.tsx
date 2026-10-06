import Link from "next/link"
import { Application } from "@/lib/data/applications"

interface Props {
    applications: Application[]
}

function RecentApplications({ applications }: Props) {

    const recentApplications = applications.slice(0, 5)

    return (
        <div className="rounded-xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b p-5">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
                    <p className="text-sm text-gray-500">Your latest job applications.</p>
                </div>

                <Link href="dashboard/applications" className="text-sm font-medium text-indigo-600 hover:underline">
                    View All
                </Link>
            </div>

            <div className="divide-y">
                {recentApplications.map((recentApplication) => (
                    <Link key={recentApplication.id} href={`/dashboard/applications/${recentApplication.id}`} className="flex items-center gap-3 justify-between p-5 transition hover:bg-gray-50">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 font-bold text-indigo-600">
                            <p>{recentApplication.company.charAt(0)}</p>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-medium font-semibold">{recentApplication.company}</p>
                            <p className="truncate text-sm text-slate-500">{recentApplication.position}</p>
                        </div>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${recentApplication.status === "APPLIED" ?
                            "bg-blue-50 text-blue-700" : recentApplication.status === "INTERVIEW" ?
                                "bg-amber-50 text-amber-700" : recentApplication.status === "OFFER" ?
                                    "bg-emerald-50 text-emerald-700" : recentApplication.status === "SAVED" ?
                                        "bg-slate-100 text-slate-600" : "bg-red-50 text-red-600"
                            }`}>{recentApplication.status}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RecentApplications