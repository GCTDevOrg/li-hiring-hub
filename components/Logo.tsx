import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-500/15 text-lg font-black tracking-tight text-blue-200 shadow-lg shadow-blue-500/10">
        LI
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          Long Island
        </p>
        <p className="text-lg font-bold tracking-tight text-white group-hover:text-blue-100">
          Hiring Hub
        </p>
      </div>
    </Link>
  );
}