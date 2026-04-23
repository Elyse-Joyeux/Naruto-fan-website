export interface Hero {
  name: string;
  title: string;
  village: string;
  rank: string;
  clan: string;
  image: string;
  bio: string;
  abilities: string[];
  achievements: string[];
  signature: string;
  relationships: string[];
  quote: string;
  arc: "Part 1" | "Shippuden" | "War Arc";
  powerStats: {
    speed: number;
    iq: number;
    chakra: number;
    taijutsu: number;
  };
}

export interface War {
  name: string;
  duration: string;
  description: string;
  keyEvents: string[];
  casualties: string;
  outcome: string;
  image: string;
  timeline: string[];
}

export interface Mission {
  name: string;
  rank: "D" | "C" | "B" | "A" | "S";
  team: string;
  objective: string;
  outcome: string;
  notableEvents: string[];
  quote: string;
}

export interface VideoEntry {
  title: string;
  description: string;
  videoId: string;
  category: string;
}

export interface Clan {
  name: string;
  kekkeiGenkai: string;
  specialty: string;
  members: string[];
}

export interface Jutsu {
  name: string;
  type: string;
  rank: "C" | "B" | "A" | "S";
  users: string[];
  firstAppearance: string;
}

export const heroes: Hero[] = [
  {
    name: "Naruto Uzumaki",
    title: "The Seventh Hokage • Child of Prophecy",
    village: "Konohagakure",
    rank: "Hokage",
    clan: "Uzumaki",
    image: "https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png",
    bio: "Born with the Nine-Tailed Fox sealed inside him, Naruto faced rejection and loneliness but never gave up on his dream.",
    abilities: ["Kurama Link Mode", "Six Paths Sage Mode", "Rasenshuriken", "Shadow Clone Jutsu"],
    achievements: ["Defeated Pain", "Helped end Fourth War", "Became Seventh Hokage"],
    signature: "Rasengan",
    relationships: ["Sasuke (rival-brother)", "Jiraiya (mentor)", "Hinata (wife)"],
    quote: "I'm not gonna run away, I never go back on my word.",
    arc: "War Arc",
    powerStats: { speed: 9, iq: 7, chakra: 10, taijutsu: 8 }
  },
  {
    name: "Sasuke Uchiha",
    title: "The Shadow Hokage • Last Uchiha",
    village: "Konohagakure",
    rank: "Rogue Ninja",
    clan: "Uchiha",
    image: "https://static.wikia.nocookie.net/naruto/images/5/58/Sasuke_Part_2.png",
    bio: "After his clan's massacre, Sasuke pursued revenge before finding redemption as Konoha's protector from the shadows.",
    abilities: ["Rinnegan", "Amaterasu", "Perfect Susanoo", "Chidori"],
    achievements: ["Defeated Danzō", "Fought Kaguya", "Protects the village from the shadows"],
    signature: "Chidori",
    relationships: ["Naruto (rival)", "Itachi (brother)", "Sakura (wife)"],
    quote: "I have long since closed my eyes... My only goal is in the darkness.",
    arc: "War Arc",
    powerStats: { speed: 9, iq: 8, chakra: 9, taijutsu: 8 }
  },
  {
    name: "Itachi Uchiha",
    title: "The Clan Killer • Konoha's Martyr",
    village: "Konohagakure",
    rank: "ANBU Captain",
    clan: "Uchiha",
    image: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png",
    bio: "A prodigy who carried unbearable burdens to prevent war, living as a villain to protect his brother and village.",
    abilities: ["Tsukuyomi", "Amaterasu", "Susanoo", "Izanami"],
    achievements: ["Prevented Uchiha coup", "Akatsuki double-agent", "Protected Sasuke"],
    signature: "Tsukuyomi",
    relationships: ["Sasuke (brother)", "Shisui (friend)", "Konoha (duty)"],
    quote: "People live their lives bound by what they accept as correct and true.",
    arc: "Shippuden",
    powerStats: { speed: 8, iq: 10, chakra: 8, taijutsu: 7 }
  },
  {
    name: "Madara Uchiha",
    title: "Ghost of the Uchiha",
    village: "Konohagakure",
    rank: "Co-Founder",
    clan: "Uchiha",
    image: "https://static.wikia.nocookie.net/naruto/images/a/ae/Madara_Uchiha.png",
    bio: "Co-founder of Konoha who sought peace through domination and became one of history's most powerful shinobi.",
    abilities: ["Rinnegan", "Perfect Susanoo", "Limbo", "Infinite Tsukuyomi"],
    achievements: ["Fought entire Allied Forces", "Became Ten-Tails Jinchūriki"],
    signature: "Perfect Susanoo",
    relationships: ["Hashirama (rival)", "Obito (pawn)", "Black Zetsu (manipulator)"],
    quote: "Wake up to reality. Nothing ever goes as planned in this world.",
    arc: "War Arc",
    powerStats: { speed: 8, iq: 9, chakra: 10, taijutsu: 9 }
  },
  {
    name: "Kakashi Hatake",
    title: "The Copy Ninja • Sixth Hokage",
    village: "Konohagakure",
    rank: "Hokage",
    clan: "Hatake",
    image: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png",
    bio: "A brilliant shinobi and Team 7 leader who turned pain into leadership and protected Konoha through multiple eras.",
    abilities: ["Kamui", "Lightning Blade", "1,000 copied jutsu"],
    achievements: ["Led Team 7", "Became Sixth Hokage"],
    signature: "Lightning Blade",
    relationships: ["Obito (teammate)", "Naruto (student)", "Minato (teacher)"],
    quote: "Those who abandon their friends are worse than scum.",
    arc: "Shippuden",
    powerStats: { speed: 8, iq: 9, chakra: 7, taijutsu: 8 }
  },
  {
    name: "Minato Namikaze",
    title: "The Yellow Flash • Fourth Hokage",
    village: "Konohagakure",
    rank: "Hokage",
    clan: "Namikaze",
    image: "https://static.wikia.nocookie.net/naruto/images/7/70/Minato_Namikaze.png",
    bio: "The Fourth Hokage famed for unmatched speed and sacrifice, who sealed the Nine-Tails into his son to save the village.",
    abilities: ["Flying Thunder God", "Rasengan", "Sealing Jutsu"],
    achievements: ["Youngest Hokage", "Saved Konoha from Nine-Tails"],
    signature: "Flying Thunder God",
    relationships: ["Naruto (son)", "Kushina (wife)", "Jiraiya (mentor)"],
    quote: "As long as there is hope, there is always a path forward.",
    arc: "Part 1",
    powerStats: { speed: 10, iq: 9, chakra: 8, taijutsu: 8 }
  },
  {
    name: "Sakura Haruno",
    title: "Medical Ninja • Student of Tsunade",
    village: "Konohagakure",
    rank: "Jonin",
    clan: "Haruno",
    image: "https://static.wikia.nocookie.net/naruto/images/3/3e/Sakura_Haruno.png",
    bio: "Sakura grows from a genin into one of the strongest kunoichi, mastering medical ninjutsu and superhuman strength.",
    abilities: ["Chakra Enhanced Strength", "Medical Ninjutsu", "Byakugo Seal"],
    achievements: ["Defeated Sasori with Chiyo", "Healed countless shinobi in the war"],
    signature: "Cherry Blossom Impact",
    relationships: ["Naruto (teammate)", "Sasuke (husband)", "Tsunade (mentor)"],
    quote: "A smile is the easiest way out of a difficult situation.",
    arc: "Shippuden",
    powerStats: { speed: 7, iq: 8, chakra: 8, taijutsu: 9 }
  },
  {
    name: "Shikamaru Nara",
    title: "Genius Strategist • Eighth Hokage's Advisor",
    village: "Konohagakure",
    rank: "Jonin",
    clan: "Nara",
    image: "https://static.wikia.nocookie.net/naruto/images/9/97/Shikamaru_Nara.png",
    bio: "The tactical mastermind of Konoha known for his shadow techniques and battle intelligence.",
    abilities: ["Shadow Possession Jutsu", "Shadow Strangle", "Battle Strategy"],
    achievements: ["Defeated Hidan", "Led multiple successful war squads"],
    signature: "Shadow Possession",
    relationships: ["Choji (best friend)", "Asuma (mentor)", "Temari (wife)"],
    quote: "It's such a drag...",
    arc: "Shippuden",
    powerStats: { speed: 6, iq: 10, chakra: 7, taijutsu: 5 }
  },
  {
    name: "Hinata Hyuga",
    title: "Byakugan Princess • Gentle Fist Master",
    village: "Konohagakure",
    rank: "Jonin",
    clan: "Hyuga",
    image: "https://static.wikia.nocookie.net/naruto/images/9/97/Hinata_Part_II.png",
    bio: "Hinata overcomes fear and self-doubt, becoming a brave and skilled shinobi who follows her own ninja way.",
    abilities: ["Byakugan", "Gentle Fist", "Twin Lion Fists"],
    achievements: ["Protected Naruto against Pain", "Fought in the Fourth War"],
    signature: "Twin Lion Fists",
    relationships: ["Naruto (husband)", "Neji (cousin)", "Hanabi (sister)"],
    quote: "I never go back on my word, because that too is my ninja way.",
    arc: "Shippuden",
    powerStats: { speed: 7, iq: 7, chakra: 7, taijutsu: 8 }
  },
  {
    name: "Gaara",
    title: "Fifth Kazekage • Former Jinchuriki",
    village: "Sunagakure",
    rank: "Kage",
    clan: "Sabaku",
    image: "https://static.wikia.nocookie.net/naruto/images/9/93/Gaara.png",
    bio: "Once isolated like Naruto, Gaara becomes the Kazekage and one of the most respected leaders of his generation.",
    abilities: ["Sand Manipulation", "Absolute Defense", "Sand Mausoleum"],
    achievements: ["Became Fifth Kazekage", "Led divisions in the Fourth War"],
    signature: "Sand Tsunami",
    relationships: ["Naruto (friend)", "Kankuro (brother)", "Temari (sister)"],
    quote: "In order to escape a road of solitude, one has to work hard and forge a new path.",
    arc: "Shippuden",
    powerStats: { speed: 7, iq: 8, chakra: 8, taijutsu: 6 }
  },
  {
    name: "Rock Lee",
    title: "The Green Beast • Taijutsu Specialist",
    village: "Konohagakure",
    rank: "Jonin",
    clan: "Lee",
    image: "https://static.wikia.nocookie.net/naruto/images/7/70/Rock_Lee.png",
    bio: "A hard-working taijutsu specialist who proves effort and spirit can overcome natural talent.",
    abilities: ["Eight Gates", "Strong Fist", "Drunken Fist"],
    achievements: ["Defied prodigies in Chunin Exams", "Fought in Fourth War frontlines"],
    signature: "Primary Lotus",
    relationships: ["Might Guy (mentor)", "Neji (teammate)", "Tenten (teammate)"],
    quote: "A dropout will beat a genius through hard work.",
    arc: "Part 1",
    powerStats: { speed: 9, iq: 5, chakra: 6, taijutsu: 10 }
  }
];

