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
    <div className="bg-gradient-to-br from-black to-slate-900 rounded-xl overflow-hidden border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 shadow-xl">
      <div className="aspect-video">
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
        <div className="mb-3">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-3 py-1 rounded-full text-sm shadow-lg">
            {category}
          </span>
        </div>
        <h3 className="text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        <button
          onClick={onToggleWatched}
          className="mt-4 w-full py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 transition-all duration-300"
          aria-pressed={watched}
        >
          {watched ? "Mark Unwatched" : "Mark Watched"}
        </button>
      </div>
    </div>
  );
}
