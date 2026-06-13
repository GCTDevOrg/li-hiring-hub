"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" && value.trim() !== "" ? value.trim() : null;
}

export default function RecruitersPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const recruiterName = getText(formData, "recruiter_name");
    const email = getText(formData, "email");
    const specialties = getText(formData, "specialties");

    if (!recruiterName || !email || !specialties) {
      setLoading(false);
      setIsError(true);
      setMessage("Please complete the required fields.");
      return;
    }

    const { error } = await supabase.from("recruiter_applications").insert({
      agency_name: getText(formData, "agency_name"),
      recruiter_name: recruiterName,
      email,
      phone: getText(formData, "phone"),
      website: getText(formData, "website"),
      linkedin_url: getText(formData, "linkedin_url"),
      specialties,
      counties_served: getText(formData, "counties_served"),
      years_experience: getText(formData, "years_experience"),
      placement_types: getText(formData, "placement_types"),
      notes: getText(formData, "notes"),
    });

    setLoading(false);

    if (error) {
      console.error(error);
      setIsError(true);
      setMessage("Something went wrong. Please try again.");
      return;
    }

    form.reset();
    setIsError(false);
    setMessage(
      "Thanks. We received your recruiter application and will review it shortly."
    );
  }

  return (
    <main className="bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Recruiters
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Join the Long Island recruiter network.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              LI Hiring Hub is building a vetted recruiter marketplace for
              Long Island employers. We are looking for recruiters who know
              their industries, respect candidate consent, and submit quality
              candidates instead of resume dumps.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Real local searches</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The marketplace is being built around Long Island employers
                  and practical hiring needs across Nassau, Suffolk, Queens, and
                  the surrounding market.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Vetted participation</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Recruiters are reviewed before being approved to work employer
                  searches. The goal is a smaller, stronger network.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Quality over volume</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  We are designing this around curated candidate submissions,
                  clear recruiter accountability, and better hiring outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Recruiter Application
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Apply to Join LI Hiring Hub
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Tell us about your agency, specialties, geography, and the types
              of roles you place.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Agency name
                  </label>
                  <input
                    name="agency_name"
                    placeholder="Agency name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Recruiter name *
                  </label>
                  <input
                    name="recruiter_name"
                    required
                    placeholder="Recruiter name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email *
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Phone
                  </label>
                  <input
                    name="phone"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Website
                  </label>
                  <input
                    name="website"
                    placeholder="https://example.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    LinkedIn URL
                  </label>
                  <input
                    name="linkedin_url"
                    placeholder="LinkedIn profile or company page"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Recruiting specialties *
                </label>
                <textarea
                  name="specialties"
                  required
                  placeholder="Examples: healthcare, accounting, trades, legal, IT, sales, office administration"
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Counties served
                  </label>
                  <input
                    name="counties_served"
                    placeholder="Nassau, Suffolk, Queens"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Years experience
                  </label>
                  <input
                    name="years_experience"
                    placeholder="Example: 8 years"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Placement types
                  </label>
                  <input
                    name="placement_types"
                    placeholder="Direct hire, contract, temp"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Anything else we should know?
                </label>
                <textarea
                  name="notes"
                  placeholder="Tell us about your strongest industries, typical fee structure, Long Island coverage, or hard-to-fill roles you handle well."
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm leading-6 text-slate-300">
                Applying does not guarantee approval into the recruiter network.
                LI Hiring Hub is building a vetted marketplace and may review
                recruiter background, specialties, geography, and fit before
                approval.
              </div>

              <button
                disabled={loading}
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit recruiter application"}
              </button>

              {message && (
                <p
                  className={`rounded-lg border p-4 text-sm ${
                    isError
                      ? "border-red-400/30 bg-red-400/10 text-red-200"
                      : "border-blue-400/30 bg-blue-400/10 text-blue-200"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}