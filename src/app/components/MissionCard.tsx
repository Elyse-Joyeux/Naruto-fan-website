interface MissionCardProps {
  name: string;
  rank: "D" | "C" | "B" | "A" | "S";
  team: string;
  objective: string;
  outcome: string;
  notableEvents: string[];
  onSelect?: () => void;
}

export function MissionCard({
  name,
  rank,
  team,
  objective,
  outcome,
  notableEvents,
  onSelect,
}: MissionCardProps) {
  const rankColors = {
    D: "from-gray-600 to-gray-700",
    C: "from-green-600 to-green-700",
    B: "from-blue-600 to-blue-700",
    A: "from-purple-600 to-purple-700",
    S: "from-red-600 to-red-700",
  };

  const rankEmoji = {
    D: "🟦",
    C: "🟩",
    B: "🟦",
    A: "🟪",
    S: "🟥",
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-500 p-6 shadow-xl hover:shadow-yellow-500/30 group hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl text-yellow-400 font-bold group-hover:text-yellow-300 transition-colors duration-300">
          {name}
        </h3>
        <div
          className={`bg-gradient-to-r ${rankColors[rank]} px-4 py-2 rounded-full text-white shadow-lg font-bold flex items-center gap-2`}
        >
          {rankEmoji[rank]} Rank {rank}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
          <p className="text-orange-400 text-sm mb-1 font-semibold">👥 Team</p>
          <p className="text-white">{team}</p>
        </div>

        <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
          <p className="text-blue-400 text-sm mb-1 font-semibold">
            🎯 Objective
          </p>
          <p className="text-gray-300 leading-relaxed">{objective}</p>
        </div>

        <div className="bg-yellow-500/10 hover:bg-yellow-500/20 rounded-lg p-4 border border-yellow-500/20 transition-all duration-300">
          <p className="text-yellow-400 text-sm mb-3 font-bold">
            ⚡ Notable Events
          </p>
          <ul className="space-y-2">
            {notableEvents.map((event, idx) => (
              <li
                key={idx}
                className="text-gray-400 text-sm flex items-start gap-2 hover:text-gray-300 transition-colors duration-300"
              >
                <span className="text-yellow-500 font-bold">→</span>
                {event}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-700/50">
          <p className="text-emerald-400 text-sm mb-1 font-semibold">
            ✓ Outcome
          </p>
          <p className="text-gray-300 leading-relaxed">{outcome}</p>
        </div>

        <button
          onClick={onSelect}
          className="w-full py-3 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 transition-all duration-300 font-semibold border border-yellow-500/20 hover:border-yellow-500"
        >
          📋 Open Mission Details
        </button>
      </div>
    </div>
  );
}
