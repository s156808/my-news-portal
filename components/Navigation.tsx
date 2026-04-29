import Link from "next/link";

const navLinks = [
  { href: "/artikels", label: "Artikels" },
  { href: "/about", label: "Over dit project" },
  { href: "/contact", label: "Contact" },
];

type NavigationProps = {
  mobile?: boolean;
};

export default function Navigation({ mobile = false }: NavigationProps) {
  const className = mobile
    ? "mx-auto mt-3 flex max-w-7xl items-center gap-6 px-4 font-sans text-sm text-slate-600 md:hidden md:px-8"
    : "hidden w-1/3 items-center justify-center gap-8 font-sans text-sm text-slate-600 md:flex";

  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-sm transition-all duration-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
