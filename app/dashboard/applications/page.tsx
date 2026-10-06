import Link from "next/link"
import { applications } from "@/lib/data/applications"

function ApplicationsPage() {
    return (
        <main className="p-6">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Applications</h1>
                    <p className="mt-2 text-gray-500">Manage your job applications.</p>
                </div>
                <Link href="/dashboard/applications/new" className="rounded-lg bg-slate-900 px-4 py-2 text-white">
                    Add Application
                </Link>
            </div>

            <div className="overflow-hidden rounded-xl border">
                <table className="w-full">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="p-4 text-left">Company</th>
                            <th className="p-4 text-left">Position</th>
                            <th className="p-4 text-left">Location</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Applied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application) => (
                            <tr key={application.id} className="border-b last:border-b-0 hover:bg-gray-50">
                                <td className="p-4 font-medium"><Link href={`/dashboard/applications/${application.id}`}>{application.company}</Link></td>
                                <td className="p-4"><Link href={`/dashboard/applications/${application.id}`}>{application.position}</Link></td>
                                <td className="p-4"><Link href={`/dashboard/applications/${application.id}`}>{application.location}</Link></td>
                                <td className="p-4"><Link href={`/dashboard/applications/${application.id}`}>{application.status}</Link></td>
                                <td className="p-4"><Link href={`/dashboard/applications/${application.id}`}>{application.appliedAt || "Not applied"}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ApplicationsPage