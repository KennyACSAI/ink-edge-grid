import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { Coins, Crown, Calendar, TrendingUp } from "lucide-react";

interface SlideModelProps {
  isVisible: boolean;
}

const SlideModel = ({ isVisible }: SlideModelProps) => {
  const pricing = [
    { icon: Crown, tier: "Premium", price: "€5.99/mo", target: "Power users hitting limits" },
    { icon: Calendar, tier: "Host Premium", price: "€39.99/mo", target: "Community organizers" },
    { icon: Coins, tier: "Event commission", price: "3–5%", target: "Paid event hosts" },
  ];

  const unitEconomics = [
    { metric: "ARPPU", year1: "€6", year5: "€20" },
    { metric: "Payer Rate", year1: "2%", year5: "5%" },
    { metric: "Churn", year1: "15%", year5: "8%" },
    { metric: "LTV", year1: "€34", year5: "€213" },
    { metric: "LTV/CAC", year1: "0.15×", year5: "4.2×" },
  ];

  // Revenue mix data for donut chart
  const revenueMix = [
    { label: "Premium", percent: 55, color: "#7636E4" },
    { label: "Host Premium", percent: 25, color: "#a78bfa" },
    { label: "Commission", percent: 15, color: "#82FF00" },
    { label: "À la carte", percent: 5, color: "#2dd4bf" },
  ];

  return (
    <SlideWrapper index={8} id="model" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-display-sm md:text-display font-bold text-white">
              Freemium with <span className="text-niice-purple-light">3 revenue streams</span>
            </h2>

            {/* Pricing Cards */}
            <div className="space-y-3">
              {pricing.map((tier, i) => (
                <GlassCard key={i} hover className="!p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <tier.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{tier.tier}</p>
                        <p className="text-xs text-muted-foreground">{tier.target}</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-niice-green">{tier.price}</span>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Plus line */}
            <p className="text-sm text-muted-foreground">
              <span className="pill-badge">Niice Coins</span> (in-app currency) + à la carte features (€0.99–€4.49)
            </p>

            {/* Unit Economics Table */}
            <GlassCard>
              <table className="pitch-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th className="text-center">Year 1</th>
                    <th className="text-center">Year 5</th>
                  </tr>
                </thead>
                <tbody>
                  {unitEconomics.map((row) => (
                    <tr key={row.metric}>
                      <td className="font-medium text-white">{row.metric}</td>
                      <td className="text-center text-muted-foreground">{row.year1}</td>
                      <td className="text-center">
                        <span className="font-bold text-niice-green">{row.year5}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            <p className="text-sm text-muted-foreground">
              Target: <span className="text-white font-medium">2% conversion</span> (vs. 9% industry benchmark — conservative by design)
            </p>
          </div>

          {/* Right: Charts */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm space-y-8">
              {/* Donut Chart */}
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">Revenue Mix (Year 5)</h4>
                <div className="relative w-48 h-48 mx-auto">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {revenueMix.reduce((acc, item, i) => {
                      const offset = acc.offset;
                      const circumference = 2 * Math.PI * 35;
                      const strokeDasharray = (item.percent / 100) * circumference;
                      
                      acc.elements.push(
                        <circle
                          key={i}
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke={item.color}
                          strokeWidth="12"
                          strokeDasharray={`${strokeDasharray} ${circumference}`}
                          strokeDashoffset={-offset}
                          className="transition-all duration-1000"
                          style={{ 
                            opacity: isVisible ? 1 : 0,
                            transitionDelay: `${i * 150}ms`
                          }}
                        />
                      );
                      
                      acc.offset = offset + strokeDasharray;
                      return acc;
                    }, { elements: [] as React.ReactNode[], offset: 0 }).elements}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">€3.85M</p>
                      <p className="text-xs text-muted-foreground">Year 5 Rev</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {revenueMix.map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* LTV/CAC Chart */}
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">LTV/CAC Trajectory</h4>
                <div className="flex items-end justify-between gap-2 h-32 px-4">
                  {[
                    { year: "Y1", value: 0.15, height: 10 },
                    { year: "Y2", value: 0.8, height: 20 },
                    { year: "Y3", value: 1.8, height: 40 },
                    { year: "Y4", value: 2.9, height: 65 },
                    { year: "Y5", value: 4.2, height: 100 },
                  ].map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-xs font-bold text-white">{item.value}×</span>
                      <div 
                        className="w-full chart-bar-green transition-all duration-1000"
                        style={{ 
                          height: isVisible ? `${item.height}%` : "0%",
                          transitionDelay: `${i * 100}ms`
                        }}
                      />
                      <span className="text-[10px] text-muted-foreground">{item.year}</span>
                    </div>
                  ))}
                </div>
                {/* Breakeven line */}
                <div className="relative h-0 -mt-24">
                  <div className="absolute left-0 right-0 border-t border-dashed border-white/30" style={{ top: "50%" }} />
                  <span className="absolute right-0 -top-3 text-[10px] text-muted-foreground">1.0× breakeven</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideModel;
