import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Icon = ({ children, className = "" }) => <span className={className} aria-hidden="true">{children}</span>;

const copy = {
  fr: {
    nav: ["Accueil", "Lire", "Dossiers", "Chronologie", "Auteur"],
    badge: "DOSSIER OUVERT • BOOK ONE",
    heroTitle: "NIGHTMARES",
    heroSubtitle: "The First Incursion",
    heroText:
      "Un garçon de quinze ans, une mémoire qui n’appartient pas à cette vie, et des histoires qui ouvrent des portes que personne ne sait refermer.",
    readNow: "Lire les chapitres",
    openFiles: "Ouvrir les dossiers",
    signal: "Signal inconnu détecté",
    quote: "La ville est très douée pour prétendre que rien ne s’est passé.",
    quoteBy: "— Luke Jean, carnet privé",
    sectionReader: "Lecteur",
    readerIntro:
      "Les chapitres sont présentés comme des fichiers d’enquête. Chaque entrée garde le mystère sans tout révéler avant la lecture complète.",
    statusOnline: "Disponible",
    statusLocked: "À venir",
    readExcerpt: "Voir l’extrait",
    close: "Fermer",
    dossiers: "Dossiers classifiés",
    dossiersIntro:
      "Les éléments centraux de l’histoire : personnes, lieux, phénomènes et indices qui reviennent d’un chapitre à l’autre.",
    timeline: "Chronologie des incidents",
    timelineIntro:
      "Une ligne du temps simple pour comprendre comment l’incursion commence, se propage, puis laisse des traces.",
    about: "À propos du projet",
    aboutText:
      "NIGHTMARES est une fiction de cosmic horror et de super-héros, construite autour d’un principe dangereux : lorsqu’une histoire est assez profonde, elle peut devenir réelle. Le site sert de vitrine officielle, de lecteur et de dossier d’enquête pour l’univers.",
    author: "Michael JP",
    authorText:
      "Auteur du projet NIGHTMARES. Cette première version du site est pensée pour être publiée gratuitement sur GitHub Pages, puis améliorée avec les textes complets, illustrations et pages de personnages.",
    language: "English",
    footer: "NIGHTMARES • The First Incursion • Site prototype bilingue",
    searchPlaceholder: "Chercher un chapitre, personnage, lieu...",
    noResults: "Aucun résultat trouvé. Le dossier reste silencieux."
  },
  en: {
    nav: ["Home", "Read", "Files", "Timeline", "Author"],
    badge: "OPEN CASE • BOOK ONE",
    heroTitle: "NIGHTMARES",
    heroSubtitle: "The First Incursion",
    heroText:
      "A fifteen-year-old boy, a memory that does not belong to this life, and stories that open doors no one knows how to close.",
    readNow: "Read chapters",
    openFiles: "Open files",
    signal: "Unknown signal detected",
    quote: "The city is very good at pretending nothing happened.",
    quoteBy: "— Luke Jean, private notebook",
    sectionReader: "Reader",
    readerIntro:
      "The chapters are presented as investigation files. Each entry keeps the mystery alive without revealing too much before the full read.",
    statusOnline: "Available",
    statusLocked: "Coming soon",
    readExcerpt: "Read excerpt",
    close: "Close",
    dossiers: "Classified files",
    dossiersIntro:
      "The central elements of the story: people, places, phenomena, and clues that return from chapter to chapter.",
    timeline: "Incident timeline",
    timelineIntro:
      "A clean timeline to understand how the incursion begins, spreads, and leaves traces behind.",
    about: "About the project",
    aboutText:
      "NIGHTMARES is a cosmic horror and superhero fiction built around one dangerous rule: when a story is deep enough, it can become real. This site works as the official showcase, reader, and case archive for the universe.",
    author: "Michael JP",
    authorText:
      "Creator of NIGHTMARES. This first version of the site is designed to be published for free on GitHub Pages, then expanded with full chapter text, illustrations, and character pages.",
    language: "Français",
    footer: "NIGHTMARES • The First Incursion • Bilingual site prototype",
    searchPlaceholder: "Search chapter, character, place...",
    noResults: "No result found. The file remains silent."
  }
};

