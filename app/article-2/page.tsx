import Image from "next/image";
import Artikelkaart from "@/components/Artikelkaart";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Headphones, Share2 } from "lucide-react";

const tocItems = [
  { id: "een-eenvoudig-spel", label: "Een eenvoudig spel" },
  { id: "ambitieuzer-een-gezinskalender", label: "Ambitieuzer: een gezinskalender" },
  { id: "echt-agentic-werken", label: "Echt agentic werken" },
  { id: "voorkennis", label: "Voorkennis" },
];

export default function ArticleTwoPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">DE HELPDESK</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-tight text-slate-900 md:text-7xl">
            Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
          </h1>
          <p className="mt-4 max-w-4xl font-sans text-2xl font-semibold leading-relaxed text-slate-700">
            Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet
            helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat. Of
            liever: AI maakt die voor je.
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
                <p className="text-sm text-slate-500">23 januari 2026 om 23:59</p>
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
              <div className="relative overflow-hidden rounded-md bg-slate-200">
                <Image
                  src="/2a_Dino_Gif_2.webp"
                  alt="Vibecoding met AI op laptop"
                  width={1600}
                  height={900}
                  className="w-full aspect-[16/9] object-cover"
                  priority
                />
              </div>

              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-none first-letter:text-slate-900 font-sans text-lg leading-relaxed text-slate-700">
                Het is nog maar januari, maar &lsquo;vibecoding&rsquo;, ofwel coderen met AI, maakt al een
                goede kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites
                te bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen
                in een stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste versies van
                Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder
                noemenswaardige voorkennis aan zou kunnen beginnen.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Maar is dat zo? Wel: ja en nee. Ja: een simpel programma, zoals een spelletje dat je in
                je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar
                een prompt. Denk aan &ldquo;maak een spel waarbij je cocktails moet mixen&rdquo;. Al helpt het
                wel om eerst een paar handigheidjes te leren, wat we hieronder zullen doen.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week
                bouwde, dan moet je wel een beetje weten waar je mee bezig bent. Je hoeft niet te kunnen
                programmeren, je hoeft zelfs geen programmacode te kunnen lezen, wel moet je nadenken
                over wat je precies wilt bouwen en welke componenten daarvoor nodig zijn. Maar hier is
                het goede nieuws: je kunt klein beginnen en heel snel je grenzen verleggen.
              </p>

              <section id="een-eenvoudig-spel" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">Een eenvoudig spel</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Hoe klein? Wel, laten we beginnen met zo&apos;n spelletje. Open een chatbot naar keuze:
                  Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat. En vraag om een simpel
                  spel. Ik probeerde bijvoorbeeld: &ldquo;Schrijf een spel waarbij een dinosaurus een bal
                  moet koppen.&rdquo;
                </p>
              </section>

              <figure className="space-y-2">
                <div className="overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src="/2b_trexspel_2.webp"
                    alt="Dinosaurusspel gegenereerd door AI"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="font-sans text-sm text-slate-500">
                  Dit spel in Javascript is gegenereerd door Gemini met één prompt: “Maak een spel
                  waarbij een t-rex een bal moet koppen.”
                </figcaption>
              </figure>

              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren dan
                een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de
                programmeertaal Javascript. Wat doe je met die code? Die bewaar je in een document met
                de extensie &lsquo;.html&rsquo;, bijvoorbeeld &lsquo;Mijnspelletje.html&rsquo; op je computer.
              </p>
              <div className="space-y-3 rounded-md bg-slate-50 p-5">
                <p className="font-sans font-medium text-slate-900">Op een Windows-pc:</p>
                <ol className="list-decimal space-y-2 pl-6 font-sans text-lg leading-relaxed text-slate-700">
                  <li>
                    Klik op de code die de chatbot genereerde (meestal op het &lsquo;copy&rsquo;-knopje bovenaan of
                    onderaan)
                  </li>
                  <li>Plak de code in een programma als Windows Kladblok of Macintosh TextEdit</li>
                  <li>Bewaar het bestand met een naam als &lsquo;dinospel.html&rsquo;</li>
                  <li>Klik op dinospel.html</li>
                  <li>Het spel opent in je standaardbrowser. En spelen maar!</li>
                </ol>
              </div>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Als je Microsoft Kladblok gebruikt (dat op elke Windows-pc geïnstalleerd zou moeten
                zijn), moet je wel op één ding letten: het programma heeft de neiging om elk document te
                bewaren met de extensie &ldquo;.txt&rdquo;. Hou dus in de gaten dat hij er niet stiekem
                dinospel.html.txt van heeft gemaakt.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Wil ik het
                programma dat ik op mijn pc maakte op mijn smartphone spelen, dan kan ik het bijvoorbeeld
                naar mijzelf e-mailen en op mijn smartphone de bijlage bewaren.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Lukt dat allemaal elke keer? Nee, maar meestal wel, eigenlijk. Soms begrijpt de chatbot
                je verkeerd, en moet je wat meer preciseren: &ldquo;Schrijf het programma in Javascript en zet
                alles in één bestand.&rdquo; En je kunt ook aanwijzingen geven over de visuele stijl (&lsquo;laat
                het eruitzien als een 8-bit computerspel&rsquo;), de bediening (&lsquo;met de pijltjestoetsen&rsquo;) of
                het spelverloop.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Vaak zit de eerste versie niet helemaal goed: er wordt geen score bijgehouden,
                bijvoorbeeld, of de voorwerpen in het spel bewegen te snel of juist te traag. Dan doe je
                een tweede ronde: je vraagt aan ChatGPT of Gemini om de nodige aanpassingen. En hop: een
                verbeterde versie verschijnt, die je op dezelfde manier op je harde schijf bewaart.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Op die manier krijg je meestal spelletjes die sterk geïnspireerd zijn op wat al bestaat.
                Maar het is zeker ook mogelijk om meer originele spelletjes te bouwen, als je een meer
                gedetailleerde beschrijving geeft. Stap voor stap uitbreiden met extra functies of
                effecten (geluid!) kan ook.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Zo bouwde ik in vijf stappen een &lsquo;cocktailspel&rsquo;, waarbij je in enkele seconden een
                cocktail moet mixen op basis van een recept. De eerste versie was wat saai, dus ik
                voegde er opties als &lsquo;schudden&rsquo; en &lsquo;parasolletje&rsquo; aan toe.
              </p>

              {/* Картинка с игрой про коктейли */}
              <figure className="space-y-2">
                <div className="overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src="/2c_cocktailspel.webp"
                    alt="Cocktailspel interface"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="font-sans text-sm text-slate-500">
                  ChatGPT schreef dit spel in een aantal stappen, na telkens een kleine bijsturing.
                </figcaption>
              </figure>

              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Elke keer dat een programma een foutmelding geeft, kleef je die foutmelding in ChatGPT
                met de vraag om die fout te repareren. Dat lukt vaak meteen, soms moet je een paar keer
                proberen.
              </p>

              <section id="ambitieuzer-een-gezinskalender" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">Ambitieuzer: een gezinskalender</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Na een tijdje durfde ik iets meer complexe apps aan. Terwijl de AI voor grafische apps
                  zoals spelletjes en websites meestal spontaan naar HTML en Javascript zal grijpen, kom
                  je voor apps met meer tekst of cijfers eerder bij de programmeertaal Python uit. Dat is
                  een prachtige taal om mee aan de slag te gaan, maar je moet wel eerst een werkende
                  Python-omgeving op je computer hebben staan. Installeer gratis de recentste versie van
                  Python via python.org.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Wil je iets met Python uitproberen, dan kun je op dezelfde manier te werk gaan als met
                  Javascript: ChatGPT of Gemini schrijft de code, je plakt die in Kladblok en bewaart
                  hem op je harde schijf – maar nu met de extensie &lsquo;.py&rsquo;. Om hem uit te voeren, moet je
                  dan, vanaf de opdrachtprompt, in de juiste map gaan staan en &lsquo;python mijnprogramma.py&rsquo;
                  intikken. Beetje omslachtig, dus.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Het moest een app
                  worden voor alle leden van een gezin. Eentje waarin ze elkaars activiteiten zien, maar
                  bijvoorbeeld ook kunnen zien wie van de ouders het zoontje op dinsdagavond naar de
                  voetbaltraining moet brengen. Ieder gezinslid moet een activiteit kunnen toevoegen.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Dat is te ingewikkeld voor een programma van één bestand. De app bestaat dus, opnieuw,
                  uit HTML en Javascript. De tabel met alle activiteiten moet toegankelijk zijn voor
                  iedereen en moet dus ergens centraal worden bewaard. ChatGPT suggereerde een paar
                  opties, ik koos daaruit Supabase, een cloud-database. Om iedereen toegang te geven tot
                  dezelfde versie van het programma, heb ik het &lsquo;gehost&rsquo; op een site die Vercel heet. Op
                  beide sites maakte ik gratis accounts aan. Ik liet me elke stap in detail uitleggen
                  door ChatGPT, het lukte zonder dat ik iets moest leren over Vercel of Supabase.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Ik besliste uiteindelijk, alweer op advies van ChatGPT, om mijn programma niet zomaar
                  op mijn harde schijf te bewaren maar op de gespecialiseerde website Github, met een
                  gratis account. Github houdt alle veranderingen aan je programma bij, zodat je altijd
                  kunt terugkeren naar een eerdere, werkende versie.
                </p>
              </section>

              <figure className="space-y-2">
                <div className="overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src="/2d_gezinskalender.webp"
                    alt="Gezinskalender app op smartphone en laptop"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="font-sans text-sm text-slate-500">
                  Deze gezinskalender draait op smartphone en pc, de gegevens worden in de “cloud”
                  bewaard. De eerste versie werd geschreven door ChatGPT, maar de afwerking gebeurde met
                  hulp van ChatGPT Codex.
                </figcaption>
              </figure>

              <p className="font-sans text-lg leading-relaxed text-slate-700">
                ChatGPT stelde voor eerst een versie te maken met minimale functionaliteit. Die bestond
                al uit een viertal verschillende bestanden die ik telkens, met de juiste naam, in
                dezelfde map moest bewaren. Bij foutmeldingen plakte ik die melding opnieuw in ChatGPT,
                dat een verbeterde versie van de bestanden maakte. Ja, dat kan behoorlijk omslachtig
                worden.
              </p>
              <p className="font-sans text-lg leading-relaxed text-slate-700">
                Met al dat knippen en plakken was ik zo al snel drie uur bezig. Het resultaat: een
                werkende app, maar wel een die er nogal belabberd uitzag en waar je, bijvoorbeeld, een
                activiteit wel kon toevoegen maar niet kon wissen of wijzigen.
              </p>

              <section id="echt-agentic-werken" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">Echt agentic werken</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Wie verder wil gaan dan dat – zonder zelf te gaan programmeren – moet &lsquo;agentic&rsquo; gaan
                  werken: met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden
                  kan zien en zelf kan wijzigen. Dan gaat alles veel sneller en kun je eigenlijk haast
                  alles bouwen. Je kunt de werking en de vormgeving eindeloos verfijnen. Maar je moet
                  wel een beetje begrijpen waar je mee bezig bent.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Je hoort dezer dagen veel over Claude Code, maar ik opteerde voor het gelijkaardige
                  ChatGPT Codex. Dat vereist de betaalversie van ChatGPT, ChatGPT Plus (23 euro per
                  maand). Codex is een &lsquo;agent&rsquo;: je geeft nog altijd een instructie via een tekstprompt,
                  maar dan gaat de AI zelfstandig verschillende stappen na elkaar zetten en zelf ook
                  eigen wijzigingen voorstellen. Je moet alleen nog af en toe op &lsquo;ja&rsquo; klikken.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Er zijn ook talloze gespecialiseerde vibecoding-instrumenten, zoals Cursor, Replit en
                  Lovable. Die laatste twee heb ik vrij uitgebreid uitgeprobeerd, ze werken minstens even
                  goed als Codex en hebben een rijkere interface. Het probleem is dat je er doorgaans
                  niet in slaagt om een app helemaal af te werken met de gratis versie van Replit of
                  Lovable, dus je moet betalen – en dan betaal ik liever voor ChatGPT Plus of Gemini Pro,
                  zodat ik én kan vibecoden én een betere chatbot ter beschikking heb.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Mijn Gezinskalender besloot ik dus verder af te werken met ChatGPT Codex. Dat kan
                  gewoon op het web, maar ik installeerde het programma ChatGPT Codex CLI. Zo had Codex
                  rechtstreeks toegang tot de bestanden op mijn pc. En, simpel gezegd: wat toen gebeurde,
                  lijkt wel toverij. Stap voor stap begon Codex mijn programma te verbeteren, op basis
                  van mijn suggesties maar ook op eigen initiatief. Twintig minuten later leek de app
                  eigenlijk klaar om in de app stores van Apple en Google aan te bieden (behalve dat het,
                  strikt gesproken, geen echte app maar een Progressive Web App is: je kunt haar bewaren
                  met een icoontje op je smartphone-scherm, maar je downloadt haar niet via de appstore).
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  In totaal heeft mijn afgewerkte Gezinskalender mij een halve dag werk gekost. Maar in
                  die tijd heb ik enorm veel geleerd en bijvoorbeeld ook accounts op Supabase en Vercel
                  gemaakt. Ik weet zeker dat ik een app van deze complexiteit een volgende keer in de
                  helft van die tijd in elkaar gestoken krijg.
                </p>
              </section>

              <section id="voorkennis" className="space-y-4">
                <h2 className="font-serif text-3xl text-slate-900">Voorkennis</h2>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Nog een tip voor wie zijn weg zoekt in vibecoding: in plaats van Kladblok te gebruiken,
                  heb ik intussen een ander gratis programma van Microsoft geïnstalleerd, VS Code. Met
                  Codex, VS Code en Github, soms nog gecombineerd met Supabase en Vercel, kun je haast
                  alles bouwen. Letterlijk zonder een lijn code te schrijven, of zelfs maar te lezen.
                  Tussen mijn eerste Javascript-game en de apps die ik nu met Codex bouw, moest ik wel
                  heel wat kennis opbouwen over al die componenten. Ik schat dat ik daar twee of drie
                  dagen over heb gedaan.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Hoe groot je voorkennis is, maakt een verschil. Ik heb in mijn jeugd wat leren
                  programmeren, in de programmeertaal Basic (op een Sinclair ZX-81, heus!). Net
                  voldoende om een beetje te begrijpen wat er aan het gebeuren is als die chatbot code
                  genereert. Dat heeft mij zeker geholpen, maar mensen zonder enige programmeerkennis
                  slagen erin om gelijkaardige apps te vibecoden.
                </p>
                <p className="font-sans text-lg leading-relaxed text-slate-700">
                  Nog iets: agentic programmeren evolueert momenteel razendsnel. Wat zes maanden geleden
                  uren werk kostte, komt nu in één keer uit ChatGPT gerold. Iets vrij complex als mijn
                  Gezinskalender duurt nu enkele uren, maar kun je over een paar weken of maanden
                  waarschijnlijk met twee-drie prompts genereren.
                </p>
              </section>

              <section className="space-y-5 rounded-md border border-slate-200 bg-slate-50 p-6">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                    LEES OOK
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-base text-slate-800">
                    <li>
                      <Link href="/" className="transition-all duration-300 hover:text-slate-950 hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95">
                        Echt waar: niks AI
                      </Link>
                    </li>
                    <li>
                      <Link href="/article-3" className="transition-all duration-300 hover:text-slate-950 hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95">
                        Mijn destructieve cyberhuwelijk met Claude
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Inspiratie", "De helpdesk", "Helpdesk"].map((tag) => (
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
                  rubriek="DE TECHNOCRAAT"
                  title="Was het verzet van Dario Amodei tegen minister Hegseth het Spartacus-moment?"
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