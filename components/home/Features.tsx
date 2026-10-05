import { ClipboardList, ChartNoAxesCombined, Target } from "lucide-react"

const features = [
    {
        icon: ClipboardList,
        title: "Track every application",
        description:
            "Keep your job applications, company details, deadlines, and notes organized in one place.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Visualize your progress",
        description:
            "Get a clear overview of your applications, interviews, offers, and job search activity.",
    },
    {
        icon: Target,
        title: "Stay focused on your goals",
        description:
            "Manage your job search with a structured workflow and keep track of every opportunity.",
    },
];

function Features() {
    return (
        <section id="features" className="bg-slate-50 px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                        Everything in one place
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Make your job search more manageable
                    </h2>
                    <p className="mt-4 leading-7 text-slate-600">
                        Spend less time organizing spreadsheets and scattered notes,
                        and more time preparing for your next opportunity.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.title}
                                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <Icon size={24} />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features