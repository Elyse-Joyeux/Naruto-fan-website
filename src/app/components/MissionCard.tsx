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
  onSelect
}: MissionCardProps) {
  const rankColors = {
    D: "from-gray-600 to-gray-700",
    C: "from-green-600 to-green-700",
    B: "from-blue-600 to-blue-700",
    A: "from-purple-600 to-purple-700",
    S: "from-red-600 to-red-700"
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 p-6 shadow-xl hover:shadow-yellow-500/20">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl text-yellow-400">{name}</h3>
        <div className={`bg-gradient-to-r ${rankColors[rank]} px-3 py-1 rounded-full text-white shadow-lg`}>
          Rank {rank}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-orange-400 text-sm mb-1">Team</p>
          <p className="text-white">{team}</p>
        </div>

        <div>
          <p className="text-orange-400 text-sm mb-1">Objective</p>
          <p className="text-gray-300">{objective}</p>
        </div>

        <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
          <p className="text-yellow-400 text-sm mb-2">Notable Events</p>
          <ul className="space-y-1">
            {notableEvents.map((event, idx) => (
              <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-yellow-500">→</span>
                {event}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-gray-700">
          <p className="text-green-400 text-sm mb-1">Outcome</p>
          <p className="text-gray-300">{outcome}</p>
        </div>

        <button
          onClick={onSelect}
          className="w-full py-3 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 transition-all duration-300"
        >
          Open Mission Details
        </button>
      </div>
    </div>
  );
}
