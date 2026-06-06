const translations = {
  fr: {
    navHome: "Accueil",
    navRead: "Lire",
    navFiles: "Dossiers",
    navTimeline: "Chronologie",
    navAuthor: "Auteur",
    badge: "DOSSIER OUVERT • BOOK ONE",
    heroText: "Un garçon de quinze ans, une mémoire qui n’appartient pas à cette vie, et des histoires qui ouvrent des portes que personne ne sait refermer.",
    readNow: "Lire les chapitres",
    openFiles: "Ouvrir les dossiers",
    signal: "Signal inconnu détecté",
    quote: "“La ville est très douée pour prétendre que rien ne s’est passé.”",
    quoteBy: "— Luke Jean, carnet privé",
    reader: "LECTEUR",
    readerIntro: "Les chapitres sont présentés comme des fichiers d’enquête. Chaque entrée garde le mystère sans tout révéler avant la lecture complète.",
    files: "DOSSIERS CLASSIFIÉS",
    filesIntro: "Les éléments centraux de l’histoire : personnes, lieux, phénomènes et indices qui reviennent d’un chapitre à l’autre.",
    timeline: "CHRONOLOGIE DES INCIDENTS",
    timelineIntro: "Une ligne du temps simple pour comprendre comment l’incursion commence, se propage, puis laisse des traces.",
    about: "À PROPOS DU PROJET",
    aboutText: "NIGHTMARES est une fiction de cosmic horror et de super-héros, construite autour d’un principe dangereux : lorsqu’une histoire est assez profonde, elle peut devenir réelle.",
    author: "Auteur",
    authorText: "Auteur du projet NIGHTMARES. Cette première version du site est pensée pour être publiée gratuitement sur GitHub Pages.",
    footer: "NIGHTMARES • The First Incursion • Site bilingue GitHub Pages",
    searchPlaceholder: "Chercher un chapitre, personnage, lieu...",
    langBtn: "English",
    readExcerpt: "Voir l’extrait",
    noResults: "Aucun résultat trouvé."
  },
  en: {
    navHome: "Home",
    navRead: "Read",
    navFiles: "Files",
    navTimeline: "Timeline",
    navAuthor: "Author",
    badge: "OPEN CASE • BOOK ONE",
    heroText: "A fifteen-year-old boy, a memory that does not belong to this life, and stories that open doors no one knows how to close.",
    readNow: "Read chapters",
    openFiles: "Open files",
    signal: "Unknown signal detected",
    quote: "“The city is very good at pretending nothing happened.”",
    quoteBy: "— Luke Jean, private notebook",
    reader: "READER",
    readerIntro: "The chapters are presented as investigation files. Each entry keeps the mystery alive without revealing too much before the full read.",
    files: "CLASSIFIED FILES",
    filesIntro: "The central elements of the story: people, places, phenomena, and clues that return from chapter to chapter.",
    timeline: "INCIDENT TIMELINE",
    timelineIntro: "A clean timeline to understand how the incursion begins, spreads, and leaves traces behind.",
    about: "ABOUT THE PROJECT",
    aboutText: "NIGHTMARES is a cosmic horror and superhero fiction built around one dangerous rule: when a story is deep enough, it can become real.",
    author: "Author",
    authorText: "Creator of NIGHTMARES. This first version of the site is designed to be published for free on GitHub Pages.",
    footer: "NIGHTMARES • The First Incursion • Bilingual GitHub Pages site",
    searchPlaceholder: "Search chapter, character, place...",
    langBtn: "Français",
    readExcerpt: "Read excerpt",
    noResults: "No result found."
  }
};

