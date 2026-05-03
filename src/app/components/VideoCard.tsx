interface VideoCardProps {
  title: string;
  description: string;
  videoId: string;
  category: string;
  watched?: boolean;
  onToggleWatched?: () => void;
}

export function VideoCard({
  title,
  description,
  videoId,
  category,
  watched = false,
  onToggleWatched,
}: VideoCardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-black to-slate-900 rounded-xl overflow-hidden border-2 transition-all duration-500 shadow-xl hover:shadow-orange-500/20 group ${watched ? "border-green-500/50 hover:border-green-500" : "border-orange-500/30 hover:border-orange-500"}`}
    >
      <div className="aspect-video relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-5xl">▶️</div>
        </div>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-3 py-1 rounded-full text-sm shadow-lg font-semibold">
            {category}
          </span>
          {watched && (
            <span className="text-green-400 text-sm font-semibold">
              ✓ Watched
            </span>
          )}
        </div>
        <h3 className="text-white mb-2 font-bold hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button
          onClick={onToggleWatched}
          className={`w-full py-2 rounded-lg transition-all duration-300 font-semibold ${watched ? "bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 hover:border-green-500" : "bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border border-orange-500/20 hover:border-orange-500"}`}
          aria-pressed={watched}
        >
          {watched ? "✓ Watched - Mark Unwatched" : "Mark as Watched"}
        </button>
      </div>
    </div>
  );
}
