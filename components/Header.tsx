import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/employers", label: "Employers" },
  { href: "/recruiters", label: "Recruiters" },
  { href: "/candidates", label: "Candidates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/employers"
          className="hidden rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 md:inline-flex"
        >
          Post a Role
        </Link>
      </div>

      <nav className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 pb-4 text-sm font-medium text-slate-300 lg:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}