const chapters = [
  {
    roman: "ONE",
    title: { fr: "La Dernière Phrase", en: "The Last Sentence" },
    tag: { fr: "Origine", en: "Origin" },
    summary: {
      fr: "Luke Jean retrouve la mémoire d’une ancienne vie, découvre le système, et comprend que ses histoires peuvent manifester des entités dans le réel.",
      en: "Luke Jean recovers the memory of a previous life, discovers the system, and realizes his stories can manifest entities into reality."
    },
    excerpt: {
      fr: "La dernière chose qu’il tapa fut un point-virgule. Pas un point. Pas un point d’exclamation.",
      en: "The last thing he typed was a semicolon. Not a period. Not an exclamation mark."
    }
  },
  {
    roman: "TWO",
    title: { fr: "Ce Qui Vient Quand On L’Appelle", en: "What Comes When You Call It" },
    tag: { fr: "Première incursion", en: "First incursion" },
    summary: {
      fr: "Après avoir publié son premier livre, Luke sent l’air changer. Une créature traverse la membrane de la réalité.",
      en: "After publishing his first book, Luke feels the air change. A creature crosses the membrane of reality."
    },
    excerpt: {
      fr: "À 3h14 du matin, quelque chose déchira le tissu de la réalité à quatre pâtés de maisons de son appartement.",
      en: "At 3:14 AM, something tore through the fabric of reality four blocks from his apartment."
    }
  },
  {
    roman: "THREE",
    title: { fr: "Le Garçon Qui Posait Les Bonnes Questions", en: "The Boy Who Asked the Right Questions" },
    tag: { fr: "Peter Parker", en: "Peter Parker" },
    summary: {
      fr: "Le livre de Luke commence à circuler. Peter Parker remarque trop de détails justes et contacte Luke.",
      en: "Luke’s book begins to spread. Peter Parker notices too many accurate details and contacts Luke."
    },
    excerpt: {
      fr: "Le lecteur dangereux n’est pas celui qui croit tout. C’est celui qui comprend.",
      en: "The dangerous reader is not the one who believes everything. It is the one who understands."
    }
  },
  {
    roman: "INTERLUDE",
    title: { fr: "Sept Personnes Dans Le Noir", en: "Seven People in the Dark" },
    tag: { fr: "Meridian Tower", en: "Meridian Tower" },
    summary: {
      fr: "Sans que Luke le sache, sept employés de nuit vivent l’incident de Meridian Tower.",
      en: "Without Luke knowing, seven night-shift employees experience the Meridian Tower incident."
    },
    excerpt: {
      fr: "Ce qui suit arriva sans que Luke Jean le sache. Le système n’envoya aucune notification. Il dormait.",
      en: "What follows happened without Luke Jean’s knowledge. The system sent no notification. He was asleep."
    }
  },
  {
    roman: "FIVE",
    title: { fr: "Ce Que Marco Ramena Chez Lui", en: "What Marco Brought Home" },
    tag: { fr: "Contamination", en: "Contamination" },
    summary: {
      fr: "Deux semaines après Meridian Tower, Marco tente de vivre normalement. Mais quelque chose l’a suivi.",
      en: "Two weeks after Meridian Tower, Marco tries to live normally. But something followed him home."
    },
    excerpt: {
      fr: "Marco Reyes allait bien. C’était la phrase qu’il répétait.",
      en: "Marco Reyes was doing fine. That was the phrase he kept using."
    }
  },
  {
    roman: "SIX",
    title: { fr: "Là Où Rien Ne S’Est Passé", en: "Where Nothing Happened" },
    tag: { fr: "Enquête", en: "Investigation" },
    summary: {
      fr: "Luke reçoit un message vocal impossible, voit Meridian Tower aux informations et commence à chercher les noms des disparus.",
      en: "Luke receives an impossible voicemail, sees Meridian Tower on the news, and begins searching for the missing names."
    },
    excerpt: {
      fr: "Le message vocal existait encore le matin. C’était à la fois rassurant et extrêmement gênant.",
      en: "The voicemail still existed in the morning. This was both comforting and extremely inconvenient."
    }
  }
];

