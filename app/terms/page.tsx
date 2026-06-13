export default function TermsPage() {
  return (
    <main className="bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          Terms of Use
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
          Terms of Use
        </h1>

        <p className="mt-6 text-slate-400">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white">Use of this site</h2>
            <p className="mt-4">
              LI Hiring Hub provides an early-stage website for employers,
              recruiters, and candidates interested in Long Island hiring
              opportunities. By using this site, you agree to use it lawfully and
              submit accurate information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              No guarantee of employment or placement
            </h2>
            <p className="mt-4">
              Submission of an employer inquiry, recruiter application, or
              candidate interest form does not guarantee a job posting,
              recruiter approval, candidate introduction, interview, offer,
              employment, or placement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              User-submitted information
            </h2>
            <p className="mt-4">
              You are responsible for the accuracy of information you submit.
              You agree not to submit false, misleading, discriminatory,
              unlawful, or infringing content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              Employer and recruiter relationships
            </h2>
            <p className="mt-4">
              LI Hiring Hub is currently in MVP launch. Any future placement fee,
              recruiter marketplace, employer agreement, recruiter agreement, or
              candidate submission process may be governed by separate written
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              Site availability
            </h2>
            <p className="mt-4">
              We may update, change, suspend, or discontinue parts of the site
              at any time as the service develops.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              Limitation of liability
            </h2>
            <p className="mt-4">
              The site is provided on an early-stage basis without warranties of
              any kind. LI Hiring Hub is not responsible for losses arising from
              use of or inability to use the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-4">
              Questions about these terms may be sent to info@lihiringhub.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}