export const wars: War[] = [
  {
    name: "Fourth Shinobi World War",
    duration: "2 Days",
    description: "The largest shinobi conflict sparked by Obito to capture all tailed beasts.",
    keyEvents: ["Allied Forces formed", "Ten-Tails revived", "Madara's revival", "Kaguya sealed"],
    casualties: "40,000+ shinobi",
    outcome: "Allied Victory",
    image: "https://static.wikia.nocookie.net/naruto/images/0/07/Fourth_Shinobi_World_War.png",
    timeline: ["Alliance formed", "Ten-Tails battle", "Six Paths awakening", "Final Valley duel"]
  },
  {
    name: "Third Shinobi World War",
    duration: "Several Years",
    description: "A brutal global war that shaped the legends of Minato, Kakashi, and the Sannin.",
    keyEvents: ["Kannabi Bridge", "Obito presumed dead", "Yellow Flash rises"],
    casualties: "Thousands",
    outcome: "Ceasefire",
    image: "https://static.wikia.nocookie.net/naruto/images/b/b4/Third_Shinobi_World_War.png",
    timeline: ["Village tensions rise", "Frontline escalation", "Kannabi Bridge", "War exhaustion ceasefire"]
  }
];

export const missions: Mission[] = [
  {
    name: "Land of Waves Mission",
    rank: "C",
    team: "Team 7",
    objective: "Protect Tazuna and complete the bridge.",
    outcome: "Success",
    notableEvents: ["First Zabuza fight", "Sasuke awakens Sharingan", "Haku's sacrifice"],
    quote: "A true shinobi endures."
  },
  {
    name: "Sasuke Recovery Mission",
    rank: "S",
    team: "Shikamaru-led retrieval squad",
    objective: "Bring Sasuke back before reaching Orochimaru.",
    outcome: "Failed",
    notableEvents: ["Sound Four battles", "Naruto vs Sasuke (Part 1)"],
    quote: "You are my friend."
  },
  {
    name: "Kazekage Rescue Mission",
    rank: "S",
    team: "Team Kakashi & Team Guy",
    objective: "Rescue Gaara from Akatsuki.",
    outcome: "Partial Success",
    notableEvents: ["Sakura vs Sasori", "Gaara revived by Chiyo"],
    quote: "A shinobi's life isn't measured by how they lived."
  }
];

