import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          Contact
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
          Get in touch with LI Hiring Hub.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
          We are currently accepting early inquiries from Long Island employers,
          recruiters, and candidates.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Link
            href="/employers"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-300/40 hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Employers
            </p>
            <h2 className="mt-4 text-xl font-bold">Need to hire?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Tell us what roles you are looking to fill on Long Island.
            </p>
          </Link>

          <Link
            href="/recruiters"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-300/40 hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Recruiters
            </p>
            <h2 className="mt-4 text-xl font-bold">Want to join?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Apply to become part of the vetted recruiter network.
            </p>
          </Link>

          <Link
            href="/candidates"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-300/40 hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Candidates
            </p>
            <h2 className="mt-4 text-xl font-bold">Looking for work?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Join the early candidate list for local opportunities.
            </p>
          </Link>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold">General inquiries</h2>
          <p className="mt-4 leading-7 text-slate-300">
            For general questions, email us at:
          </p>

          <a
            href="mailto:info@lihiringhub.com"
            className="mt-4 inline-block text-lg font-semibold text-blue-300 hover:text-blue-200"
          >
            info@lihiringhub.com
          </a>
        </div>
      </section>
    </main>
  );
}