import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { Check, Smartphone, Target } from "lucide-react";

interface SlideTractionProps {
  isVisible: boolean;
}

const SlideTraction = ({ isVisible }: SlideTractionProps) => {
  const surveyResults = [
    { finding: "Meeting people is hard", result: 50 },
    { finding: "Won't attend events alone", result: 63.5 },
    { finding: "Would try Niice", result: 57 },
    { finding: "Open to premium", result: 63.5 },
  ];

  const productStatus = [
    "MVP complete (TestFlight + Expo Go)",
    "Core flows built: onboarding, discovery, events, chat, groups, Niice Now",
    "2–3 months to App Store launch (security audit, badges, AI integration)",
  ];

  const betaKPIs = [
    { metric: "First-week attendance rate", target: "> 15%" },
    { metric: "D30 retention", target: "> 20%" },
    { metric: "RSVP-to-attendance", target: "> 30%" },
  ];

  return (
    <SlideWrapper index={5} id="traction" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-display-sm md:text-display font-bold text-white mb-2">
                Pre-launch validation confirms <span className="text-niice-green">demand</span>
              </h2>
              <p className="text-muted-foreground">
                Survey: 200 students, Sapienza University Rome (Q4 2025)
              </p>
            </div>

            {/* Survey Results Table */}
            <GlassCard>
              <table className="pitch-table">
                <thead>
                  <tr>
                    <th>Finding</th>
                    <th className="text-right">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {surveyResults.map((row) => (
                    <tr key={row.finding}>
                      <td className="text-muted-foreground">{row.finding}</td>
                      <td className="text-right">
                        <span className="text-xl font-bold text-primary">
                          <AnimatedCounter value={row.result} suffix="%" isVisible={isVisible} decimals={1} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            {/* Product Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Product Status</h3>
              </div>
              <div className="space-y-2">
                {productStatus.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-niice-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beta KPIs */}
            <GlassCard className="!p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-accent" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Beta KPI Targets</h4>
              </div>
              <div className="space-y-2">
                {betaKPIs.map((kpi, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{kpi.metric}</span>
                    <span className="pill-badge-green text-xs">{kpi.target}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right: Visual - Bar Chart + MVP Mock */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-8">
              {/* Bar Chart */}
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-6">Survey Results</h4>
                <div className="flex items-end justify-between gap-4 h-48">
                  {surveyResults.map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full relative flex flex-col items-center">
                        <span className="text-xs font-bold text-white mb-1">
                          <AnimatedCounter value={item.result} suffix="%" isVisible={isVisible} decimals={1} />
                        </span>
                        <div 
                          className="w-full chart-bar transition-all duration-1000"
                          style={{ 
                            height: isVisible ? `${item.result * 1.5}px` : "0px",
                            transitionDelay: `${i * 100}ms`
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground text-center leading-tight">
                        {item.finding.split(" ").slice(0, 2).join(" ")}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* MVP Badge */}
              <div className="flex justify-center">
                <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/20 to-niice-green/20 border border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-niice-green animate-pulse" />
                    <span className="text-sm font-medium text-white">MVP Live on TestFlight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideTraction;
