import Link from "next/link";

const paths = [
  {
    title: "Employers",
    eyebrow: "I need to hire",
    description:
      "Post a Long Island role, tell us what you need, and get connected with qualified candidates and vetted recruiters.",
    href: "/employers",
    cta: "Start employer inquiry",
  },
  {
    title: "Recruiters",
    eyebrow: "I place talent",
    description:
      "Apply to join the LI Hiring Hub recruiter network and get access to local employer searches across Nassau and Suffolk.",
    href: "/recruiters",
    cta: "Apply as recruiter",
  },
  {
    title: "Candidates",
    eyebrow: "I’m looking for work",
    description:
      "Join the early candidate list for Long Island jobs in healthcare, trades, office administration, IT, professional services, and more.",
    href: "/candidates",
    cta: "Join candidate list",
  },
];

const categories = [
  "Healthcare",
  "Skilled Trades",
  "Office Administration",
  "Legal",
  "Accounting",
  "IT / MSP",
  "Sales",
  "Nonprofit",
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              Built for Nassau, Suffolk, and the Long Island hiring market.
            </p>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
              Local jobs. Vetted recruiters. Better hires.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
              LI Hiring Hub connects Long Island employers, recruiters, and
              candidates through a local hiring marketplace focused on real
              opportunities, trusted relationships, and faster hiring.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/employers"
                className="rounded-xl bg-blue-500 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
              >
                I’m an Employer
              </Link>

              <Link
                href="/recruiters"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                I’m a Recruiter
              </Link>

              <Link
                href="/candidates"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                I’m Looking for Work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                MVP Launch
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Now accepting early interest
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                We are onboarding employers, recruiters, and candidates while
                building the first version of the marketplace.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <Link
                href="/employers"
                className="block rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-blue-300/40 hover:bg-slate-900"
              >
                <p className="text-sm font-semibold text-blue-300">
                  For employers
                </p>
                <p className="mt-2 text-slate-300">
                  Tell us what roles you need to fill on Long Island.
                </p>
              </Link>

              <Link
                href="/recruiters"
                className="block rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-blue-300/40 hover:bg-slate-900"
              >
                <p className="text-sm font-semibold text-blue-300">
                  For recruiters
                </p>
                <p className="mt-2 text-slate-300">
                  Apply to join a vetted local recruiting network.
                </p>
              </Link>

              <Link
                href="/candidates"
                className="block rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-blue-300/40 hover:bg-slate-900"
              >
                <p className="text-sm font-semibold text-blue-300">
                  For candidates
                </p>
                <p className="mt-2 text-slate-300">
                  Join the early candidate list for local opportunities.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-3">
        {paths.map((path) => (
          <Link
            key={path.title}
            href={path.href}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {path.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold">{path.title}</h2>
            <p className="mt-4 leading-7 text-slate-300">{path.description}</p>
            <p className="mt-6 font-semibold text-blue-300 group-hover:text-blue-200">
              {path.cta} →
            </p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                Why LI Hiring Hub
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                A local hiring marketplace, not another generic job board.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="font-bold">Local focus</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Built specifically for Long Island employers and candidates.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="font-bold">Vetted recruiters</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Recruiters are reviewed before joining the marketplace.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="font-bold">Quality over volume</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The goal is better submissions, not resume dumping.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="font-bold">Built to scale</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Starting with lead capture, then expanding into real hiring
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}