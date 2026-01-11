import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import { Check, X, AlertTriangle, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideCompetitionProps {
  isVisible: boolean;
}

const SlideCompetition = ({ isVisible }: SlideCompetitionProps) => {
  const competitors = ["Niice", "Amigos", "Timeleft", "Bumble BFF", "Meetup"];
  
  const comparisonData = [
    {
      feature: "Attendance focus",
      values: [
        { status: "check", text: "Primary KPI" },
        { status: "x", text: "Fake profiles" },
        { status: "check", text: "Weekly only" },
        { status: "x", text: "Swipe-based" },
        { status: "x", text: "40–60% no-show" },
      ],
    },
    {
      feature: "Trust verification",
      values: [
        { status: "check", text: "ID + face" },
        { status: "x", text: "None (2.1★ rating)" },
        { status: "warn", text: "Partial" },
        { status: "warn", text: "Optional" },
        { status: "x", text: "None" },
      ],
    },
    {
      feature: "Discovery unified",
      values: [
        { status: "check", text: "People + Events + Feed" },
        { status: "warn", text: "Paywalled" },
        { status: "x", text: "Events only" },
        { status: "x", text: "People only" },
        { status: "x", text: "Events only" },
      ],
    },
    {
      feature: "Gen Z UX",
      values: [
        { status: "check", text: "Map-first, ephemeral" },
        { status: "x", text: "Adult-focused" },
        { status: "warn", text: "Niche format" },
        { status: "warn", text: "Dating UX" },
        { status: "x", text: "Pre-mobile" },
      ],
    },
    {
      feature: "Density-gated",
      values: [
        { status: "check", text: "City-by-city" },
        { status: "x", text: "No expansion logic" },
        { status: "check", text: "Yes" },
        { status: "x", text: "Global" },
        { status: "x", text: "Global" },
      ],
    },
  ];

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === "check") return <Check className="w-4 h-4 text-niice-green" />;
    if (status === "x") return <X className="w-4 h-4 text-destructive" />;
    return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
  };

  return (
    <SlideWrapper index={7} id="competition" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text + Table */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-display-sm md:text-display font-bold text-white">
              No platform converts local intent to <span className="text-niice-green">offline participation</span> at scale
            </h2>

            {/* Comparison Table */}
            <GlassCard className="overflow-x-auto mobile-scroll-area">
              <table className="pitch-table min-w-[600px]">
                <thead>
                  <tr>
                    <th className="sticky left-0 bg-card/80 backdrop-blur-sm z-10"></th>
                    {competitors.map((comp, i) => (
                      <th key={comp} className={cn("text-center", i === 0 && "text-primary")}>
                        {comp}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.feature}>
                      <td className="sticky left-0 bg-card/80 backdrop-blur-sm z-10 font-medium text-white text-sm">
                        {row.feature}
                      </td>
                      {row.values.map((val, i) => (
                        <td key={i} className="text-center">
                          <div className={cn(
                            "inline-flex flex-col items-center gap-1",
                            i === 0 && "px-2 py-1 rounded-lg bg-primary/10"
                          )}>
                            <StatusIcon status={val.status} />
                            <span className="text-[10px] text-muted-foreground">{val.text}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            {/* Moat */}
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <span className="text-white font-medium">Our moat:</span> Local network effects + trust accumulation + behavioral data that compounds with every interaction.
              </p>
            </div>
          </div>

          {/* Right: 2x2 Matrix */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-6 text-center">Trust vs Discovery Unification</h4>
                
                {/* Matrix */}
                <div className="relative aspect-square">
                  {/* Axes */}
                  <div className="absolute left-0 top-1/2 w-full h-px bg-border" />
                  <div className="absolute top-0 left-1/2 h-full w-px bg-border" />
                  
                  {/* Labels */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">← Low Trust | High Trust →</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6">
                    <span className="text-xs text-muted-foreground">← Fragmented | Unified →</span>
                  </div>
                  
                  {/* Quadrant Labels */}
                  <div className="absolute top-2 left-2 text-[10px] text-muted-foreground/50">Low Trust, Fragmented</div>
                  <div className="absolute top-2 right-2 text-[10px] text-muted-foreground/50">Low Trust, Unified</div>
                  <div className="absolute bottom-2 left-2 text-[10px] text-muted-foreground/50">High Trust, Fragmented</div>
                  <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground/50">High Trust, Unified</div>
                  
                  {/* Competitors */}
                  <div className="absolute top-8 left-1/4 -translate-x-1/2 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-[10px] text-muted-foreground">Meetup</span>
                  </div>
                  <div className="absolute top-16 right-1/4 translate-x-1/2 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-[10px] text-muted-foreground">Amigos</span>
                  </div>
                  <div className="absolute bottom-16 left-1/3 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-[10px] text-muted-foreground">Bumble BFF</span>
                  </div>
                  <div className="absolute bottom-20 left-1/4 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-[10px] text-muted-foreground">Timeleft</span>
                  </div>
                  
                  {/* Niice - Top Right */}
                  <div className="absolute bottom-8 right-8 px-4 py-2 rounded-xl bg-primary/20 border border-primary shadow-glow-purple">
                    <span className="text-sm font-bold text-primary">Niice</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideCompetition;
