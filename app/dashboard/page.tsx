
import StatsCard from "@/components/dashboard/StatsCard";
import StatusChart from "@/components/dashboard/StatusChart";
import RecentApplications from "@/components/dashboard/RecentApplications";
import { applications } from "@/lib/data/applications";

function DashboardPage() {
    const total = applications.length;

    const applied = applications.filter(
        (application) => application.status === "APPLIED"
    ).length;

    const interviews = applications.filter(
        (application) => application.status === "INTERVIEW"
    ).length;

    const offers = applications.filter(
        (application) => application.status === "OFFER"
    ).length;

    return (
        <main className="w-full min-w-0 space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">

            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Dashboard
                </h1>

                <p className="text-sm text-gray-500 sm:text-base">
                    Track and manage your job applications
                </p>
            </div>

            <section>
                <StatsCard
                    offers={offers}
                    applied={applied}
                    interviews={interviews}
                    total={total}
                />
            </section>

            <section className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="min-w-0">
                    <StatusChart applications={applications} />
                </div>

                <div className="min-w-0">
                    <RecentApplications applications={applications} />
                </div>
            </section>
        </main>
    );
}

export default DashboardPage;
