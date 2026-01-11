import { cn } from "@/lib/utils";

interface PitchNavProps {
  sections: { id: string; label: string }[];
  currentSection: number;
  onNavigate: (index: number) => void;
}

const NAV_ITEMS = [
  { label: "Problem", index: 1 },
  { label: "Solution", index: 2 },
  { label: "Market", index: 3 },
  { label: "Product", index: 4 },
  { label: "Traction", index: 5 },
  { label: "GTM", index: 6 },
  { label: "Competition", index: 7 },
  { label: "Model", index: 8 },
  { label: "Team", index: 9 },
  { label: "Financials", index: 10 },
  { label: "Ask", index: 11 },
];

const PitchNav = ({ currentSection, onNavigate }: PitchNavProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card mx-4 mt-4 md:mx-8 px-4 md:px-6 py-3 rounded-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate(0)}
            className="text-xl font-bold text-white hover:text-primary transition-colors"
          >
            Niice
          </button>

          {/* Nav Items - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.index)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300",
                  currentSection === item.index
                    ? "text-white bg-primary/20"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate(12)}
            className="px-4 py-2 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-glow-purple"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PitchNav;
