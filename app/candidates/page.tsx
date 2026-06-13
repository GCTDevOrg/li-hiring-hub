"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CandidatesPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const { error } = await supabase.from("candidate_leads").insert({
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      county: formData.get("county"),
      desired_roles: formData.get("desired_roles"),
      desired_compensation: formData.get("desired_compensation"),
      work_preference: formData.get("work_preference"),
      availability: formData.get("availability"),
      consent_to_contact: formData.get("consent_to_contact") === "on",
    });

    setLoading(false);

    if (error) {
      setMessage("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    form.reset();
    setMessage("Thanks. We received your candidate information.");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to home
        </a>

        <h1 className="mt-8 text-4xl font-bold">Candidate Interest</h1>
        <p className="mt-4 text-slate-300">
          Join the early candidate list for Long Island opportunities.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input name="full_name" required placeholder="Full name" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="email" required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="phone" placeholder="Phone" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="location" placeholder="Town / city" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <select name="county" className="w-full rounded-lg border border-white/10 bg-slate-900 p-3">
            <option value="">County</option>
            <option value="Nassau">Nassau</option>
            <option value="Suffolk">Suffolk</option>
            <option value="Queens">Queens</option>
            <option value="Other">Other</option>
          </select>

          <textarea name="desired_roles" required placeholder="What kinds of roles are you looking for?" rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <input name="desired_compensation" placeholder="Desired compensation" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <select name="work_preference" className="w-full rounded-lg border border-white/10 bg-slate-900 p-3">
            <option value="">Work preference</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="Flexible">Flexible</option>
          </select>

          <input name="availability" placeholder="Availability, e.g. immediate, two weeks, evenings only" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <label className="flex gap-3 text-sm text-slate-300">
            <input name="consent_to_contact" type="checkbox" defaultChecked className="mt-1" />
            I consent to LI Hiring Hub contacting me about job opportunities.
          </label>

          <button disabled={loading} className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400 disabled:opacity-60">
            {loading ? "Submitting..." : "Submit candidate interest"}
          </button>

          {message && <p className="text-blue-200">{message}</p>}
        </form>
      </div>
    </main>
  );
}