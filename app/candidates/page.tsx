"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" && value.trim() !== "" ? value.trim() : null;
}

export default function CandidatesPage() {
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

    const fullName = getText(formData, "full_name");
    const email = getText(formData, "email");
    const desiredRoles = getText(formData, "desired_roles");

    if (!fullName || !email || !desiredRoles) {
      setLoading(false);
      setIsError(true);
      setMessage("Please complete the required fields.");
      return;
    }

    const { error } = await supabase.from("candidate_leads").insert({
      full_name: fullName,
      email,
      phone: getText(formData, "phone"),
      location: getText(formData, "location"),
      county: getText(formData, "county"),
      desired_roles: desiredRoles,
      desired_compensation: getText(formData, "desired_compensation"),
      work_preference: getText(formData, "work_preference"),
      availability: getText(formData, "availability"),
      consent_to_contact: formData.get("consent_to_contact") === "on",
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
      "Thanks. We received your candidate information and will keep you in mind as local opportunities develop."
    );
  }

  return (
    <main className="bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Candidates
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Looking for work on Long Island?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Join the early LI Hiring Hub candidate list and tell us what kind
              of local opportunities you are looking for.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Local opportunities</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  We are focused on Long Island employers and roles across
                  Nassau, Suffolk, Queens-adjacent, and hybrid local markets.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Multiple job categories</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Early categories include healthcare, trades, office
                  administration, sales, IT, legal, accounting, and nonprofit
                  roles.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="font-bold">Early candidate list</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Submitting your information helps us understand the local
                  candidate pool while the marketplace is being built.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Candidate Interest
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Join the Candidate List
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Tell us what kind of work you are looking for and how we can reach
              you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Full name *
                  </label>
                  <input
                    name="full_name"
                    required
                    placeholder="Full name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

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
              </div>

              <div className="grid gap-5 md:grid-cols-2">
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

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Town / city
                  </label>
                  <input
                    name="location"
                    placeholder="Example: Oyster Bay, Huntington, Garden City"
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
                    Work preference
                  </label>
                  <select
                    name="work_preference"
                    className="w-full rounded-lg border border-white/10 bg-slate-900 p-3 outline-none ring-blue-400/40 focus:ring-2"
                  >
                    <option value="">Select preference</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Availability
                  </label>
                  <input
                    name="availability"
                    placeholder="Immediate, 2 weeks, evenings, etc."
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Desired roles *
                </label>
                <textarea
                  name="desired_roles"
                  required
                  placeholder="Tell us what kinds of jobs you are looking for. Examples: medical assistant, office manager, IT support, bookkeeper, sales, electrician helper, paralegal."
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Desired compensation
                </label>
                <input
                  name="desired_compensation"
                  placeholder="Example: $25/hour, $60,000/year, open depending on role"
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-blue-400/40 placeholder:text-slate-500 focus:ring-2"
                />
              </div>

              <label className="flex gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm leading-6 text-slate-300">
                <input
                  name="consent_to_contact"
                  type="checkbox"
                  defaultChecked
                  className="mt-1"
                />
                <span>
                  I consent to LI Hiring Hub contacting me about local job
                  opportunities and related hiring marketplace updates.
                </span>
              </label>

              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4 text-sm leading-6 text-slate-300">
                This is an early candidate interest form. Submitting your
                information does not guarantee an interview, offer, or job
                placement.
              </div>

              <button
                disabled={loading}
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit candidate interest"}
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