const dossiers = [
  {
    icon: "📖",
    title: { fr: "Luke Jean", en: "Luke Jean" },
    type: { fr: "Hôte / Auteur / Ancre", en: "Host / Author / Anchor" },
    body: {
      fr: "Quinze ans, mais porteur d’une vie précédente. Il écrit des histoires qui ne restent pas toujours des histoires.",
      en: "Fifteen years old, but carrying a previous life. He writes stories that do not always stay stories."
    }
  },
  {
    icon: "⚠️",
    title: { fr: "Meridian Tower", en: "Meridian Tower" },
    type: { fr: "Lieu d’incident", en: "Incident site" },
    body: {
      fr: "Une tour de verre noir sur la 6e Avenue. Son lobby contient la Meridian Rose.",
      en: "A black-glass tower on 6th Avenue. Its lobby contains the Meridian Rose."
    }
  },
  {
    icon: "◉",
    title: { fr: "La Présence", en: "The Presence" },
    type: { fr: "Entité / Influence", en: "Entity / Influence" },
    body: {
      fr: "Elle attend, parle avec des voix familières, imite les phrases, et pousse les gens à ouvrir eux-mêmes la porte.",
      en: "It waits, speaks with familiar voices, imitates sentences, and pushes people to open the door themselves."
    }
  },
  {
    icon: "☎",
    title: { fr: "Le Message Vocal", en: "The Voicemail" },
    type: { fr: "Signal impossible", en: "Impossible signal" },
    body: {
      fr: "Pas de numéro. Pas d’horodatage. Pas d’appel dans l’historique. Une phrase revient : “Je me souviens de la rose.”",
      en: "No number. No timestamp. No call in the history. One line returns: “I remember the rose.”"
    }
  }
];

const timelineItems = [
  {
    time: { fr: "Vie précédente", en: "Previous life" },
    title: { fr: "Le point-virgule", en: "The semicolon" },
    body: {
      fr: "Luke meurt devant une phrase inachevée. Quelque chose le remarque.",
      en: "Luke dies in front of an unfinished sentence. Something notices."
    }
  },
  {
    time: { fr: "15e anniversaire", en: "15th birthday" },
    title: { fr: "Initialisation", en: "Initialization" },
    body: {
      fr: "Les souvenirs reviennent et le système révèle la Manifestation Narrative.",
      en: "The memories return and the system reveals Narrative Manifestation."
    }
  },
  {
    time: { fr: "Après publication", en: "After publication" },
    title: { fr: "Première incursion", en: "First incursion" },
    body: {
      fr: "Une créature traverse la membrane après la mise en ligne du livre.",
      en: "A creature crosses the membrane after the book goes online."
    }
  },
  {
    time: { fr: "Meridian Tower", en: "Meridian Tower" },
    title: { fr: "Sept employés dans le noir", en: "Seven employees in the dark" },
    body: {
      fr: "Ascenseurs, radios, miroirs et corridors cessent d’obéir aux règles normales.",
      en: "Elevators, radios, mirrors, and corridors stop obeying normal rules."
    }
  },
  {
    time: { fr: "Deux semaines plus tard", en: "Two weeks later" },
    title: { fr: "Marco rapporte quelque chose", en: "Marco brings something home" },
    body: {
      fr: "La contamination quitte la tour et s’installe dans la vie privée de Marco.",
      en: "The contamination leaves the tower and enters Marco’s private life."
    }
  },
  {
    time: { fr: "Chapitre 6", en: "Chapter 6" },
    title: { fr: "Luke cherche les noms", en: "Luke searches the names" },
    body: {
      fr: "Un message vocal impossible mène Luke vers la Meridian Rose et les disparus.",
      en: "An impossible voicemail leads Luke toward the Meridian Rose and the missing."
    }
  }
];

let currentLang = localStorage.getItem("nightmares-lang") === "en" ? "en" : "fr";

