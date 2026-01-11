import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { MapPin, Users, MessageCircle, TrendingUp } from "lucide-react";

interface SlideGTMProps {
  isVisible: boolean;
}

const SlideGTM = ({ isVisible }: SlideGTMProps) => {
  const wedgeBullets = [
    { icon: Users, text: "High need (new city, no network)" },
    { icon: MapPin, text: "High density (clustered in dorms, campuses)" },
    { icon: MessageCircle, text: "Low CAC (WhatsApp groups, orientation weeks, ESN chapters)" },
  ];

  const playbook = [
    { phase: "Seed", weeks: "Weeks 1–4", installs: "1,500", tactics: "10 ambassadors, dorm group chats" },
    { phase: "Build", weeks: "Weeks 5–8", installs: "5,000", tactics: "Venue partnerships, Instagram" },
    { phase: "Lock", weeks: "Weeks 9–12", installs: "10,000", tactics: "ESN partnership, org hosts" },
  ];

  const unitEconomics = [
    { label: "Blended CPI", value: "€0.85–€1.18", note: "(including organic)" },
    { label: "K-factor", value: "1.0", note: "(each paid user brings 1 organic)" },
    { label: "3-month budget", value: "€4,800", note: "" },
  ];

  return (
    <SlideWrapper index={6} id="gtm" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-display-sm md:text-display font-bold text-white mb-2">
                Wedge: <span className="text-niice-green">13,000</span> international students in Rotterdam
              </h2>
            </div>

            {/* Why this wedge */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Why this wedge?</h3>
              <div className="space-y-2">
                {wedgeBullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 12-Week Playbook */}
            <GlassCard>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">12-Week Playbook</h4>
              <table className="pitch-table">
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Installs</th>
                    <th>Tactics</th>
                  </tr>
                </thead>
                <tbody>
                  {playbook.map((row) => (
                    <tr key={row.phase}>
                      <td>
                        <div>
                          <span className="font-medium text-white">{row.phase}</span>
                          <p className="text-xs text-muted-foreground">{row.weeks}</p>
                        </div>
                      </td>
                      <td>
                        <span className="font-bold text-niice-green">{row.installs}</span>
                      </td>
                      <td className="text-muted-foreground text-sm">{row.tactics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            {/* Unit Economics */}
            <div className="grid grid-cols-3 gap-3">
              {unitEconomics.map((item, i) => (
                <GlassCard key={i} className="!p-4 text-center">
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                  {item.note && <p className="text-[10px] text-muted-foreground/60">{item.note}</p>}
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right: Rotterdam Map + Funnel */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
              {/* Rotterdam Heatmap Mock */}
              <GlassCard className="relative overflow-hidden">
                <div className="aspect-square relative">
                  {/* Map Grid */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="white" strokeWidth="0.2" />
                      ))}
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="white" strokeWidth="0.2" />
                      ))}
                    </svg>
                  </div>

                  {/* Hotspots */}
                  <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-niice-green/30 blur-xl animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-primary/40 blur-xl animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-niice-green/20 blur-xl animate-pulse" style={{ animationDelay: "1s" }} />

                  {/* Labels */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white">Rotterdam</span>
                  </div>
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="px-2 py-1 rounded-full bg-niice-green/20 border border-niice-green/40">
                      <span className="text-[10px] font-medium text-niice-green">Erasmus</span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="px-2 py-1 rounded-full bg-primary/20 border border-primary/40">
                      <span className="text-[10px] font-medium text-primary">City Center</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Channel Funnel */}
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Ambassadors</p>
                </div>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-niice-green/20 flex items-center justify-center mb-2">
                    <MessageCircle className="w-6 h-6 text-niice-green" />
                  </div>
                  <p className="text-xs text-muted-foreground">Groups</p>
                </div>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground">Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideGTM;
