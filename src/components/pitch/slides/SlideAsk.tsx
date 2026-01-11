import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { Coins, Code, Megaphone, Scale, Settings, Shield, Target, Rocket } from "lucide-react";

interface SlideAskProps {
  isVisible: boolean;
}

const SlideAsk = ({ isVisible }: SlideAskProps) => {
  const useOfFunds = [
    { icon: Code, category: "Product Development", amount: "€92,000", percent: 40 },
    { icon: Megaphone, category: "Marketing & Growth", amount: "€57,500", percent: 25 },
    { icon: Scale, category: "Compliance & Legal", amount: "€34,500", percent: 15 },
    { icon: Settings, category: "Operations", amount: "€23,000", percent: 10 },
    { icon: Shield, category: "Contingency", amount: "€23,000", percent: 10 },
  ];

  const milestones = [
    { month: "Month 3", target: "10,000 installs, Rotterdam density validated" },
    { month: "Month 6", target: "Amsterdam launch, 22,000 installs" },
    { month: "Month 12", target: "40,000 installs, 10,000 MAU, €1,200 MRR" },
  ];

  return (
    <SlideWrapper index={11} id="ask" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-display-sm md:text-display font-bold text-white mb-2">
                Raising <span className="text-niice-green">€230,000</span> seed
              </h2>
              <p className="text-xl text-niice-purple-light">at €2M post-money</p>
            </div>

            {/* Use of Funds */}
            <GlassCard>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Use of Funds</h4>
              <div className="space-y-3">
                {useOfFunds.map((item) => (
                  <div key={item.category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-white">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-niice-green">{item.amount}</span>
                      <span className="text-xs text-muted-foreground w-8">{item.percent}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Milestones */}
            <GlassCard className="!p-5">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-niice-green" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Milestones</h4>
              </div>
              <div className="space-y-3">
                {milestones.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-sm font-medium text-primary min-w-[80px]">{item.month}</span>
                    <span className="text-sm text-muted-foreground">{item.target}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Runway & Series A */}
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="font-medium text-white">Runway:</span> 12 months → Series A readiness
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-white">Series A target:</span>{" "}
                <span className="text-niice-purple-light">€1.5M–€3M</span> at{" "}
                <span className="text-niice-green">€8M–€12M</span> valuation
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm space-y-6">
              {/* Allocation Chart */}
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-6 text-center">Fund Allocation</h4>
                <div className="space-y-3">
                  {useOfFunds.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{item.category}</span>
                        <span className="text-white font-medium">{item.percent}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-primary to-niice-purple-light transition-all duration-1000"
                          style={{ 
                            width: isVisible ? `${item.percent}%` : "0%",
                            transitionDelay: `${i * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Timeline */}
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">Milestone Timeline</h4>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-niice-green via-primary to-niice-purple-light" />
                  
                  {/* Timeline Items */}
                  <div className="space-y-6 pl-10">
                    {milestones.map((item, i) => (
                      <div key={i} className="relative">
                        {/* Dot */}
                        <div className={`absolute -left-10 top-1 w-4 h-4 rounded-full border-2 ${
                          i === 0 ? "bg-niice-green border-niice-green shadow-glow-green" :
                          i === 1 ? "bg-primary border-primary" :
                          "bg-niice-purple-light border-niice-purple-light"
                        }`} />
                        
                        {/* Content */}
                        <div>
                          <p className="text-sm font-medium text-white">{item.month}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.target}</p>
                        </div>
                      </div>
                    ))}
                    
                    {/* Series A */}
                    <div className="relative pt-4">
                      <div className="absolute -left-10 top-5 w-4 h-4 rounded-full bg-accent border-2 border-accent" />
                      <div className="flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-accent" />
                        <p className="text-sm font-medium text-accent">Series A Ready</p>
                      </div>
                    </div>
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

export default SlideAsk;
