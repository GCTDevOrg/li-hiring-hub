import Link from "next/link";
import Logo from "@/components/Logo";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              LI Hiring Hub is a local hiring marketplace connecting Long Island
              employers, vetted recruiters, and candidates across Nassau,
              Suffolk, and the broader Long Island labor market.
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-semibold text-white">Site Links</p>
            <div className="mt-4 flex flex-wrap gap-4 md:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 md:justify-end">
              <Link href="/employers" className="text-sm text-blue-300 hover:text-blue-200">
                Employers
              </Link>
              <Link href="/recruiters" className="text-sm text-blue-300 hover:text-blue-200">
                Recruiters
              </Link>
              <Link href="/candidates" className="text-sm text-blue-300 hover:text-blue-200">
                Candidates
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} LI Hiring Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}