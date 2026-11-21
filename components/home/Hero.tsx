import {
  Target,
  ArrowRight,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total", value: "24", color: "text-white" },
  { label: "Applied", value: "12", color: "text-lime-300" },
  { label: "Interviews", value: "05", color: "text-amber-300" },
  { label: "Offers", value: "02", color: "text-emerald-300" },
];

const applications = [
  {
    company: "Microsoft",
    role: "Software Engineer",
    status: "Interview",
    style: "bg-amber-300/15 text-amber-300",
    initials: "M",
  },
  {
    company: "Takealot",
    role: "Frontend Developer",
    status: "Applied",
    style: "bg-lime-300/15 text-lime-300",
    initials: "T",
  },
  {
    company: "Shopify",
    role: "Full Stack Developer",
    status: "Saved",
    style: "bg-white/10 text-white/70",
    initials: "S",
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-stone-100 text-stone-900"
    >

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-green-900/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-green-900/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">

        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-900/15 bg-white/50 px-4 py-2 text-sm font-semibold text-green-800">
            <Target size={16} />
            A better way to navigate your job search
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Your next role is worth{" "}
            <span className="relative inline-block">
              planning
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-lime-300" />
            </span>
            .
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-stone-600">
            {"Applying for jobs, updating your CV, checking emails, and keeping track of interviews? Let's make at least one part of the job hunt easier."}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-3 rounded-xl bg-green-950 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-800"
            >
              Start tracking
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#features"
              className="inline-flex items-center rounded-xl border border-green-900/20 px-6 py-4 font-semibold text-green-950 transition hover:bg-white/70"
            >
              Explore features
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-stone-600">
            {[
              "Organize applications",
              "Track progress",
              "Plan your next move",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-700" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-16 border-l-2 border-lime-400 pl-4">
            <p className="text-sm font-semibold text-green-950">
              Less chasing. More progressing.
            </p>
            <p className="mt-1 text-sm text-stone-500">
              One place for everything in your job search.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-lime-300" />

          <div className="relative overflow-hidden rounded-2xl bg-green-950 p-5 text-white shadow-2xl shadow-green-950/20 sm:p-7">

            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <div>
                <p className="text-sm text-white/50">YOUR OVERVIEW</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">
                  Job search tracker
                </h2>
              </div>

              <div className="rounded-xl bg-lime-300 p-3 text-green-950">
                <BriefcaseBusiness size={23} />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <p className="text-xs text-white/50">{stat.label}</p>
                  <p className={`mt-3 text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Activity
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Recent applications
                  </h3>
                </div>

                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-bold text-green-950">
                  This week
                </span>
              </div>

              <div className="space-y-3">
                {applications.map((application) => (
                  <div
                    key={application.company}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 font-bold text-lime-300">
                      {application.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {application.company}
                      </p>
                      <p className="truncate text-xs text-white/50">
                        {application.role}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${application.style}`}
                    >
                      {application.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
              <p className="text-xs text-white/40">
                Keep moving forward.
              </p>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-stone-500">
            Illustrative dashboard preview — sample data
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
