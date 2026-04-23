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
  Users,
} from "lucide-react";
import { HeroCard } from "./components/HeroCard";
import { MissionCard } from "./components/MissionCard";
import { Navigation } from "./components/Navigation";
import { VideoCard } from "./components/VideoCard";
import { WarCard } from "./components/WarCard";
import { CharacterSearch } from "./components/CharacterSearch";
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
  const [sortStat, setSortStat] = useState<
    "speed" | "iq" | "chakra" | "taijutsu"
  >("chakra");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [watchedVideos, setWatchedVideos] = useState<string[]>([]);
  const [compareA, setCompareA] = useState("");
  const [compareB, setCompareB] = useState("");
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

  const filteredHeroes = useMemo(
    () =>
      heroes.filter((hero) => {
        const matchesSearch = hero.name
          .toLowerCase()
          .includes(heroSearch.toLowerCase());
        const matchesVillage =
          selectedVillage === "All" || hero.village === selectedVillage;
        const matchesRank =
          selectedRank === "All" || hero.rank === selectedRank;
        return matchesSearch && matchesVillage && matchesRank;
      }),
    [heroSearch, selectedVillage, selectedRank],
  );

  const filteredVideos = useMemo(
    () =>
      videos.filter(
        (entry) => videoCategory === "All" || entry.category === videoCategory,
      ),
    [videoCategory],
  );

  const rankingBoard = useMemo(
    () =>
      [...heroes].sort(
        (a, b) => b.powerStats[sortStat] - a.powerStats[sortStat],
      ),
    [sortStat],
  );

  const comparedHeroes = useMemo(
    () =>
      heroes.filter((hero) => hero.name === compareA || hero.name === compareB),
    [compareA, compareB],
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120909] via-[#0a0a12] to-black text-white relative overflow-hidden shippuden-theme">
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
                "url(https://static.wikia.nocookie.net/naruto/images/e/e6/Konohagakure.png)",
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

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto border border-red-500/30 rounded-2xl p-5 bg-black/60 text-center">
          <h3 className="text-xl text-red-300 mb-2">Sharingan Eyes Overlay</h3>
          <p className="text-sm text-gray-300 mb-4">
            Drop your original sharingan image into{" "}
            <code>/public/images/sharingan-eyes.png</code>
          </p>
          <img
            src="/images/sharingan-eyes.png"
            alt="Sharingan eyes overlay placeholder"
            className="mx-auto max-h-40 object-contain"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
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
            {facts.map((fact) => (
              <div
                key={fact.title}
                className="bg-gradient-to-br from-orange-950/30 via-black to-black p-8 rounded-2xl border-2 border-orange-500/30"
              >
                <div className="text-5xl mb-4">{fact.icon}</div>
                <h3 className="text-2xl text-orange-400 mb-3">{fact.title}</h3>
                <p className="text-gray-300">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-orange-400 mb-6">Power Ranking Board</h2>
          <div className="mb-6 max-w-xs">
            <select
              value={sortStat}
              onChange={(event) =>
                setSortStat(
                  event.target.value as "speed" | "iq" | "chakra" | "taijutsu",
                )
              }
              className="w-full bg-black border border-orange-500/30 rounded-md px-3 py-2"
            >
              <option value="speed">Speed</option>
              <option value="iq">IQ</option>
              <option value="chakra">Chakra</option>
              <option value="taijutsu">Taijutsu</option>
            </select>
          </div>
          <div className="grid gap-3">
            {rankingBoard.map((hero, index) => (
              <div
                key={hero.name}
                className="border border-orange-500/30 rounded-lg p-4 flex items-center justify-between bg-black/70 hover:border-orange-500 transition-colors"
              >
                <p>
                  {index + 1}. {hero.name}
                </p>
                <p className="text-orange-300">
                  {sortStat.toUpperCase()}: {hero.powerStats[sortStat]}/10
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-yellow-400 mb-8">Arc Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {arcTimeline.map((item) => (
              <div
                key={item.arc}
                className="border border-yellow-500/30 rounded-xl p-5 bg-black/70"
              >
                <h3 className="text-xl text-yellow-300 mb-1">{item.arc}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.period}</p>
                <p className="text-gray-300">{item.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-red-400 mb-8">Clan Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {clans.map((clan) => (
              <div
                key={clan.name}
                className="border border-red-500/30 rounded-xl p-6 bg-black/70"
              >
                <h3 className="text-2xl text-red-300 mb-2">{clan.name}</h3>
                <p className="text-gray-400 mb-2">
                  Kekkei Genkai: {clan.kekkeiGenkai}
                </p>
                <p className="text-gray-400 mb-3">
                  Specialty: {clan.specialty}
                </p>
                <p className="text-white text-sm">{clan.members.join(" • ")}</p>
              </div>
            ))}
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

      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-green-400 mb-6">
            Compare Two Characters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <select
              value={compareA}
              onChange={(event) => setCompareA(event.target.value)}
              className="bg-black border border-green-500/30 rounded-md px-3 py-2"
            >
              <option value="">Select first hero</option>
              {heroes.map((hero) => (
                <option key={hero.name} value={hero.name}>
                  {hero.name}
                </option>
              ))}
            </select>
            <select
              value={compareB}
              onChange={(event) => setCompareB(event.target.value)}
              className="bg-black border border-green-500/30 rounded-md px-3 py-2"
            >
              <option value="">Select second hero</option>
              {heroes.map((hero) => (
                <option key={hero.name} value={hero.name}>
                  {hero.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {comparedHeroes.map((hero) => (
              <div
                key={hero.name}
                className="border border-green-500/30 rounded-xl p-5 bg-black/70"
              >
                <h3 className="text-xl text-green-300 mb-2">{hero.name}</h3>
                <p className="text-sm text-gray-300">
                  Speed: {hero.powerStats.speed}
                </p>
                <p className="text-sm text-gray-300">
                  IQ: {hero.powerStats.iq}
                </p>
                <p className="text-sm text-gray-300">
                  Chakra: {hero.powerStats.chakra}
                </p>
                <p className="text-sm text-gray-300">
                  Taijutsu: {hero.powerStats.taijutsu}
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
