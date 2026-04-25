import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Flame,
  Music,
  PauseCircle,
  PlayCircle,
  Scroll,
  Swords,
  Target,
  Video,
  Zap,
} from "lucide-react";
import { HeroCard } from "./components/HeroCard";
import { MissionCard } from "./components/MissionCard";
import { Navigation } from "./components/Navigation";
import { VideoCard } from "./components/VideoCard";
import { WarCard } from "./components/WarCard";
import { CharacterSearch } from "./components/CharacterSearch";
import { InfoCard } from "./components/InfoCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import {
  arcTimeline,
  clans,
  facts,
  heroes,
  hiddenHeroes,
  jutsuEncyclopedia,
  missions,
  videos,
  wars,
} from "../data/narutoData";

const quizQuestions = [
  {
    prompt:
      "Who said this quote: 'Those who abandon their friends are worse than scum.'?",
    options: ["Jiraiya", "Kakashi", "Sasuke", "Minato"],
    answer: "Kakashi",
  },
  {
    prompt: "Which jutsu belongs to Itachi?",
    options: ["Rasengan", "Flying Thunder God", "Tsukuyomi", "Eight Gates"],
    answer: "Tsukuyomi",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<
    | "home"
    | "heroes"
    | "wars"
    | "missions"
    | "videos"
    | "jutsu"
    | "clans"
    | "search"
  >("home");
  const [heroSearch, setHeroSearch] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("All");
  const [selectedRank, setSelectedRank] = useState("All");
  const [videoCategory, setVideoCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [watchedVideos, setWatchedVideos] = useState<string[]>([]);
  const [activeHero, setActiveHero] = useState<(typeof heroes)[number] | null>(
    null,
  );
  const [activeWar, setActiveWar] = useState<(typeof wars)[number] | null>(
    null,
  );
  const [activeMission, setActiveMission] = useState<
    (typeof missions)[number] | null
  >(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeTrack, setActiveTrack] = useState("naruto-theme");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [introOpen, setIntroOpen] = useState(true);
  const [showRedirectScreen, setShowRedirectScreen] = useState(false);

  const villageOptions = [
    "All",
    ...new Set(heroes.map((hero) => hero.village)),
  ];
  const rankOptions = ["All", ...new Set(heroes.map((hero) => hero.rank))];
  const videoCategories = [
    "All",
    ...new Set(videos.map((entry) => entry.category)),
  ];
  const particles = Array.from({ length: 18 }, (_, index) => index);
  const audioTracks = [
    {
      label: "Naruto Theme",
      value: "naruto-theme",
      src: "/audio/naruto-theme.mp3",
    },
    {
      label: "Sadness and Sorrow",
      value: "sadness-and-sorrow",
      src: "/audio/sadness-and-sorrow.mp3",
    },
  ];

  const filteredHeroes = useMemo(() => {
    const query = heroSearch.trim().toLowerCase();
    const dataset = query.length > 0 ? [...heroes, ...hiddenHeroes] : heroes;

    return dataset.filter((hero) => {
      const matchesSearch =
        query.length === 0 ||
        hero.name.toLowerCase().includes(query) ||
        hero.title.toLowerCase().includes(query) ||
        hero.bio.toLowerCase().includes(query) ||
        hero.clan.toLowerCase().includes(query) ||
        hero.abilities.some((ability) => ability.toLowerCase().includes(query));
      const matchesVillage =
        selectedVillage === "All" || hero.village === selectedVillage;
      const matchesRank =
        selectedRank === "All" || hero.rank === selectedRank;
      return matchesSearch && matchesVillage && matchesRank;
    });
  }, [heroSearch, selectedVillage, selectedRank]);

  const filteredVideos = useMemo(
    () =>
      videos.filter(
        (entry) => videoCategory === "All" || entry.category === videoCategory,
      ),
    [videoCategory],
  );

  const hokageHeroes = useMemo(() => {
    const pool = [...heroes, ...hiddenHeroes];
    const hokageOrder = [
      "Hashirama Senju",
      "Tobirama Senju",
      "Hiruzen Sarutobi",
      "Minato Namikaze",
      "Tsunade",
      "Kakashi Hatake",
      "Naruto Uzumaki",
    ];
    const rankIndex = new Map(hokageOrder.map((name, idx) => [name, idx]));

    return pool
      .filter(
        (hero) =>
          hero.rank === "Hokage" ||
          hero.title.toLowerCase().includes("hokage") ||
          hero.rank.toLowerCase().includes("hokage"),
      )
      .sort((a, b) => {
        const ai = rankIndex.get(a.name) ?? 999;
        const bi = rankIndex.get(b.name) ?? 999;
        if (ai !== bi) return ai - bi;
        return a.name.localeCompare(b.name);
      });
  }, []);

  const activeQuestion = quizQuestions[quizIndex % quizQuestions.length];

  const toggleFavorite = (heroName: string) => {
    setFavorites((current) =>
      current.includes(heroName)
        ? current.filter((name) => name !== heroName)
        : [...current, heroName],
    );
  };

  const toggleWatched = (videoId: string) => {
    setWatchedVideos((current) =>
      current.includes(videoId)
        ? current.filter((id) => id !== videoId)
        : [...current, videoId],
    );
  };

  const answerQuiz = (choice: string) => {
    if (quizAnswered) return;
    if (choice === activeQuestion.answer)
      setQuizScore((current) => current + 1);
    setQuizAnswered(true);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.35;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    const player = audioRef.current;

    if (soundEnabled) {
      void player.play().catch(() => {
        setSoundEnabled(false);
      });
    } else {
      player.pause();
    }
  }, [soundEnabled, activeTrack]);

  if (showRedirectScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white flex items-center justify-center p-6">
        <div className="max-w-xl w-full border border-orange-500/30 rounded-2xl bg-black/70 p-8 text-center">
          <h1 className="text-3xl text-orange-300 mb-3">
            Thanks for stopping by.
          </h1>
          <p className="text-gray-300">
            You chose “Not interested in Naruto”.
            <br />
            Please redirect to another page from this creator.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="px-5 py-3 rounded-lg border border-slate-700 hover:bg-slate-800"
            >
              Go back
            </a>
            <a
              href={import.meta.env.VITE_REDIRECT_URL || "#"}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-orange-500 text-black hover:bg-orange-600"
            >
              Redirect me
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Set <code>VITE_REDIRECT_URL</code> in your environment to your other
            site URL.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120909] via-[#0a0a12] to-black text-white relative overflow-hidden shippuden-theme">
      <AlertDialog open={introOpen} onOpenChange={setIntroOpen}>
        <AlertDialogContent className="bg-slate-950 text-white border-orange-500/30">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-orange-300">
              Before you enter…
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Are you genuinely interested in the Naruto universe?
              <br />
              If so, this page is dedicated to you—crafted to celebrate the Will of Fire, the legendary wars, and the shinobi who shaped history.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="border border-slate-700 text-white hover:bg-slate-800"
              onClick={() => {
                setIntroOpen(false);
                setShowRedirectScreen(true);
              }}
            >
              Not interested
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-orange-500 text-black hover:bg-orange-600"
              onClick={() => setIntroOpen(false)}
            >
              Yes — I’m a Naruto fan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <audio
        ref={audioRef}
        loop
        preload="none"
        src={audioTracks.find((track) => track.value === activeTrack)?.src}
      />
      <div className="pointer-events-none absolute inset-0 opacity-70">
        {particles.map((particle) => (
          <span
            key={particle}
            className="chakra-particle"
            style={{
              left: `${(particle * 17) % 100}%`,
              animationDelay: `${(particle % 7) * 0.9}s`,
              animationDuration: `${8 + (particle % 6)}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed z-50 right-4 bottom-4 bg-black/80 border border-red-500/40 rounded-xl p-3 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-4 h-4 text-red-400" />
          <p className="text-xs text-red-200">Naruto OST Mode</p>
        </div>
        <select
          value={activeTrack}
          onChange={(event) => setActiveTrack(event.target.value)}
          className="w-full bg-black border border-red-500/30 rounded-md px-2 py-1 text-xs mb-2"
          aria-label="Select Naruto background track"
        >
          {audioTracks.map((track) => (
            <option key={track.value} value={track.value}>
              {track.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => setSoundEnabled((current) => !current)}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-red-500/20 hover:bg-red-500/30 text-red-100 text-sm"
          aria-pressed={soundEnabled}
        >
          {soundEnabled ? (
            <PauseCircle className="w-4 h-4" />
          ) : (
            <PlayCircle className="w-4 h-4" />
          )}
          {soundEnabled ? "Mute Shinobi Sound" : "Enable Shinobi Sound"}
        </button>
      </div>

      <Navigation />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 via-black to-black" />
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "url(/images/naruto-navbar-image.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Flame className="w-16 h-16 text-red-500 animate-pulse" />
            <h1 className="text-7xl md:text-9xl bg-gradient-to-r from-red-500 via-amber-400 to-red-500 bg-clip-text text-transparent">
              NARUTO
            </h1>
            <Flame className="w-16 h-16 text-red-500 animate-pulse" />
          </div>
          <p className="text-3xl md:text-4xl text-red-300 mb-8">
            The Ultimate Shinobi Universe
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Walk through the Hidden Leaf, relive legendary battles, and hear
            Naruto OST while exploring.
          </p>
        </div>
      </section>

      <section
        id="heroes"
        className="py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-12 h-12 text-orange-500" />
              <h2 className="text-6xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Legendary Heroes
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 bg-slate-950/70 border border-orange-500/30 rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                value={heroSearch}
                onChange={(event) => setHeroSearch(event.target.value)}
                placeholder="Search hero..."
                className="bg-black border border-orange-500/30 rounded-md px-3 py-2"
                aria-label="Search heroes"
              />
              <select
                value={selectedVillage}
                onChange={(event) => setSelectedVillage(event.target.value)}
                className="bg-black border border-orange-500/30 rounded-md px-3 py-2"
                aria-label="Filter heroes by village"
              >
                {villageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={selectedRank}
                onChange={(event) => setSelectedRank(event.target.value)}
                className="bg-black border border-orange-500/30 rounded-md px-3 py-2"
                aria-label="Filter heroes by rank"
              >
                {rankOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {filteredHeroes.map((hero) => (
              <HeroCard
                key={hero.name}
                {...hero}
                isFavorite={favorites.includes(hero.name)}
                onToggleFavorite={() => toggleFavorite(hero.name)}
                onSelect={() => setActiveHero(hero)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="hokage"
        className="py-24 px-4 bg-gradient-to-b from-black via-emerald-950/10 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text text-transparent">
              Hokage Archives
            </h2>
            <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
              A dedicated page for Hokage only—each with picture, abilities,
              accomplishments, and power.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hokageHeroes.map((hero) => (
              <HeroCard
                key={`hokage-${hero.name}`}
                {...hero}
                isFavorite={favorites.includes(hero.name)}
                onToggleFavorite={() => toggleFavorite(hero.name)}
                onSelect={() => setActiveHero(hero)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="wars"
        className="py-24 px-4 bg-gradient-to-b from-black via-red-950/20 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Swords className="w-12 h-12 text-red-500" />
              <h2 className="text-6xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Great Shinobi Wars
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {wars.map((war) => (
              <WarCard
                key={war.name}
                {...war}
                onSelect={() => setActiveWar(war)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="missions"
        className="py-24 px-4 bg-gradient-to-b from-black via-yellow-950/10 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Target className="w-12 h-12 text-yellow-500" />
              <h2 className="text-6xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Iconic Missions
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission) => (
              <MissionCard
                key={mission.name}
                {...mission}
                onSelect={() => setActiveMission(mission)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="videos"
        className="py-24 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Video className="w-12 h-12 text-orange-500" />
              <h2 className="text-6xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Epic Moments
              </h2>
            </div>
          </div>
          <div className="mb-6 max-w-sm mx-auto">
            <select
              value={videoCategory}
              onChange={(event) => setVideoCategory(event.target.value)}
              className="w-full bg-black border border-orange-500/30 rounded-md px-3 py-2"
              aria-label="Filter videos by category"
            >
              {videoCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((entry) => (
              <VideoCard
                key={entry.videoId}
                {...entry}
                watched={watchedVideos.includes(entry.videoId)}
                onToggleWatched={() => toggleWatched(entry.videoId)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="facts"
        className="py-24 px-4 bg-gradient-to-b from-black to-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Scroll className="w-12 h-12 text-yellow-500" />
              <h2 className="text-6xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Shinobi Knowledge
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Naruto Transformations */}
            <InfoCard
              title="Naruto Transformations"
              className="cursor-pointer"
              trigger={
                <div className="bg-gradient-to-br from-orange-950/30 via-black to-black p-8 rounded-2xl border-2 border-orange-500/30 hover:border-orange-500 transition-colors">
                  <div className="text-5xl mb-4">🍥</div>
                  <h3 className="text-2xl text-orange-400 mb-3">
                    Naruto Transformations
                  </h3>
                  <p className="text-gray-300">
                    Hover (or tap on mobile) to see the full transformation
                    path with visuals.
                  </p>
                </div>
              }
              content={
                <div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <img
                      src="/images/naruto.webp"
                      alt="Naruto"
                      className="w-full h-28 object-cover rounded-md border border-orange-500/20"
                      loading="lazy"
                    />
                    <img
                      src="/images/naruto-hokage.gif"
                      alt="Naruto Hokage"
                      className="w-full h-28 object-cover rounded-md border border-orange-500/20"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-orange-300 font-semibold mb-2">
                    Transformations (first → last)
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Base Naruto (Academy/Genin)</li>
                    <li>• One-Tail Cloak (early Kurama chakra)</li>
                    <li>• Four-Tails Rampage (unstable power)</li>
                    <li>• Sage Mode</li>
                    <li>• Kurama Chakra Mode (KCM)</li>
                    <li>• KCM 2 (cooperation with Kurama)</li>
                    <li>• Six Paths Sage Mode</li>
                  </ul>
                </div>
              }
            />

            {/* Sharingan Evolution */}
            <InfoCard
              title="Sharingan Evolution"
              className="cursor-pointer"
              trigger={
                <div className="bg-gradient-to-br from-red-950/30 via-black to-black p-8 rounded-2xl border-2 border-red-500/30 hover:border-red-500 transition-colors">
                  <div className="text-5xl mb-4">👁️</div>
                  <h3 className="text-2xl text-red-300 mb-3">
                    Sharingan Evolution
                  </h3>
                  <p className="text-gray-300">
                    Hover (or tap on mobile) to view the visuals + full path.
                  </p>
                </div>
              }
              content={
                <div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <img
                      src="/images/sharingan.jpg"
                      alt="Sharingan"
                      className="w-full h-28 object-cover rounded-md border border-red-500/20"
                      loading="lazy"
                    />
                    <img
                      src="/images/sharingan-evolution.jpg"
                      alt="Sharingan evolution"
                      className="w-full h-28 object-cover rounded-md border border-red-500/20"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-red-300 font-semibold mb-2">
                    Stages (core idea)
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Sharingan (perception, copying, genjutsu)</li>
                    <li>• Mangekyō Sharingan (unique ocular abilities)</li>
                    <li>• Eternal Mangekyō (stability + power)</li>
                    <li>• Rinnegan (legend-tier evolution)</li>
                  </ul>
                </div>
              }
            />

            {/* Chakra Natures */}
            <InfoCard
              title="Chakra Natures & Kekkei Genkai"
              className="cursor-pointer"
              trigger={
                <div className="bg-gradient-to-br from-cyan-950/20 via-black to-black p-8 rounded-2xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-colors">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl text-cyan-300 mb-3">
                    Chakra Natures & Kekkei Genkai
                  </h3>
                  <p className="text-gray-300">
                    Hover (or tap on mobile) for basics + combined releases.
                  </p>
                </div>
              }
              content={
                <div>
                  <p className="text-cyan-300 font-semibold mb-2">
                    Five basics
                  </p>
                  <p className="text-sm text-gray-300">
                    Fire • Wind • Lightning • Earth • Water
                  </p>
                  <p className="text-cyan-200 font-semibold mt-3 mb-2">
                    Examples of combined releases
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Wood (Hashirama)</li>
                    <li>• Ice (Haku)</li>
                    <li>• Lava / Boil / Scorch (various)</li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-yellow-400 mb-8">Arc Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {arcTimeline.map((item) => {
              const arcImage =
                item.arc === "Part 1"
                  ? "/images/team-7-reunite.jpg"
                  : item.arc === "Shippuden"
                    ? "/images/sasuke-in-boruto.jpg"
                    : "/images/naruto-madara-ninja-war.jpg";

              return (
                <InfoCard
                  key={item.arc}
                  title={`${item.arc} — Expanded Details`}
                  className="cursor-pointer"
                  trigger={
                    <div className="border border-yellow-500/30 rounded-xl p-5 bg-black/70 hover:border-yellow-400 transition-colors">
                      <h3 className="text-xl text-yellow-300 mb-1">
                        {item.arc}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{item.period}</p>
                      <p className="text-gray-300">{item.highlight}</p>
                    </div>
                  }
                  content={
                    <div>
                      <img
                        src={arcImage}
                        alt={`${item.arc} key visual`}
                        className="w-full h-44 object-cover rounded-lg border border-yellow-500/20 mb-3"
                        loading="lazy"
                      />
                      <ul className="space-y-1 text-sm text-gray-300">
                        {item.arc === "Part 1" && (
                          <>
                            <li>• Land of Waves: first true shinobi mission</li>
                            <li>• Chūnin Exams: rivalries and growth</li>
                            <li>• Konoha Crush: the cost of war</li>
                            <li>• Valley of the End: Naruto vs Sasuke (Part 1)</li>
                          </>
                        )}
                        {item.arc === "Shippuden" && (
                          <>
                            <li>• Akatsuki pursuit and tailed beasts</li>
                            <li>• Pain’s assault and Naruto’s return</li>
                            <li>• Five Kage Summit & shifting alliances</li>
                            <li>• The road into the war</li>
                          </>
                        )}
                        {item.arc === "War Arc" && (
                          <>
                            <li>• Allied Shinobi Forces unify</li>
                            <li>• Ten-Tails and revived legends</li>
                            <li>• Kaguya sealed by Team 7</li>
                            <li>• Final Valley: Naruto vs Sasuke (final)</li>
                          </>
                        )}
                      </ul>
                    </div>
                  }
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-red-400 mb-8">Clan Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {clans.map((clan) => (
              <InfoCard
                key={clan.name}
                title={`${clan.name} — Major People & Abilities`}
                className="cursor-pointer"
                trigger={
                  <div className="border border-red-500/30 rounded-xl p-6 bg-black/70 hover:border-red-400 transition-colors">
                    <h3 className="text-2xl text-red-300 mb-2">{clan.name}</h3>
                    <p className="text-gray-400 mb-2">
                      Kekkei Genkai: {clan.kekkeiGenkai}
                    </p>
                    <p className="text-gray-400 mb-3">
                      Specialty: {clan.specialty}
                    </p>
                    <p className="text-white text-sm">
                      {clan.members.join(" • ")}
                    </p>
                  </div>
                }
                content={
                  <div>
                    <p className="text-red-300 font-semibold mb-2">
                      {clan.name} — Major People & Abilities
                    </p>
                    {clan.name === "Uchiha" ? (
                      <>
                        <img
                          src="/images/uchiha.webp"
                          alt="Uchiha"
                          className="w-full h-40 object-cover rounded-lg border border-red-500/20 mb-3"
                          loading="lazy"
                        />
                        <p className="text-sm text-gray-300">
                          Known for the Sharingan and elite fire-style ninjutsu,
                          plus some of the strongest genjutsu users in history.
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                          <li>
                            • Major: Madara • Itachi • Sasuke • Obito • Shisui
                          </li>
                          <li>
                            • Abilities: Sharingan • Mangekyō • Susanoo •
                            Amaterasu
                          </li>
                        </ul>
                      </>
                    ) : clan.name === "Senju" ? (
                      <>
                        <img
                          src="/images/senju.webp"
                          alt="Senju"
                          className="w-full h-40 object-cover rounded-lg border border-red-500/20 mb-3"
                          loading="lazy"
                        />
                        <p className="text-sm text-gray-300">
                          The clan of exceptional life-force and
                          versatility—key founders of Konoha.
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                          <li>• Major: Hashirama • Tobirama • Tsunade</li>
                          <li>
                            • Abilities: Wood Release (rare) • Water mastery •
                            Sealing
                          </li>
                        </ul>
                      </>
                    ) : clan.name === "Uzumaki" ? (
                      <>
                        <img
                          src="/images/uzumaki.webp"
                          alt="Uzumaki"
                          className="w-full h-40 object-cover rounded-lg border border-red-500/20 mb-3"
                          loading="lazy"
                        />
                        <p className="text-sm text-gray-300">
                          Famous for massive chakra reserves and sealing
                          techniques—survivors with stubborn power.
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                          <li>• Major: Naruto • Kushina • Nagato • Karin</li>
                          <li>
                            • Abilities: Sealing jutsu • Life-force • Chakra
                            chains
                          </li>
                        </ul>
                      </>
                    ) : clan.name === "Hyuga" ? (
                      <>
                        <img
                          src="/images/hyuga.webp"
                          alt="Hyuga"
                          className="w-full h-40 object-cover rounded-lg border border-red-500/20 mb-3"
                          loading="lazy"
                        />
                        <p className="text-sm text-gray-300">
                          Masters of the Byakugan and Gentle
                          Fist—precision chakra control in close combat.
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                          <li>• Major: Hinata • Neji • Hiashi • Hanabi</li>
                          <li>
                            • Abilities: Byakugan • 64 Palms • Protective
                            rotations
                          </li>
                        </ul>
                      </>
                    ) : (
                      <p className="text-sm text-gray-300">
                        Details are coming for this clan.
                      </p>
                    )}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="powerful-clans"
        className="py-24 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
              Most Powerful Clans
            </h2>
            <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
              A focused spotlight on the clans that shaped the shinobi world
              through bloodline gifts, sealing arts, and legendary leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Uchiha",
                image: "/images/uchiha-clan-symbol.png",
                highlights: [
                  "Sharingan → Mangekyō",
                  "Susanoo",
                  "Genjutsu dominance",
                ],
                description:
                  "The clan that defined ocular power. From elite genjutsu to Susanoo, their legacy reshaped every era—often through tragedy.",
              },
              {
                name: "Senju",
                image: "/images/hashiramam.webp",
                highlights: [
                  "Life-force & versatility",
                  "Founders of Konoha",
                  "Wood Release (rare)",
                ],
                description:
                  "A clan of stamina and adaptability—leaders and founders whose strength wasn’t one trick, but a complete shinobi toolkit.",
              },
              {
                name: "Uzumaki",
                image: "/images/uzumaki-clan-symbol.avif",
                highlights: [
                  "Sealing jutsu mastery",
                  "Huge chakra reserves",
                  "Longevity",
                ],
                description:
                  "Feared for sealing techniques and monstrous chakra. Their heritage survives through resilience and bonds that outlast war.",
              },
              {
                name: "Hyuga",
                image: "/images/hyuga-clan-symbol.jpeg",
                highlights: ["Byakugan", "Gentle Fist", "Chakra point precision"],
                description:
                  "Masters of precision. Their Byakugan and Gentle Fist style turns chakra control into a surgical weapon in close combat.",
              },
            ].map((clan) => (
              <div
                key={clan.name}
                className="border border-purple-500/30 rounded-2xl overflow-hidden bg-black/70"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={clan.image}
                    alt={clan.name}
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl text-purple-200 mb-2">{clan.name}</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {clan.description}
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {clan.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="finale"
        className="py-24 px-4 bg-gradient-to-b from-black via-red-950/10 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Final Battles
            </h2>
            <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
              The war’s climax: Kaguya’s dimension-shattering fight… followed by
              the final Naruto vs Sasuke battle that decided the future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-red-500/30 rounded-2xl overflow-hidden bg-black/70">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/battle-against-kaguya.jpg"
                  alt="Kaguya battle aftermath"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-red-300 mb-2">
                  Battle Against Kaguya Ōtsutsuki
                </h3>
                <p className="text-gray-300">
                  Team 7 faces Kaguya across shifting dimensions. Victory
                  requires coordination, sealing, and the combined peak power of
                  Naruto and Sasuke.
                </p>
                <ul className="mt-4 text-sm text-gray-300 space-y-1">
                  <li>• Threat: dimension control + overwhelming chakra</li>
                  <li>• Strategy: teamwork, timing, sealing condition</li>
                  <li>• Outcome: Kaguya sealed</li>
                </ul>
              </div>
            </div>

            <div className="border border-orange-500/30 rounded-2xl overflow-hidden bg-black/70">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/naruto-sasuke-final-battle.jpg"
                  alt="Naruto vs Sasuke finale after victory"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-orange-300 mb-2">
                  Naruto vs Sasuke — Final Valley (Final)
                </h3>
                <p className="text-gray-300">
                  After Kaguya is sealed, Naruto and Sasuke clash one last time.
                  It’s not just power—it’s ideology, pain, and what “peace”
                  truly means.
                </p>
                <ul className="mt-4 text-sm text-gray-300 space-y-1">
                  <li>• Theme: bonds vs control</li>
                  <li>• Peak forms: Six Paths abilities</li>
                  <li>• Result: reconciliation and a new era</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-cyan-400 mb-8">Jutsu Encyclopedia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jutsuEncyclopedia.map((jutsu) => (
              <div
                key={jutsu.name}
                className="border border-cyan-500/30 rounded-xl p-5 bg-black/70"
              >
                <h3 className="text-xl text-cyan-300 mb-2">{jutsu.name}</h3>
                <p className="text-gray-300 text-sm">
                  Type: {jutsu.type} • Rank: {jutsu.rank}
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Users: {jutsu.users.join(", ")}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  First appearance: {jutsu.firstAppearance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="search" className="py-0 px-0 bg-black">
        <CharacterSearch />
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-4xl mx-auto border border-purple-500/30 rounded-2xl p-8 bg-black/70">
          <h2 className="text-4xl text-purple-400 mb-3">Quiz Mode</h2>
          <p className="text-gray-400 mb-6">Score: {quizScore}</p>
          <p className="text-xl mb-5">{activeQuestion.prompt}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => answerQuiz(option)}
                className="px-4 py-3 rounded-lg border border-purple-500/30 hover:bg-purple-500/20 text-left"
              >
                {option}
              </button>
            ))}
          </div>
          {quizAnswered && (
            <button
              onClick={() => {
                setQuizIndex((current) => current + 1);
                setQuizAnswered(false);
              }}
              className="mt-6 px-5 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30"
            >
              Next Question
            </button>
          )}
        </div>
      </section>

      <footer className="py-16 px-4 border-t border-orange-500/20 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              NARUTO UNIVERSE
            </span>
          </div>
          <p className="text-gray-600 mt-2">
            Naruto Fan Website • 2026 • The Will of Fire Burns On
          </p>
        </div>
      </footer>

      <Dialog
        open={Boolean(activeHero)}
        onOpenChange={(open) => !open && setActiveHero(null)}
      >
        <DialogContent className="max-w-3xl bg-slate-950 text-white border-orange-500/30">
          <DialogHeader>
            <DialogTitle className="text-2xl text-orange-400">
              {activeHero?.name}
            </DialogTitle>
          </DialogHeader>
          {activeHero && (
            <div className="space-y-3">
              <p className="text-gray-300">{activeHero.bio}</p>
              <p className="text-gray-400">
                Arc: {activeHero.arc} • Clan: {activeHero.clan}
              </p>
              <p className="text-yellow-300 italic">"{activeHero.quote}"</p>
              <p className="text-gray-300">
                Relationships: {activeHero.relationships.join(" • ")}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(activeWar)}
        onOpenChange={(open) => !open && setActiveWar(null)}
      >
        <DialogContent className="max-w-3xl bg-slate-950 text-white border-red-500/30">
          <DialogHeader>
            <DialogTitle className="text-2xl text-red-400">
              {activeWar?.name}
            </DialogTitle>
          </DialogHeader>
          {activeWar && (
            <ul className="space-y-2 text-gray-300">
              {activeWar.timeline.map((event) => (
                <li key={event}>• {event}</li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(activeMission)}
        onOpenChange={(open) => !open && setActiveMission(null)}
      >
        <DialogContent className="max-w-3xl bg-slate-950 text-white border-yellow-500/30">
          <DialogHeader>
            <DialogTitle className="text-2xl text-yellow-400">
              {activeMission?.name}
            </DialogTitle>
          </DialogHeader>
          {activeMission && (
            <div className="space-y-3">
              <p className="text-gray-300">
                Objective: {activeMission.objective}
              </p>
              <p className="text-gray-300">Outcome: {activeMission.outcome}</p>
              <p className="text-yellow-200 italic">"{activeMission.quote}"</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