// Références DOM mises en cache (évite les requêtes répétées)
const el = {
  search: document.getElementById("search"),
  chapters: document.getElementById("chapters"),
  dossiers: document.getElementById("dossiers"),
  timeline: document.getElementById("timelineList"),
  langBtn: document.getElementById("langBtn"),
  modal: document.getElementById("modal"),
  modalRoman: document.getElementById("modalRoman"),
  modalTitle: document.getElementById("modalTitle"),
  modalSummary: document.getElementById("modalSummary"),
  modalExcerpt: document.getElementById("modalExcerpt"),
  closeModal: document.getElementById("closeModal")
};

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function applyTranslations() {
  const t = translations[currentLang];
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (t[key]) node.textContent = t[key];
  });

  if (el.search) {
    el.search.placeholder = t.searchPlaceholder;
  }

  el.langBtn.textContent = t.langBtn;

  renderChapters();
  renderDossiers();
  renderTimeline();
}

function renderChapters() {
  const q = el.search ? el.search.value.trim().toLowerCase() : "";
  const wrap = el.chapters;
  const t = translations[currentLang];

  const filtered = chapters
    .map((ch, index) => ({ ch, index }))
    .filter(({ ch }) => {
      const text = [
        ch.roman,
        ch.title.fr,
        ch.title.en,
        ch.tag.fr,
        ch.tag.en,
        ch.summary.fr,
        ch.summary.en
      ].join(" ").toLowerCase();

      return text.includes(q);
    });

  if (!filtered.length) {
    wrap.innerHTML = `<p class="chapterCard">${t.noResults}</p>`;
    return;
  }

  wrap.innerHTML = filtered.map(({ ch, index }) => `
    <article class="chapterCard">
      <div class="chapterTop">
        <span>${ch.roman}</span>
        <span>${ch.tag[currentLang]}</span>
      </div>
      <h3>${ch.title[currentLang]}</h3>
      <p>${ch.summary[currentLang]}</p>
      <button class="readBtn" data-chapter="${index}">${t.readExcerpt}</button>
    </article>
  `).join("");
}

function renderDossiers() {
  const wrap = el.dossiers;

  wrap.innerHTML = dossiers.map(item => `
    <article class="fileCard">
      <div class="fileIcon">${item.icon}</div>
      <p class="eyebrow">${item.type[currentLang]}</p>
      <h3>${item.title[currentLang]}</h3>
      <p>${item.body[currentLang]}</p>
    </article>
  `).join("");
}

function renderTimeline() {
  const wrap = el.timeline;

  wrap.innerHTML = timelineItems.map(item => `
    <article class="timelineItem">
      <p class="eyebrow">${item.time[currentLang]}</p>
      <h3>${item.title[currentLang]}</h3>
      <p>${item.body[currentLang]}</p>
    </article>
  `).join("");
}

function openChapter(index) {
  const ch = chapters[index];
  if (!ch) return;

  el.modalRoman.textContent = ch.roman;
  el.modalTitle.textContent = ch.title[currentLang];
  el.modalSummary.textContent = ch.summary[currentLang];
  el.modalExcerpt.textContent = `“${ch.excerpt[currentLang]}”`;

  el.modal.classList.remove("hidden");
}

function closeModal() {
  el.modal.classList.add("hidden");
}

el.langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("nightmares-lang", currentLang);
  applyTranslations();
});

el.search.addEventListener("input", renderChapters);

// Délégation d'événements : un seul écouteur pour tous les boutons de chapitre
el.chapters.addEventListener("click", event => {
  const btn = event.target.closest("[data-chapter]");
  if (btn) openChapter(Number(btn.dataset.chapter));
});

el.closeModal.addEventListener("click", closeModal);

el.modal.addEventListener("click", event => {
  if (event.target === el.modal) closeModal();
});

// Fermeture du modal avec la touche Échap
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !el.modal.classList.contains("hidden")) {
    closeModal();
  }
});

applyTranslations();