export const videos: VideoEntry[] = [
  { title: "Naruto vs Sasuke - Final Valley", description: "The final clash between rivals.", videoId: "BCE1vJ5R1K4", category: "Epic Battle" },
  { title: "Madara vs Shinobi Alliance", description: "Madara dominates the battlefield.", videoId: "QhBnZ6NPOY0", category: "War Arc" },
  { title: "Itachi's Truth Revealed", description: "The truth behind Itachi's sacrifice.", videoId: "yPYZpwSpKmA", category: "Character Story" },
  { title: "Naruto vs Pain", description: "Konoha's savior returns.", videoId: "8oW2MilqOo0", category: "Epic Battle" }
];

export const facts = [
  { icon: "🍥", title: "Naruto's Name Origin", description: "Named after ramen topping fish cake and Jiraiya's novel character." },
  { icon: "👁️", title: "Sharingan Evolution", description: "Sharingan awakens through intense emotional events and can evolve to Mangekyō." },
  { icon: "⚡", title: "Nature Transformations", description: "Five base chakra natures combine into Kekkei Genkai like Wood and Ice release." }
];

export const clans: Clan[] = [
  { name: "Uchiha", kekkeiGenkai: "Sharingan", specialty: "Genjutsu and Fire Release", members: ["Sasuke", "Itachi", "Madara", "Obito"] },
  { name: "Uzumaki", kekkeiGenkai: "Exceptional life-force", specialty: "Sealing techniques", members: ["Naruto", "Kushina", "Nagato", "Karin"] },
  { name: "Hyuga", kekkeiGenkai: "Byakugan", specialty: "Gentle Fist taijutsu", members: ["Hinata", "Neji", "Hiashi", "Hanabi"] }
];

export const jutsuEncyclopedia: Jutsu[] = [
  { name: "Rasengan", type: "Ninjutsu", rank: "A", users: ["Naruto", "Minato", "Konohamaru"], firstAppearance: "Episode 86" },
  { name: "Chidori", type: "Ninjutsu", rank: "A", users: ["Sasuke", "Kakashi"], firstAppearance: "Episode 67" },
  { name: "Tsukuyomi", type: "Genjutsu", rank: "S", users: ["Itachi"], firstAppearance: "Episode 82" },
  { name: "Eight Gates", type: "Taijutsu", rank: "S", users: ["Might Guy", "Rock Lee"], firstAppearance: "Episode 50" }
];

export const arcTimeline = [
  { arc: "Part 1", period: "Academy to Valley of the End", highlight: "Naruto and Sasuke's first final battle." },
  { arc: "Shippuden", period: "Akatsuki era", highlight: "Pain assault, Itachi truth, Five Kage Summit." },
  { arc: "War Arc", period: "Fourth Shinobi World War", highlight: "Ten-Tails, Madara, Kaguya, and the final reconciliation." }
];
