import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface HeroCardProps {
  name: string;
  title: string;
  village: string;
  rank: string;
  image: string;
  bio: string;
  abilities: string[];
  achievements: string[];
  signature: string;
  onSelect?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function HeroCard({
  name,
  title,
  village,
  rank,
  image,
  bio,
  abilities,
  achievements,
  signature,
  onSelect,
  isFavorite = false,
  onToggleFavorite
}: HeroCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `hero-details-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black rounded-2xl overflow-hidden border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20">
      {/* Image Section */}
      <div className="relative h-80 overflow-hidden group">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Name & Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-3xl mb-1 text-white">{name}</h3>
          <p className="text-orange-400 italic">{title}</p>
        </div>

        {/* Rank Badge */}
        <div className="absolute top-4 right-4 bg-orange-500 text-black px-4 py-2 rounded-full shadow-lg">
          {rank}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Village */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm">🍃</span>
            {village}
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-300 leading-relaxed mb-4">
          {bio}
        </p>

        {/* Signature Move */}
        <div className="mb-4 p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg border border-orange-500/20">
          <p className="text-sm text-orange-400 mb-1">Signature Technique</p>
          <p className="text-white italic">"{signature}"</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={onSelect}
            className="w-full py-3 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 rounded-lg transition-all duration-300"
          >
            View Full Profile
          </button>
          <button
            onClick={onToggleFavorite}
            className="w-full py-3 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-lg transition-all duration-300"
            aria-pressed={isFavorite}
          >
            {isFavorite ? "Remove Favorite" : "Add Favorite"}
          </button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-lg transition-all duration-300 mb-4"
          aria-expanded={expanded}
          aria-controls={detailsId}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-5 h-5" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-5 h-5" />
              Show More Details
            </>
          )}
        </button>

        {/* Expanded Content */}
        {expanded && (
          <div id={detailsId} className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-500">
            {/* Abilities */}
            <div>
              <h4 className="text-orange-400 mb-3 flex items-center gap-2">
                ⚡ Special Abilities
              </h4>
              <ul className="space-y-2">
                {abilities.map((ability, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>{ability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-yellow-400 mb-3 flex items-center gap-2">
                🏆 Major Achievements
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-500 mt-1">★</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
