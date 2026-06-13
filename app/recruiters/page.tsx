"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function RecruitersPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const { error } = await supabase.from("recruiter_applications").insert({
      agency_name: formData.get("agency_name"),
      recruiter_name: formData.get("recruiter_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      linkedin_url: formData.get("linkedin_url"),
      specialties: formData.get("specialties"),
      counties_served: formData.get("counties_served"),
      years_experience: formData.get("years_experience"),
      placement_types: formData.get("placement_types"),
      notes: formData.get("notes"),
    });

    setLoading(false);

    if (error) {
      setMessage("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    form.reset();
    setMessage("Thanks. We received your recruiter application.");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to home
        </a>

        <h1 className="mt-8 text-4xl font-bold">Recruiter Application</h1>
        <p className="mt-4 text-slate-300">
          Apply to join the LI Hiring Hub recruiter network.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input name="agency_name" placeholder="Agency name" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="recruiter_name" required placeholder="Recruiter name" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="email" required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="phone" placeholder="Phone" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="website" placeholder="Website" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="linkedin_url" placeholder="LinkedIn URL" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <textarea name="specialties" required placeholder="Specialties, e.g. healthcare, accounting, trades, legal, IT" rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="counties_served" placeholder="Counties served" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="years_experience" placeholder="Years of recruiting experience" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="placement_types" placeholder="Placement types, e.g. direct hire, contract, temp-to-perm" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <textarea name="notes" placeholder="Anything else we should know?" rows={5} className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <button disabled={loading} className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400 disabled:opacity-60">
            {loading ? "Submitting..." : "Submit recruiter application"}
          </button>

          {message && <p className="text-blue-200">{message}</p>}
        </form>
      </div>
    </main>
  );
}