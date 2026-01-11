import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { TrendingUp, MapPin } from "lucide-react";

interface SlideFinancialsProps {
  isVisible: boolean;
}

const SlideFinancials = ({ isVisible }: SlideFinancialsProps) => {
  const financialData = [
    { year: "Y1", installs: "40K", mau: "10K", revenue: 8, costs: 209, net: -201 },
    { year: "Y2", installs: "120K", mau: "36K", revenue: 76, costs: 550, net: -474 },
    { year: "Y3", installs: "300K", mau: "114K", revenue: 502, costs: 1270, net: -768 },
    { year: "Y4", installs: "600K", mau: "258K", revenue: 1600, costs: 2200, net: -594 },
    { year: "Y5", installs: "1M", mau: "480K", revenue: 3850, costs: 3370, net: 478 },
  ];

  const assumptions = [
    { label: "MAU rate", value: "25% → 48%", note: "(network effects compound)" },
    { label: "Payer rate", value: "2% → 5%", note: "(value increases with density)" },
  ];

  const expansion = [
    { year: "Y1", city: "Amsterdam" },
    { year: "Y2", city: "London" },
    { year: "Y3", city: "Berlin" },
    { year: "Y4", city: "Istanbul" },
    { year: "Y5", city: "LA" },
  ];

  // Chart data for revenue vs costs
  const maxValue = 4000;

  return (
    <SlideWrapper index={10} id="financials" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-display-sm md:text-display font-bold text-white">
              Path to profitability by <span className="text-niice-green">Year 5</span>
            </h2>

            {/* Financial Table */}
            <GlassCard className="overflow-x-auto mobile-scroll-area">
              <table className="pitch-table min-w-[500px]">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center">Installs</th>
                    <th className="text-center">MAU</th>
                    <th className="text-center">Revenue</th>
                    <th className="text-center">Costs</th>
                    <th className="text-center">Net</th>
                  </tr>
                </thead>
                <tbody>
                  {financialData.map((row, i) => (
                    <tr key={row.year}>
                      <td className="font-medium text-white">{row.year}</td>
                      <td className="text-center text-muted-foreground">{row.installs}</td>
                      <td className="text-center text-muted-foreground">{row.mau}</td>
                      <td className="text-center text-niice-green">€{row.revenue >= 1000 ? `${(row.revenue / 1000).toFixed(1)}M` : `${row.revenue}K`}</td>
                      <td className="text-center text-muted-foreground">€{row.costs >= 1000 ? `${(row.costs / 1000).toFixed(2)}M` : `${row.costs}K`}</td>
                      <td className={`text-center font-medium ${row.net >= 0 ? "text-niice-green" : "text-destructive/80"}`}>
                        {row.net >= 0 ? "+" : ""}€{Math.abs(row.net)}K
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            {/* Assumptions */}
            <GlassCard className="!p-5">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Assumptions</h4>
              <div className="space-y-2">
                {assumptions.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-white font-medium">{item.label}:</span>
                    <span className="text-niice-green">{item.value}</span>
                    <span className="text-xs text-muted-foreground">{item.note}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Expansion */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm text-muted-foreground">Expansion:</span>
              {expansion.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-sm text-white">{item.city}</span>
                  <span className="text-xs text-muted-foreground">({item.year})</span>
                  {i < expansion.length - 1 && <span className="text-muted-foreground/30 ml-2">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chart */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-6 text-center">Revenue vs Costs (€K)</h4>
                
                <div className="relative h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-muted-foreground">
                    <span>4M</span>
                    <span>3M</span>
                    <span>2M</span>
                    <span>1M</span>
                    <span>0</span>
                  </div>

                  {/* Chart Area */}
                  <div className="ml-14 h-full flex items-end justify-between gap-4 pr-4 pb-8 relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="border-t border-white/5" />
                      ))}
                    </div>

                    {/* Bars */}
                    {financialData.map((row, i) => {
                      const revenueHeight = (row.revenue / maxValue) * 100;
                      const costsHeight = (row.costs / maxValue) * 100;
                      
                      return (
                        <div key={i} className="flex-1 flex gap-1 items-end relative z-10">
                          {/* Revenue Bar */}
                          <div 
                            className="flex-1 chart-bar-green rounded-t-md transition-all duration-1000"
                            style={{ 
                              height: isVisible ? `${revenueHeight}%` : "0%",
                              transitionDelay: `${i * 100}ms`
                            }}
                          />
                          {/* Costs Bar */}
                          <div 
                            className="flex-1 chart-bar rounded-t-md transition-all duration-1000"
                            style={{ 
                              height: isVisible ? `${costsHeight}%` : "0%",
                              transitionDelay: `${i * 100 + 50}ms`
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* X-axis labels */}
                  <div className="ml-14 flex justify-between pr-4">
                    {financialData.map((row) => (
                      <span key={row.year} className="text-xs text-muted-foreground text-center flex-1">{row.year}</span>
                    ))}
                  </div>

                  {/* Break-even indicator */}
                  {isVisible && (
                    <div className="absolute right-4 top-8 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-niice-green animate-pulse" />
                      <span className="text-xs text-niice-green font-medium">Break-even Y5</span>
                    </div>
                  )}
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-niice-green" />
                    <span className="text-xs text-muted-foreground">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-primary" />
                    <span className="text-xs text-muted-foreground">Costs</span>
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

export default SlideFinancials;