const chapters = [
  {
    id: 1,
    roman: "ONE",
    title: { fr: "La Dernière Phrase", en: "The Last Sentence" },
    tag: { fr: "Origine", en: "Origin" },
    words: "2.0k",
    summary: {
      fr: "Luke Jean retrouve la mémoire d’une ancienne vie, découvre le système, et comprend que ses histoires peuvent manifester des entités dans le réel.",
      en: "Luke Jean recovers the memory of a previous life, discovers the system, and realizes his stories can manifest entities into reality."
    },
    excerpt: {
      fr: "La dernière chose qu’il tapa fut un point-virgule. Pas un point. Pas un point d’exclamation. Un point-virgule — cette ponctuation étrange qui signifie que la phrase n’est pas terminée.",
      en: "The last thing he typed was a semicolon. Not a period. Not an exclamation mark. A semicolon — that strange punctuation that means the sentence is not finished."
    }
  },
  {
    id: 2,
    roman: "TWO",
    title: { fr: "Ce Qui Vient Quand On L’Appelle", en: "What Comes When You Call It" },
    tag: { fr: "Première incursion", en: "First incursion" },
    words: "2.5k",
    summary: {
      fr: "Après avoir publié son premier livre, Luke sent l’air changer. Une créature traverse la membrane de la réalité, et le système lui confirme que l’incursion est réelle.",
      en: "After publishing his first book, Luke feels the air change. A creature crosses the membrane of reality, and the system confirms the incursion is real."
    },
    excerpt: {
      fr: "À 3h14 du matin, quelque chose déchira le tissu de la réalité à quatre pâtés de maisons de son appartement.",
      en: "At 3:14 AM, something tore through the fabric of reality four blocks from his apartment."
    }
  },
  {
    id: 3,
    roman: "THREE",
    title: { fr: "Le Garçon Qui Posait Les Bonnes Questions", en: "The Boy Who Asked the Right Questions" },
    tag: { fr: "Peter Parker", en: "Peter Parker" },
    words: "3.6k",
    summary: {
      fr: "Le livre de Luke commence à circuler. Parmi les lecteurs, Peter Parker remarque trop de détails justes et contacte Luke avec des questions dangereusement intelligentes.",
      en: "Luke’s book begins to spread. Among the readers, Peter Parker notices too many accurate details and contacts Luke with dangerously smart questions."
    },
    excerpt: {
      fr: "Le lecteur dangereux n’est pas celui qui croit tout. C’est celui qui comprend.",
      en: "The dangerous reader is not the one who believes everything. It is the one who understands."
    }
  },
  {
    id: 4,
    roman: "INTERLUDE",
    title: { fr: "Sept Personnes Dans Le Noir", en: "Seven People in the Dark" },
    tag: { fr: "Meridian Tower", en: "Meridian Tower" },
    words: "5.2k",
    summary: {
      fr: "Sans que Luke le sache, sept employés de nuit vivent l’incident de Meridian Tower. Le bâtiment commence à agir comme s’il apprenait à être autre chose.",
      en: "Without Luke knowing, seven night-shift employees experience the Meridian Tower incident. The building begins acting as if it is learning to become something else."
    },
    excerpt: {
      fr: "Ce qui suit arriva sans que Luke Jean le sache. Le système n’envoya aucune notification. Il dormait.",
      en: "What follows happened without Luke Jean’s knowledge. The system sent no notification. He was asleep."
    }
  },
  {
    id: 5,
    roman: "FIVE",
    title: { fr: "Ce Que Marco Ramena Chez Lui", en: "What Marco Brought Home" },
    tag: { fr: "Contamination", en: "Contamination" },
    words: "4.8k",
    summary: {
      fr: "Deux semaines après Meridian Tower, Marco tente de vivre normalement. Mais les pertes de temps, les vidéos de lui-même et les symboles prouvent que quelque chose l’a suivi.",
      en: "Two weeks after Meridian Tower, Marco tries to live normally. But missing time, footage of himself, and symbols prove something followed him home."
    },
    excerpt: {
      fr: "Marco Reyes allait bien. C’était la phrase qu’il répétait. À sa sœur. À son voisin. À lui-même, le matin, face au miroir.",
      en: "Marco Reyes was doing fine. That was the phrase he kept using. To his sister. To his neighbor. To himself, in the morning, facing the mirror."
    }
  },
  {
    id: 6,
    roman: "SIX",
    title: { fr: "Là Où Rien Ne S’Est Passé", en: "Where Nothing Happened" },
    tag: { fr: "Enquête", en: "Investigation" },
    words: "4.8k",
    summary: {
      fr: "Luke reçoit un message vocal impossible, voit Meridian Tower aux informations et commence à chercher les noms des disparus avant de se rendre sur place.",
      en: "Luke receives an impossible voicemail, sees Meridian Tower on the news, and begins searching for the missing names before going to the building."
    },
    excerpt: {
      fr: "Le message vocal existait encore le matin. C’était, décida Luke, à la fois rassurant et extrêmement gênant.",
      en: "The voicemail still existed in the morning. This was, Luke decided, both comforting and extremely inconvenient."
    }
  }
];

