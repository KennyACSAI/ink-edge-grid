import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";

interface SlideMarketProps {
  isVisible: boolean;
}

const SlideMarket = ({ isVisible }: SlideMarketProps) => {
  const marketData = [
    { segment: "TAM", description: "Global Gen Z/Y, mobile, hyper-local need", value: "1.45B", unit: "users" },
    { segment: "SAM", description: "Europe + UK + Turkey", value: "162M", unit: "users" },
    { segment: "SOM Year 1", description: "Rotterdam + Amsterdam", value: "796K", unit: "users" },
  ];

  return (
    <SlideWrapper index={3} id="market" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-display-sm md:text-display font-bold text-white mb-4">
                <span className="text-niice-purple-light">€3.3B</span> European market growing at <span className="text-niice-green">15.7% CAGR</span>
              </h2>
            </div>

            {/* Market Table */}
            <GlassCard>
              <table className="pitch-table">
                <thead>
                  <tr>
                    <th>Segment</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((row) => (
                    <tr key={row.segment}>
                      <td>
                        <div>
                          <span className="font-medium text-white">{row.segment}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{row.description}</p>
                        </div>
                      </td>
                      <td>
                        <span className="text-lg font-bold text-primary">{row.value}</span>
                        <span className="text-muted-foreground ml-1">{row.unit}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            {/* Bottom-up Calculation */}
            <GlassCard className="!p-5">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Bottom-up calculation</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-white font-medium">796,000</span> Gen Z/Y in target cities
                </p>
                <p className="text-muted-foreground">
                  × <span className="text-white">25%</span> MAU rate × <span className="text-white">2%</span> conversion × <span className="text-white">€6</span> ARPPU
                </p>
                <p className="text-lg font-bold text-niice-green pt-2">
                  = €72,624 Year 1 ceiling
                </p>
              </div>
            </GlassCard>

            <p className="text-muted-foreground">
              Social discovery growing <span className="pill-badge-green">2.4× faster</span> than traditional dating apps.
            </p>
          </div>

          {/* Right: Funnel Diagram */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* TAM */}
              <div className="relative mb-4">
                <div 
                  className="h-24 rounded-3xl bg-gradient-to-r from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center"
                  style={{ width: "100%" }}
                >
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">
                      <AnimatedCounter value={1.45} suffix="B" isVisible={isVisible} decimals={2} />
                    </p>
                    <p className="text-sm text-primary">TAM - Global</p>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-primary/30" />
              </div>

              {/* SAM */}
              <div className="relative mb-4 flex justify-center">
                <div 
                  className="h-20 rounded-2xl bg-gradient-to-r from-niice-purple-light/30 to-niice-purple-light/10 border border-niice-purple-light/30 flex items-center justify-center"
                  style={{ width: "75%" }}
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      <AnimatedCounter value={162} suffix="M" isVisible={isVisible} />
                    </p>
                    <p className="text-sm text-niice-purple-light">SAM - Europe</p>
                  </div>
                </div>
              </div>

              {/* SOM */}
              <div className="flex justify-center">
                <div 
                  className="h-16 rounded-xl bg-gradient-to-r from-niice-green/30 to-niice-green/10 border border-niice-green/30 flex items-center justify-center shadow-glow-green"
                  style={{ width: "50%" }}
                >
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">
                      <AnimatedCounter value={796} suffix="K" isVisible={isVisible} />
                    </p>
                    <p className="text-xs text-niice-green">SOM - Year 1</p>
                  </div>
                </div>
              </div>

              {/* Flow lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7636E4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#82FF00" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideMarket;
