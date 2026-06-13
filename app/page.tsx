export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Long Island Hiring Hub
            </p>
            <h1 className="mt-2 text-2xl font-bold">LI Hiring Hub</h1>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#employers" className="hover:text-white">
              Employers
            </a>
            <a href="#recruiters" className="hover:text-white">
              Recruiters
            </a>
            <a href="#candidates" className="hover:text-white">
              Candidates
            </a>
          </nav>
        </header>

        <section className="flex flex-1 flex-col justify-center py-20">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              Built for Nassau, Suffolk, and Long Island employers.
            </p>

            <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
              Local jobs. Vetted recruiters. Better hires.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300">
              LI Hiring Hub connects Long Island employers with qualified
              candidates and trusted local recruiters. Post a role, find talent,
              or join our recruiter network.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#employers"
                className="rounded-xl bg-blue-500 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
              >
                I’m an Employer
              </a>

              <a
                href="#recruiters"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                I’m a Recruiter
              </a>

              <a
                href="#candidates"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                I’m Looking for Work
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-6 pb-16 md:grid-cols-3">
          <div
            id="employers"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-bold">For Employers</h3>
            <p className="mt-4 text-slate-300">
              Post Long Island roles and connect with vetted recruiters who
              understand the local market.
            </p>
            <a
              href="mailto:info@lihiringhub.com?subject=Employer%20Interest"
              className="mt-6 inline-block font-semibold text-blue-300 hover:text-blue-200"
            >
              Join employer waitlist →
            </a>
          </div>

          <div
            id="recruiters"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-bold">For Recruiters</h3>
            <p className="mt-4 text-slate-300">
              Apply to join our Long Island recruiter marketplace and access
              local employer searches.
            </p>
            <a
              href="mailto:info@lihiringhub.com?subject=Recruiter%20Application"
              className="mt-6 inline-block font-semibold text-blue-300 hover:text-blue-200"
            >
              Apply as recruiter →
            </a>
          </div>

          <div
            id="candidates"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-bold">For Candidates</h3>
            <p className="mt-4 text-slate-300">
              Looking for work on Long Island? Join our early candidate list and
              get matched with local opportunities.
            </p>
            <a
              href="mailto:info@lihiringhub.com?subject=Candidate%20Interest"
              className="mt-6 inline-block font-semibold text-blue-300 hover:text-blue-200"
            >
              Join candidate list →
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 py-6 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} LI Hiring Hub. A local hiring
            marketplace for Long Island employers, recruiters, and candidates.
          </p>
        </footer>
      </section>
    </main>
  );
}