const dossiers = [
  {
    icon: "📖",
    key: "luke",
    title: { fr: "Luke Jean", en: "Luke Jean" },
    type: { fr: "Hôte / Auteur / Ancre", en: "Host / Author / Anchor" },
    body: {
      fr: "Quinze ans, mais porteur d’une vie précédente. Il écrit des histoires qui ne restent pas toujours des histoires. Son humour sert souvent de bouclier contre la terreur.",
      en: "Fifteen years old, but carrying a previous life. He writes stories that do not always stay stories. His humor often works as armor against terror."
    }
  },
  {
    icon: "⚠️",
    key: "meridian",
    title: { fr: "Meridian Tower", en: "Meridian Tower" },
    type: { fr: "Lieu d’incident", en: "Incident site" },
    body: {
      fr: "Une tour de verre noir sur la 6e Avenue. Son lobby contient la Meridian Rose, un motif au sol qui devient un point central de l’incursion.",
      en: "A black-glass tower on 6th Avenue. Its lobby contains the Meridian Rose, a floor inlay that becomes central to the incursion."
    }
  },
  {
    icon: "◉",
    key: "entity",
    title: { fr: "La Présence", en: "The Presence" },
    type: { fr: "Entité / Influence", en: "Entity / Influence" },
    body: {
      fr: "Elle ne chasse pas toujours. Elle attend, parle avec des voix familières, imite les phrases, et pousse les gens à ouvrir eux-mêmes la porte.",
      en: "It does not always hunt. It waits, speaks with familiar voices, imitates sentences, and pushes people to open the door themselves."
    }
  },
  {
    icon: "☎",
    key: "voicemail",
    title: { fr: "Le Message Vocal", en: "The Voicemail" },
    type: { fr: "Signal impossible", en: "Impossible signal" },
    body: {
      fr: "Pas de numéro. Pas d’horodatage. Pas d’appel dans l’historique. Une phrase revient : “Je me souviens de la rose.”",
      en: "No number. No timestamp. No call in the history. One line returns: “I remember the rose.”"
    }
  }
];

