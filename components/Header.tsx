import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center px-4 md:px-8">
        <div className="flex w-1/3 justify-start">
          <Link
            href="/"
            className="rounded-sm font-serif text-xl text-slate-900 transition-all duration-300 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
          >
            DE STANDAARD
          </Link>
        </div>

        <Navigation />

        <div className="flex w-2/3 justify-end md:w-1/3">
          <Link
            href="/artikels"
            className="rounded-sm bg-slate-900 px-4 py-2 font-sans text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
          >
            Bekijk alle artikels -&gt;
          </Link>
        </div>
      </div>

      <Navigation mobile />
    </header>
  );
}
