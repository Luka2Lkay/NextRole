import {Target, ArrowRight, CheckCircle2, BriefcaseBusiness} from "lucide-react"
import Link from "next/link"

function Hero() {
  return (
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700">
              <Target size={15} />
              Your job search, organized
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your next opportunity starts with{" "}
              <span className="text-indigo-600">a plan.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Take control of your job search with NextRole. Track
              applications, manage interviews, and see your progress
              all in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Start tracking
                <ArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center rounded-xl border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
              {["Organize applications", "Track progress", "Plan your next move"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-indigo-600" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm text-slate-500">Welcome back</p>
                <h2 className="mt-1 text-xl font-bold">Your job search</h2>
              </div>
              <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                <BriefcaseBusiness size={22} />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Total", value: "24", color: "text-slate-900" },
                { label: "Applied", value: "12", color: "text-blue-600" },
                { label: "Interviews", value: "5", color: "text-amber-600" },
                { label: "Offers", value: "2", color: "text-emerald-600" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-100 bg-slate-50/80 p-3"
                >
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">Recent applications</h3>
                <span className="text-xs font-medium text-indigo-600">
                  Preview
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    company: "Microsoft",
                    role: "Software Engineer",
                    status: "Interview",
                    style: "bg-amber-50 text-amber-700",
                    initials: "M",
                  },
                  {
                    company: "Takealot",
                    role: "Frontend Developer",
                    status: "Applied",
                    style: "bg-blue-50 text-blue-700",
                    initials: "T",
                  },
                  {
                    company: "Shopify",
                    role: "Full Stack Developer",
                    status: "Saved",
                    style: "bg-slate-100 text-slate-600",
                    initials: "S",
                  },
                ].map((application) => (
                  <div
                    key={application.company}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 font-bold text-indigo-600">
                      {application.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {application.company}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {application.role}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${application.style}`}
                    >
                      {application.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              Illustrative dashboard preview — sample data
            </p>
          </div>
        </div>
      </section>
  )
}

export default Hero