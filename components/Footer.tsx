import Link from "next/link";

const footerColumns = [
  {
    title: "Over [Project]",
    links: [
      { label: "Een digitaal project", href: "/about" },
      { label: "Over de redactie", href: "/about" },
      { label: "Doel en aanpak", href: "/about" },
    ],
  },
  {
    title: "NAVIGATIE",
    links: [
      { label: "Artikels", href: "/artikels" },
      { label: "Over dit project", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "ARTIKELS",
    links: [
      { label: "AI-slop", href: "/" },
      { label: "Vibecoding", href: "/article-2" },
      { label: "Dario Amodei", href: "/article-3" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "X", href: "/contact" },
      { label: "LinkedIn", href: "/contact" },
      { label: "Nieuwsbrief", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-14 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="font-sans text-xs uppercase tracking-wider text-slate-400">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="rounded-sm font-sans text-sm text-slate-100/90 transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 active:scale-95"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
