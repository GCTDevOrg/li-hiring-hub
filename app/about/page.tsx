import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          About LI Hiring Hub
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
          A Long Island-first hiring marketplace.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
          LI Hiring Hub is being built to connect Long Island employers with
          qualified candidates and vetted recruiters who understand the local
          market.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">For employers</h2>
            <p className="mt-4 leading-7 text-slate-300">
              We help local businesses start the hiring process with a clear
              intake, better visibility, and access to trusted recruiters.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">For recruiters</h2>
            <p className="mt-4 leading-7 text-slate-300">
              We are building a vetted recruiter network focused on quality,
              accountability, and real local employer searches.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">For candidates</h2>
            <p className="mt-4 leading-7 text-slate-300">
              We help candidates raise their hand for local opportunities across
              Long Island industries and job categories.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-blue-400/20 bg-blue-400/10 p-8">
          <h2 className="text-2xl font-bold">Why this exists</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Long Island employers often need practical, local hiring help. Many
            do not want a generic job board, a flood of unqualified resumes, or
            a traditional recruiting process that feels disconnected from the
            local market. LI Hiring Hub is designed to become a trusted local
            marketplace where employers, recruiters, and candidates can meet in
            a more organized way.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/employers"
              className="rounded-xl bg-blue-500 px-6 py-4 text-center font-semibold text-white hover:bg-blue-400"
            >
              Employer inquiry
            </Link>
            <Link
              href="/recruiters"
              className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
            >
              Recruiter application
            </Link>
            <Link
              href="/candidates"
              className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
            >
              Candidate interest
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}