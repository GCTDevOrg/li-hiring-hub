"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EmployersPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const { error } = await supabase.from("employer_leads").insert({
      company_name: formData.get("company_name"),
      contact_name: formData.get("contact_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      industry: formData.get("industry"),
      county: formData.get("county"),
      company_size: formData.get("company_size"),
      hiring_needs: formData.get("hiring_needs"),
      role_types: formData.get("role_types"),
      hiring_timeline: formData.get("hiring_timeline"),
    });

    setLoading(false);

    if (error) {
      setMessage("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    form.reset();
    setMessage("Thanks. We received your employer inquiry.");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to home
        </a>

        <h1 className="mt-8 text-4xl font-bold">Employer Interest</h1>
        <p className="mt-4 text-slate-300">
          Tell us what kind of Long Island roles you need help filling.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input name="company_name" required placeholder="Company name" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="contact_name" required placeholder="Contact name" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="email" required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="phone" placeholder="Phone" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="website" placeholder="Website" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="industry" placeholder="Industry" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <select name="county" className="w-full rounded-lg border border-white/10 bg-slate-900 p-3">
            <option value="">County</option>
            <option value="Nassau">Nassau</option>
            <option value="Suffolk">Suffolk</option>
            <option value="Queens">Queens</option>
            <option value="Other">Other</option>
          </select>

          <input name="company_size" placeholder="Company size, e.g. 1-10, 11-50, 51-200" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="role_types" placeholder="Role types, e.g. medical assistant, bookkeeper, HVAC tech" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />
          <input name="hiring_timeline" placeholder="Hiring timeline, e.g. immediately, 30 days, 60 days" className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <textarea name="hiring_needs" required placeholder="Describe your hiring needs" rows={6} className="w-full rounded-lg border border-white/10 bg-white/5 p-3" />

          <button disabled={loading} className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400 disabled:opacity-60">
            {loading ? "Submitting..." : "Submit employer inquiry"}
          </button>

          {message && <p className="text-blue-200">{message}</p>}
        </form>
      </div>
    </main>
  );
}