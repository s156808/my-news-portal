import Artikelkaart from "@/components/Artikelkaart";

const articles = [
  {
    rubriek: "DE TECHNOCRAAT",
    title: "Leidt AI-slop tot de dood van sociale media?",
    href: "/",
    imageUrl: "/1a_Cat_ride_1.jpg",
  },
  {
    rubriek: "DE HELPDESK",
    title: "Vibecoding: zo maak je in enkele minuten je eigen apps met AI",
    href: "/article-2",
    imageUrl: "/2a_Dino_Gif_2.webp",
  },
  {
    rubriek: "DE TECHNOCRAAT",
    title: "Was het verzet van Dario Amodei tegen minister Hegseth terecht?",
    href: "/article-3",
    imageUrl: "/3a_dario.jpg",
  },
];

export default function ArtikelsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-slate-500">OVERZICHT</p>
      <h1 className="mb-10 font-serif text-4xl text-slate-900 md:text-5xl">Alle artikels</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <Artikelkaart
            key={article.href}
            rubriek={article.rubriek}
            title={article.title}
            href={article.href}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
