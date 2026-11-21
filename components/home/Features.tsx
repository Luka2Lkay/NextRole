
import {
    ClipboardList,
    ChartNoAxesCombined,
    Target,
    ArrowUpRight,
} from "lucide-react";

const features = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Track every application",
        description:
            "No more wondering where you applied or when you last heard back. Keep every opportunity organized in one place.",
        accent: "bg-lime-300",
    },
    {
        number: "02",
        icon: ChartNoAxesCombined,
        title: "Visualize your progress",
        description:
            "See how your job search is going without digging through spreadsheets. Understand your progress at a glance.",
        accent: "bg-green-100",
    },
    {
        number: "03",
        icon: Target,
        title: "Stay focused on your goals",
        description:
            "Manage your job search with a structured workflow and keep track of every opportunity.",
        accent: "bg-amber-100",
    },
];

function Features() {
    return (
        <section
            id="features"
            className="bg-stone-100 px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-8 md:grid-cols-2 md:items-end">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            <span className="h-2 w-2 rounded-full bg-lime-400" />
                            Everything in one place
                        </div>

                        <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-green-950 sm:text-5xl">
                            A little more structure.
                            <span className="text-green-700">
                                {" "}A lot less stress.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-base leading-8 text-stone-600 md:justify-self-end">
                        Job hunting comes with enough uncertainty already. NextRole
                        gives you a clearer way to organize applications, follow your
                        progress, and stay focused on what comes next.
                    </p>
                </div>

                <div className="mt-16 grid gap-5 md:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.number}
                                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-green-900/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-900/30 hover:bg-white hover:shadow-xl hover:shadow-green-950/10 sm:p-9"
                            >
                     
                                <div className="flex items-start justify-between">
                                    <span className="text-sm font-bold tracking-widest text-stone-400">
                                        {feature.number}
                                    </span>

                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.accent} text-green-950 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110`}
                                    >
                                        <Icon size={25} strokeWidth={1.8} />
                                    </div>
                                </div>

                                <div className="mt-auto pt-16">
                                    <h3 className="max-w-[260px] text-2xl font-bold leading-snug tracking-tight text-green-950">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-stone-500">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="absolute bottom-8 right-8 flex h-9 w-9 items-center justify-center rounded-full border border-green-900/15 text-green-950 transition-all duration-300 group-hover:border-green-950 group-hover:bg-green-950 group-hover:text-lime-300">
                                    <ArrowUpRight size={17} />
                                </div>

    
                                <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-lime-300/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </article>
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-green-900/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-semibold text-green-950">
                        Your job search deserves more than a spreadsheet.
                    </p>

                    <span className="text-sm font-medium text-green-700">
                        Find your next move. Keep moving forward.
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Features;
