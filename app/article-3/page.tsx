import Image from "next/image";
import Link from "next/link";
import Artikelkaart from "@/components/Artikelkaart";
import TableOfContents from "@/components/TableOfContents";
import { Headphones, Share2 } from "lucide-react";

const tocItems = [
  { id: "een-cultuur-van-dwang", label: "Een cultuur van dwang" },
  { id: "een-bocht-voor-big-tech", label: "Een bocht voor Big Tech" },
  { id: "de-macht-van-de-ai-experts", label: "De macht van de AI-experts" },
];

export default function ArticleThreePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">DE TECHNOCRAAT</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-tight text-slate-900 md:text-7xl">
            Was het verzet van Dario Amodei tegen minister Hegseth het “Ik ben Spartacus!”-moment van
            Silicon Valley?
          </h1>
          <p className="mt-4 max-w-4xl font-sans text-2xl font-semibold leading-relaxed text-slate-700">
            Het verzet van Dario Amodei tegen minister van “Oorlog” Pete Hegseth, en de rechtszaak waar
            dat nu op uitdraait, lijkt steeds meer op een keerpunt. Al keert Silicon Valley nooit meer
            terug naar vroeger.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/1b_Domini_1.jpg"
                alt="Auteur Dominique Deckmyn"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="font-sans">
                <p className="text-sm font-medium text-slate-900">Dominique Deckmyn</p>
                <p className="text-sm text-slate-500">13 maart 2026 om 23:59</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-sm border border-slate-200 px-3 py-2 font-sans text-sm text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
              >
                <Headphones size={16} />
                Luisteren
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-sm border border-slate-200 px-3 py-2 font-sans text-sm text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
              >
                <Share2 size={16} />
                Delen
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <article className="space-y-10 md:col-span-8">
              <figure className="space-y-2">
                <div className="relative overflow-hidden rounded-md bg-slate-200">
                  <Image
                    src="/3a_dario.jpg"
                    alt="Dario Amodei en debat rond AI-ethiek"
                    width={1600}
                    height={900}
                    className="w-full aspect-[16/9] object-cover"
                    priority
                  />
                </div>
                <figcaption className="font-sans text-sm text-slate-500">
                  Dario Amodei neemt heel nadrukkelijk een ethisch standpunt in over AI. © getty
                </figcaption>
              </figure>

              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-none first-letter:text-slate-900 font-sans text-lg leading-relaxed text-slate-700">
                Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en
                tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great
                Again) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar niet via grote
                publieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. De
                kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde amicus briefs,
                documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische
                strijd tegen het Pentagon.
              </p>

              <blockquote className="rounded-md bg-sky-50 px-6 py-6">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-6xl leading-none text-sky-300">“</span>
                  <p className="font-serif text-3xl font-bold leading-snug text-slate-900">
                    Een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat
                    de regering alle middelen waarover het beschikt zal gebruiken om te straffen wie het
                    aandurft het oneens te zijn.
                  </p>
                </div>
              </blockquote>

              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Toch staat er rake taal in. De strafmaatregel die minister van “Oorlog” Pete Hegseth
                Anthropic oplegt, namelijk het uitroepen tot “risico voor de toeleveringsketen”,
                creëert deze cultuur. En dat staat in een document dat – indirect – ondertekend is door
                Amazon, Google en Apple (via de belangengroep Chamber of Progress).
              </p>

              <section id="een-cultuur-van-dwang" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">Een cultuur van dwang</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Is dit nu het “Ik ben Spartacus!” moment van Silicon Valley? Nee, daarvoor is het
                  allemaal veel te voorzichtig. Chamber of Progress argumenteert vooral dat Anthropics
                  recht op vrije meningsuiting wordt geschonden. Het is Anthropics goed recht om ethische
                  bezwaren te formuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder: het
                  spreekt zelfs voorzichtige steun uit voor die ethische bezwaren, met heel wat mitsen
                  en maren.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet
                  te ver uit. Trump en zijn Maga-beweging hebben van dat begrip natuurlijk wel een heel
                  eigen invulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting
                  beknot, nu verdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen
                  is er best nog wel steun voor het idee dat iedereen zijn zegje mag hebben.
                </p>
              </section>

              <section id="een-bocht-voor-big-tech" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">Een bocht voor Big Tech</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwege
                  het inspirerende voorbeeld van Amodei, of omdat ze voelen dat de politieke wind stilaan
                  van richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet meer zoals
                  vroeger. We zullen van deze ceo’s de komende jaren waarschijnlijk weinig politieke
                  gevoelige uitspraken horen.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Wanneer deze ceo’s zich in het verleden van hun progressiefste kant lieten zien, was
                  dat (zoveel is ondertussen duidelijk) zelden vanuit een diepe overtuiging. Het was
                  eerder omdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen de
                  werknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract
                  met Defensie liet vallen.
                </p>
              </section>

              <section id="de-macht-van-de-ai-experts" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">De macht van de AI-experts</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken,
                  en dat merk je. Met één uitzondering, weliswaar: de paar honderd AI-experts die de
                  meest geavanceerde LLM’s kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze wél
                  nog de luxe hebben om volgens hun overtuiging te handelen.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in deze
                  zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk en moedig een ethisch
                  standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.
                </p>
              </section>

              <section className="space-y-5 rounded-md border border-slate-200 bg-slate-50 p-6">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                    LEES OOK
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-base text-slate-800">
                    <li>
                      <Link href="/article-2" className="transition-all duration-300 hover:text-slate-950 hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95">
                        ChatGPT boycotten, of meteen de hele big tech?
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Cultuur en media", "De Technocraat", "Artificiële intelligentie"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300 bg-white px-3 py-1 font-sans text-xs text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="font-sans text-sm text-slate-600 underline underline-offset-2 transition-all duration-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95">
                  Fout gezien? Meld het ons hier
                </Link>
              </section>
            </article>

            <aside className="w-full space-y-8 md:col-span-4 md:pl-4">
              <TableOfContents items={tocItems} />
              <div className="space-y-4">
                <h3 className="mb-6 font-sans text-base font-semibold text-slate-900">Gerelateerde artikels</h3>
                <Artikelkaart
                  rubriek="DE TECHNOCRAAT"
                  title="Leidt AI-slop tot de dood van sociale media?"
                  href="/"
                  imageUrl="/1a_Cat_ride_1.jpg"
                />
                <Artikelkaart
                  rubriek="DE HELPDESK"
                  title="Vibecoding: zo maak je in enkele minuten je eigen apps met AI"
                  href="/article-2"
                  imageUrl="/2a_Dino_Gif_2.webp"
                />
                <Link
                  href="/artikels"
                  className="inline-flex rounded-sm bg-slate-900 px-4 py-2 font-sans text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
                >
                  Bekijk alle artikels -&gt;
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}