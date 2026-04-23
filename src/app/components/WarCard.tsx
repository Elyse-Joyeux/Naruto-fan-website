interface WarCardProps {
  name: string;
  duration: string;
  description: string;
  keyEvents: string[];
  casualties: string;
  outcome: string;
  image: string;
  onSelect?: () => void;
}

export function WarCard({
  name,
  duration,
  description,
  keyEvents,
  casualties,
  outcome,
  image,
  onSelect
}: WarCardProps) {
  return (
    <div className="bg-gradient-to-br from-red-950/50 via-black to-black rounded-2xl overflow-hidden border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='100%25' height='100%25' fill='%230b0b0b'/%3E%3Ctext x='50%25' y='50%25' fill='%23ef4444' font-size='32' text-anchor='middle'%3EWar image unavailable%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-3xl text-red-400 mb-2">{name}</h3>
          <p className="text-gray-300">{duration}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

        <div className="space-y-4">
          <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
            <h4 className="text-red-400 mb-2">⚔️ Key Events</h4>
            <ul className="space-y-1">
              {keyEvents.map((event, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  {event}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
              <p className="text-xs text-orange-400 mb-1">Casualties</p>
              <p className="text-white">{casualties}</p>
            </div>
            <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
              <p className="text-xs text-green-400 mb-1">Outcome</p>
              <p className="text-white">{outcome}</p>
            </div>
          </div>
        </div>
        <button
          onClick={onSelect}
          className="mt-4 w-full py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 transition-all duration-300"
        >
          Open War Timeline
        </button>
      </div>
    </div>
  );
}
