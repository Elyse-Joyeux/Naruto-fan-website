import React, { useMemo, useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { completeCharacterDatabase } from "../../data/narutoData";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function CharacterSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAura, setSelectedAura] = useState<
    "All" | "Legendary" | "Elite" | "Notable"
  >("All");
  const [selectedVillage, setSelectedVillage] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const auraOptions = ["All", "Legendary", "Elite", "Notable"];
  const villageOptions = useMemo(() => {
    const villages = new Set(
      completeCharacterDatabase.map((char) => char.village),
    );
    return ["All", ...Array.from(villages).sort()];
  }, []);

  const filteredCharacters = useMemo(() => {
    return completeCharacterDatabase.filter((character) => {
      const matchesSearch =
        character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        character.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        character.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesAura =
        selectedAura === "All" || character.aura === selectedAura;
      const matchesVillage =
        selectedVillage === "All" || character.village === selectedVillage;
      return matchesSearch && matchesAura && matchesVillage;
    });
  }, [searchQuery, selectedAura, selectedVillage]);

  const auraColors = {
    Legendary: "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20",
    Elite: "border-purple-400 bg-purple-50 dark:bg-purple-900/20",
    Notable: "border-blue-400 bg-blue-50 dark:bg-blue-900/20",
  };

  const auraBadgeColors = {
    Legendary: "bg-yellow-400 text-yellow-900",
    Elite: "bg-purple-400 text-white",
    Notable: "bg-blue-400 text-white",
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Shinobi Directory
          </h1>
          <p className="text-gray-300">
            Search through 200+ Naruto characters with detailed information
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search by name, title, or description (e.g., 'Crystal Release', 'Guren', 'Eight Gates')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-slate-800 border-slate-700 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex gap-3 mb-6">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="border-slate-700 text-white hover:bg-slate-800"
          >
            <Filter className="h-4 w-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <div className="text-gray-300 text-sm flex items-center">
            {filteredCharacters.length} character
            {filteredCharacters.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Aura Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Aura Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {auraOptions.map((aura) => (
                    <Button
                      key={aura}
                      onClick={() => setSelectedAura(aura as any)}
                      variant={selectedAura === aura ? "default" : "outline"}
                      className={
                        selectedAura === aura
                          ? "bg-yellow-500 text-black hover:bg-yellow-600"
                          : "border-slate-600 text-gray-300"
                      }
                      size="sm"
                    >
                      {aura}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Village Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Village
                </label>
                <select
                  value={selectedVillage}
                  onChange={(e) => setSelectedVillage(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  {villageOptions.map((village) => (
                    <option key={village} value={village}>
                      {village}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            {(searchQuery ||
              selectedAura !== "All" ||
              selectedVillage !== "All") && (
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedAura("All");
                  setSelectedVillage("All");
                }}
                variant="ghost"
                size="sm"
                className="mt-3 text-red-400 hover:text-red-300 hover:bg-slate-700"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All Filters
              </Button>
            )}
          </div>
        )}

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <Card
                key={`${character.name}-${character.village}`}
                className={`border-l-4 cursor-pointer transition hover:shadow-lg hover:shadow-yellow-500/20 ${
                  auraColors[character.aura as keyof typeof auraColors]
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {character.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-gray-600 dark:text-gray-400">
                        {character.village}
                      </CardDescription>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${auraBadgeColors[character.aura]}`}
                    >
                      {character.aura}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {character.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4">
                    {character.description}
                  </p>
                  {character.kekkeiGenkai && (
                    <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        Kekkei Genkai:{" "}
                        <span className="text-gray-700 dark:text-gray-300">
                          {character.kekkeiGenkai}
                        </span>
                      </p>
                    </div>
                  )}
                  {character.abilities && character.abilities.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                        Abilities:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {character.abilities.slice(0, 3).map((ability, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-700 dark:bg-gray-600 text-gray-100 px-2 py-0.5 rounded"
                          >
                            {ability}
                          </span>
                        ))}
                        {character.abilities.length > 3 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            +{character.abilities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                No characters found matching your search.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Try searching with different keywords or adjust your filters.
              </p>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            Total Characters in Database: {completeCharacterDatabase.length}
          </p>
          <p className="mt-2 text-xs">
            Legendary:{" "}
            {
              completeCharacterDatabase.filter((c) => c.aura === "Legendary")
                .length
            }{" "}
            | Elite:{" "}
            {completeCharacterDatabase.filter((c) => c.aura === "Elite").length}{" "}
            | Notable:{" "}
            {
              completeCharacterDatabase.filter((c) => c.aura === "Notable")
                .length
            }
          </p>
        </div>
      </div>
    </div>
  );
}