const timeline = [
  {
    time: { fr: "Vie précédente", en: "Previous life" },
    title: { fr: "Le point-virgule", en: "The semicolon" },
    body: { fr: "Luke meurt devant une phrase inachevée. Quelque chose le remarque.", en: "Luke dies in front of an unfinished sentence. Something notices." }
  },
  {
    time: { fr: "15e anniversaire", en: "15th birthday" },
    title: { fr: "Initialisation", en: "Initialization" },
    body: { fr: "Les souvenirs reviennent et le système révèle la Manifestation Narrative.", en: "The memories return and the system reveals Narrative Manifestation." }
  },
  {
    time: { fr: "Après publication", en: "After publication" },
    title: { fr: "Première incursion", en: "First incursion" },
    body: { fr: "Une créature traverse la membrane après la mise en ligne du livre.", en: "A creature crosses the membrane after the book goes online." }
  },
  {
    time: { fr: "Meridian Tower", en: "Meridian Tower" },
    title: { fr: "Sept employés dans le noir", en: "Seven employees in the dark" },
    body: { fr: "Ascenseurs, radios, miroirs et corridors cessent d’obéir aux règles normales.", en: "Elevators, radios, mirrors, and corridors stop obeying normal rules." }
  },
  {
    time: { fr: "Deux semaines plus tard", en: "Two weeks later" },
    title: { fr: "Marco rapporte quelque chose", en: "Marco brings something home" },
    body: { fr: "La contamination quitte la tour et s’installe dans la vie privée de Marco.", en: "The contamination leaves the tower and enters Marco’s private life." }
  },
  {
    time: { fr: "Chapitre 6", en: "Chapter 6" },
    title: { fr: "Luke cherche les noms", en: "Luke searches the names" },
    body: { fr: "Un message vocal impossible mène Luke vers la Meridian Rose et les disparus.", en: "An impossible voicemail leads Luke toward the Meridian Rose and the missing." }
  }
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NightmaresSite() {
  const [lang, setLang] = useState("fr");
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const t = copy[lang];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chapters;
    return chapters.filter((c) => {
      const haystack = [c.title.fr, c.title.en, c.tag.fr, c.tag.en, c.summary.fr, c.summary.en, c.roman]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <main className="min-h-screen bg-[#06070b] text-slate-100 selection:bg-red-500/40">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(148,31,45,0.28),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(50,80,120,0.18),transparent_35%),linear-gradient(180deg,#080a10,#030407_70%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToId("home")} className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-red-400/30 bg-red-500/10 shadow-lg shadow-red-950/30">
              <Icon className="text-lg text-red-200">☾</Icon>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold tracking-[0.35em] text-red-200">NIGHTMARES</p>
              <p className="text-xs text-slate-400">The First Incursion</p>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {["home", "read", "files", "timeline", "author"].map((id, index) => (
              <button key={id} onClick={() => scrollToId(id)} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                {t.nav[index]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "fr" ? "en" : "fr")} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
              <Icon className="text-sm">◎</Icon> {t.language}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/10 bg-white/5 p-2 md:hidden">
              {menuOpen ? <Icon className="text-lg">×</Icon> : <Icon className="text-lg">☰</Icon>}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 md:hidden">
              <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
                {["home", "read", "files", "timeline", "author"].map((id, index) => (
                  <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }} className="rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10">
                    {t.nav[index]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-red-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-300" /> {t.badge}
          </div>
          <h1 className="max-w-4xl text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
            {t.heroTitle}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-red-100/90 sm:text-3xl">{t.heroSubtitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollToId("read")} className="rounded-2xl bg-red-100 px-6 py-3 font-semibold text-[#14070a] shadow-2xl shadow-red-950/50 transition hover:-translate-y-0.5 hover:bg-white">
              {t.readNow}
            </button>
            <button onClick={() => scrollToId("files")} className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              {t.openFiles}
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-red-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">SYSTEM LOG</p>
                <p className="mt-1 font-mono text-sm text-red-100">HOST IDENTIFIED: LUKE JEAN</p>
              </div>
              <Icon className="text-lg text-red-200">✦</Icon>
            </div>
            <div className="py-8">
              <div className="mx-auto grid aspect-square max-w-sm place-items-center rounded-full border border-red-200/20 bg-[radial-gradient(circle,rgba(255,255,255,.08),transparent_55%)]">
                <div className="relative grid h-56 w-56 place-items-center rounded-full border border-white/10">
                  {[...Array(8)].map((_, i) => (
                    <span key={i} className="absolute h-28 w-px origin-bottom bg-gradient-to-t from-red-200/70 to-transparent" style={{ transform: `translateY(-56px) rotate(${i * 45}deg)` }} />
                  ))}
                  <div className="h-16 w-16 rounded-full border border-red-200/30 bg-black shadow-inner shadow-red-900/50" />
                  <p className="absolute bottom-6 font-mono text-[10px] uppercase tracking-[0.25em] text-red-100/70">Meridian Rose</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-red-200/10 bg-black/40 p-4 font-mono text-sm text-slate-300">
              <p className="text-red-100">{t.signal}</p>
              <p className="mt-2 text-slate-400">“{t.quote}”</p>
              <p className="mt-2 text-xs text-slate-500">{t.quoteBy}</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="read" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">{t.sectionReader}</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Book One</h2>
            <p className="mt-4 max-w-2xl text-slate-300">{t.readerIntro}</p>
          </div>
          <div className="relative w-full md:max-w-sm">
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">⌕</Icon>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-red-200/40" />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center text-slate-400">{t.noResults}</div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((chapter) => (
              <motion.article key={chapter.id} layout className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-red-200/30 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-red-200">{chapter.roman}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{chapter.title[lang]}</h3>
                  </div>
                  <span className="rounded-full border border-emerald-200/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">{t.statusOnline}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{chapter.summary[lang]}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{chapter.tag[lang]} • {chapter.words}</span>
                  <button onClick={() => setSelected(chapter)} className="rounded-full px-4 py-2 text-sm font-semibold text-red-100 transition hover:bg-red-500/10">
                    {t.readExcerpt}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      <section id="files" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">{t.dossiers}</p>
          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Case Archive</h2>
          <p className="mt-4 max-w-2xl text-slate-300">{t.dossiersIntro}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dossiers.map((item) => {
            return (
              <article key={item.key} className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-xl text-red-100">
                  {item.icon}
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.type[lang]}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{item.title[lang]}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.body[lang]}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">{t.timeline}</p>
          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Incident Chain</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">{t.timelineIntro}</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <div className="space-y-6">
            {timeline.map((event, index) => (
              <div key={index} className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? "md:text-left" : "md:text-right"}`}>
                <div className={index % 2 ? "md:col-start-2" : ""}>
                  <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                    <span className="absolute -left-[2.05rem] top-7 h-4 w-4 rounded-full border border-red-200/50 bg-red-950 md:left-auto md:right-[-2.05rem]" />
                    {index % 2 === 1 && <span className="absolute -left-[2.05rem] top-7 hidden h-4 w-4 rounded-full border border-red-200/50 bg-red-950 md:block" />}
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-red-200">{event.time[lang]}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">{event.title[lang]}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{event.body[lang]}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="author" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">{t.about}</p>
            <h2 className="mt-3 text-4xl font-bold text-white">NIGHTMARES</h2>
            <p className="mt-5 leading-8 text-slate-300">{t.aboutText}</p>
          </div>
          <div className="rounded-[2rem] border border-red-200/20 bg-red-500/10 p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-black/30 p-3">
              <Icon className="text-2xl text-red-100">▤</Icon>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">{t.author}</p>
            <p className="mt-5 leading-8 text-slate-200">{t.authorText}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-slate-500">
        {t.footer}
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div initial={{ y: 20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.98 }} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-[2rem] border border-white/10 bg-[#090b12] p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-red-200">{selected.roman}</p>
                  <h3 className="mt-2 text-3xl font-bold text-white">{selected.title[lang]}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="rounded-full bg-white/5 p-2 hover:bg-white/10">
                  <Icon className="text-lg">×</Icon>
                </button>
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-400">{selected.summary[lang]}</p>
              <blockquote className="mt-6 rounded-2xl border-l-2 border-red-200 bg-white/[0.03] p-5 text-lg leading-8 text-slate-100">
                “{selected.excerpt[lang]}”
              </blockquote>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setSelected(null)} className="rounded-2xl bg-red-100 px-5 py-3 font-semibold text-[#14070a] hover:bg-white">
                  {t.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
