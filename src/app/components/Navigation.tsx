import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Heroes", href: "#heroes" },
    { name: "Hokage", href: "#hokage" },
    { name: "Wars", href: "#wars" },
    { name: "Missions", href: "#missions" },
    { name: "Videos", href: "#videos" },
    { name: "Facts", href: "#facts" },
    { name: "Clans", href: "#powerful-clans" },
    { name: "Finale", href: "#finale" },
    { name: "Search", href: "#search" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/30"
      style={{
        backgroundImage: "url(/images/naruto-navbar-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 to-black/85 backdrop-blur-md" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced styling */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Flame className="w-8 h-8 text-orange-500 group-hover:text-orange-400 transition-colors duration-300 animate-pulse" />
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent hover:from-orange-400 hover:via-yellow-400 hover:to-orange-400 transition-all duration-300">
              NARUTO UNIVERSE
            </span>
          </div>

          {/* Desktop Menu with enhanced hover effects */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-400 transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-orange-500/10"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-orange-500 hover:text-orange-400 transition-colors duration-300 p-2 hover:bg-orange-500/10 rounded-md"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with smooth animation */}
        {isOpen && (
          <div
            className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-300"
            id="mobile-nav-menu"
          >
            <div className="space-y-1 border-t border-orange-500/20 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
