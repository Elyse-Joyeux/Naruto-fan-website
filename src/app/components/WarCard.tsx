interface WarCardProps {
  name: string;
  duration: string;
  description: string;
  keyEvents: string[];
  casualties: string;
  outcome: string;
  image: string | string[];
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
  onSelect,
}: WarCardProps) {
  const renderWarMedia = () => {
    if (Array.isArray(image)) {
      return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {image.slice(0, 4).map((src, idx) => (
            <img
              key={`${src}-${idx}`}
              src={src}
              alt={`${name} collage ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ))}
        </div>
      );
    }

    return (
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='100%25' height='100%25' fill='%230b0b0b'/%3E%3Ctext x='50%25' y='50%25' fill='%23ef4444' font-size='32' text-anchor='middle'%3EWar image unavailable%3C/text%3E%3C/svg%3E";
        }}
      />
    );
  };

  return (
    <div className="bg-gradient-to-br from-red-950/50 via-black to-black rounded-2xl overflow-hidden border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 shadow-2xl hover:shadow-red-500/20 group">
      <div className="relative h-64 overflow-hidden">
        {renderWarMedia()}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-3xl text-red-400 mb-2 font-bold">{name}</h3>
          <p className="text-gray-300 font-semibold">📅 {duration}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

        <div className="space-y-4">
          <div className="bg-red-500/10 hover:bg-red-500/20 rounded-lg p-4 border border-red-500/20 transition-all duration-300">
            <h4 className="text-red-400 mb-3 font-bold flex items-center gap-2">
              ⚔️ Key Events
            </h4>
            <ul className="space-y-2">
              {keyEvents.map((event, idx) => (
                <li
                  key={idx}
                  className="text-gray-400 text-sm flex items-start gap-2 hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="text-red-500 font-bold">→</span>
                  {event}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-500/10 hover:bg-orange-500/20 rounded-lg p-4 border border-orange-500/20 transition-all duration-300">
              <p className="text-xs text-orange-400 mb-2 font-bold">
                💔 Casualties
              </p>
              <p className="text-white font-semibold">{casualties}</p>
            </div>
            <div className="bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg p-4 border border-emerald-500/20 transition-all duration-300">
              <p className="text-xs text-emerald-400 mb-2 font-bold">
                🏆 Outcome
              </p>
              <p className="text-white font-semibold">{outcome}</p>
            </div>
          </div>
        </div>
        <button
          onClick={onSelect}
          className="mt-4 w-full py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 transition-all duration-300 font-semibold border border-red-500/20 hover:border-red-500"
        >
          Open War Timeline
        </button>
      </div>
    </div>
  );
}
