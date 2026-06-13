"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" && value.trim() !== "" ? value.trim() : null;
}

export default function EmployersPage() {
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

    const companyName = getText(formData, "company_name");
    const contactName = getText(formData, "contact_name");
    const email = getText(formData, "email");
    const hiringNeeds = getText(formData, "hiring_needs");

    if (!companyName || !contactName || !email || !hiringNeeds) {
      setLoading(false);
      setIsError(true);
      setMessage("Please complete the required fields.");
      return;
    }

    const { error } = await supabase.from("employer_leads").insert({
      company_name: companyName,
      contact_name: contactName,
      email,
      phone: getText(formData, "phone"),
      website: getText(formData, "website"),
      industry: getText(formData, "industry"),
      county: getText(formData, "county"),
      company_size: getText(formData, "company_size"),
      hiring_needs: hiringNeeds,
      role_types: getText(formData, "role_types"),
      hiring_timeline: getText(formData, "hiring_timeline"),
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
      "Thanks. We received your employer inquiry and will follow up shortly."
    );
  }

  return (
    <main className="bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Employers
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Tell us who you need to hire.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              LI Hiring Hub helps Long Island employers start the hiring process
              with a clear intake and access to qualified candidates and vetted
              recruiters.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Local hiring focus</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Built for Nassau, Suffolk, Queens-adjacent, and Long
                  Island-based hiring needs.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Recruiter-assisted searches</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  For hard-to-fill roles, we are building a vetted recruiter
                  marketplace focused on quality, not resume dumping.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Early MVP launch</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Submit your interest now while we onboard early employers,
                  recruiters, and candidates.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Employer Intake
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Employer Inquiry
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Tell us about your company and the roles you need help filling.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Company name *
                  </label>
                  <input
                    name="company_name"
                    required
                    placeholder="Company name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Contact name *
                  </label>
                  <input
                    name="contact_name"
                    required
                    placeholder="Contact name"
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
                    Industry
                  </label>
                  <input
                    name="industry"
                    placeholder="Healthcare, trades, legal, IT, etc."
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    County
                  </label>
                  <select
                    name="county"
                    className="w-full rounded-lg border border-white/10 bg-slate-900 p-3 outline-none ring-blue-400/40 focus:ring-2"
                  >
                    <option value="">Select county</option>
                    <option value="Nassau">Nassau</option>
                    <option value="Suffolk">Suffolk</option>
                    <option value="Queens">Queens</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Company size
                  </label>
                  <input
                    name="company_size"
                    placeholder="Example: 11-50"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Hiring timeline
                  </label>
                  <input
                    name="hiring_timeline"
                    placeholder="Immediate, 30 days, 60 days"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Role types
                </label>
                <input
                  name="role_types"
                  placeholder="Examples: office manager, medical assistant, HVAC tech, bookkeeper"
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Hiring needs *
                </label>
                <textarea
                  name="hiring_needs"
                  required
                  placeholder="Describe the roles you need to fill, the challenge you are having, and what kind of candidate would be a good fit."
                  rows={6}
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm leading-6 text-slate-300">
                Submitting this form does not create a placement agreement or
                fee obligation. This is an early employer inquiry so we can
                understand your hiring needs.
              </div>

              <button
                disabled={loading}
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit employer inquiry"}
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