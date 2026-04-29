import Link from "next/link";
import Image from "next/image";

type ArtikelkaartProps = {
  rubriek: string;
  title: string;
  href: string;
  imageUrl?: string;
};

export default function Artikelkaart({
  rubriek,
  title,
  href,
  imageUrl = "https://picsum.photos/seed/related-default/800/600",
}: ArtikelkaartProps) {
  return (
    <article className="group h-full">
      <Link
        href={href}
        className="block h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-[0.99]"
      >
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-lg bg-slate-200">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
              {rubriek}
            </p>
            <h3 className="font-serif text-xl leading-snug text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
              {title}
            </h3>
            <span className="inline-flex items-center font-sans text-sm font-medium text-slate-900 transition-transform duration-300 group-hover:translate-x-1">
              Lees artikel -&gt;
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
