import Image from "next/image";
import Artikelkaart from "@/components/Artikelkaart";
import Link from "next/link";
import { Headphones, Share2 } from "lucide-react";
import TableOfContents from "@/components/TableOfContents";

const articleBody = [
  "De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is: willen we daarnaar blijven kijken?",
  "Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen aan de levens van celebrity's en influencers - tijdperk twee. En nu komt er een stortvloed van AI-video's aan. Zuckerberg stelt het for alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel wezen: hoe meer AI in onze feed, hoe minder video's we bekijken van professionele makers en van onze eigen vrienden. Nochtans hadden sociale media echt wel een bestaansreden, namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen.",
  "Zijn we in 2026 dan zo veranderd? Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonder enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo's, onmogelijke stunts, spectaculaire taarten of gewelddadige pranks, of wat ook je ding mag zijn (elders op het internet krijgen pornoliefhebbers nu video's te zien die almaar meer tonen van wat ze willen, ook als dat anatomisch totaal onmogelijk is).",
  "Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. Maar Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo's, u krijgt kattenvideo's die nog veel schattiger zijn dan in het echt.",
  "Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor AI-slop: vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik 'm weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de voornaamste auteur was.",
  "De eerste paar weken was AI-video nieuw en verrassend, dat wel. En nu nog is het soms lachen geblazen met sommige van die Sora-filmpjes (ook al mijd ik ze). Er is heus wel een plaats voor AI-video, bijvoorbeeld om speciale effecten te produceren in films. En er zijn creatieve mensen die toffe, vaak heel grappige video's maken die zonder AI onbetaalbaar duur zouden zijn.",
  "Maar horen ze thuis op Instagram en Facebook? Dat waren toch 'sociale' media, nietwaar? Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een computer gegenereerde video's, aanbevolen door een algoritme? In die zin zien we nu de dood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.",
];

const tocAsideItems = [
  { id: "de-rol-van-algoritmes", label: "De rol van algoritmes" },
  { id: "wat-willen-we-echt", label: "Wat willen we echt?" },
  { id: "de-dood-van-sociale-media", label: "De dood van sociale media" },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">DE TECHNOCRAAT</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-tight text-slate-900 md:text-7xl">
            Leidt AI-slop tot de dood van sociale media?
          </h1>
          <p className="mt-4 max-w-4xl font-sans text-2xl font-semibold leading-relaxed text-slate-700">
            Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop:
            video&apos;s met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan.
            Blijven we daar in 2026 naar kijken?
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/1b_Domini_1.jpg"
                alt="Auteur"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="font-sans">
                <p className="text-sm font-medium text-slate-900">Dominique Deckmyn</p>
                <p className="text-sm text-slate-500">2 januari 2026 om 23:59</p>
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
                    src="/1a_Cat_ride_1.jpg"
                    alt="Schattige katten, gegenereerd door AI."
                    width={1600}
                    height={900}
                    className="w-full aspect-[16/9] object-cover"
                    priority
                  />
                </div>
                <figcaption className="font-sans text-sm text-slate-500">
                  Schattige katten, gegenereerd door AI. © youtube
                </figcaption>
              </figure>

              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-none first-letter:text-slate-900 font-sans text-lg leading-relaxed text-slate-700">
                {articleBody[0]}
              </p>

              <section id="de-rol-van-algoritmes" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">De rol van algoritmes</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken
                  met de enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met
                  keuzes die bedrijven als Meta, Google en Bytedance (Tiktok) for ons maken, dus. Als
                  je op Youtube een nieuwe account aanmaakt, dan is 20 procent van de video&apos;s die je
                  worden aangeboden van AI afkomstig.
                </p>
              </section>

              <blockquote className="rounded-md bg-sky-50 px-6 py-6">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-6xl leading-none text-sky-300">“</span>
                  <div>
                    <p className="font-serif text-3xl font-bold leading-snug text-slate-900">
                      Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud
                      betekent een nieuw tijdperk in sociale media.
                    </p>
                  </div>
                </div>
              </blockquote>

              <p className="font-sans text-lg leading-relaxed text-slate-700">{articleBody[1]}</p>

              <section id="wat-willen-we-echt" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">Wat willen we echt?</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  {articleBody[2]}
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">{articleBody[3]}</p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">{articleBody[4]}</p>
              </section>

              <section id="de-dood-van-sociale-media" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">De dood van sociale media</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  {articleBody[5]}
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">{articleBody[6]}</p>
              </section>

              <p id="slot" className="font-sans text-base italic leading-relaxed text-slate-500">
                Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast
                {" "}&apos;Bits &amp; atomen&apos;.
              </p>

              <section className="space-y-5 rounded-md border border-slate-200 bg-slate-50 p-6">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                    LEES OOK
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-base text-slate-800">
                    <li>
                      <Link href="/article-2" className="transition-all duration-300 hover:text-slate-950 hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95">
                        Kandidaat-product van het jaar: de AI-videogenerator. &ldquo;De acteursfilm zal
                        duurder worden dan de superheldenproductie&rdquo;
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Cultuur en media",
                    "De Technocraat",
                    "Artificiële intelligentie",
                    "Mark Zuckerberg",
                  ].map((tag) => (
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
              <TableOfContents items={tocAsideItems} />
              <div className="space-y-4">
                <h3 className="mb-6 font-sans text-base font-semibold text-slate-900">Gerelateerde artikels</h3>
                <Artikelkaart
                  rubriek="DE HELPDESK"
                  title="Vibecoding: zo maak je je eigen games, websites en apps met AI"
                  href="/article-2"
                  imageUrl="/2a_Dino_Gif_2.webp"
                />
                <Artikelkaart
                  rubriek="DE TECHNOCRAAT"
                  title="Was het verzet van Dario Amodei tegen minister Hermans terecht?"
                  href="/article-3"
                  imageUrl="/3a_dario.jpg"
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