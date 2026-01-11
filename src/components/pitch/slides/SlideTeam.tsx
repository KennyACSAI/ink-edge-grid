import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import { User, Briefcase, Users, Award, Plus, ArrowRight } from "lucide-react";

interface SlideTeamProps {
  isVisible: boolean;
}

const SlideTeam = ({ isVisible }: SlideTeamProps) => {
  const founders = [
    { name: "Basri Kerem Alhan", role: "CEO & Co-Founder", bio: "Product vision & strategy" },
    { name: "Kenessary Khabat", role: "COO & Co-Founder", bio: "Operations & growth" },
  ];

  const keyHires = [
    "Technical Co-Founder / Lead Engineer",
    "Community Operations Lead",
  ];

  const advisors = [
    "ESN partnership relationships",
    "Advisory board to be finalized",
  ];

  const timeline = [
    { phase: "Now", items: ["Founders", "MVP"] },
    { phase: "Post-Seed", items: ["Tech Lead", "Community Ops"] },
    { phase: "Series A", items: ["Engineering Team", "Marketing"] },
  ];

  return (
    <SlideWrapper index={9} id="team" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-display-sm md:text-display font-bold text-white">
              Team
            </h2>

            {/* Founder Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {founders.map((founder, i) => (
                <GlassCard key={i} hover className="!p-5">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar Placeholder */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center mb-4 relative group">
                      <User className="w-8 h-8 text-primary/50" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                        <span className="text-[10px] text-white">Add photo</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-white">{founder.name}</h3>
                    <p className="text-sm text-primary">{founder.role}</p>
                    <p className="text-xs text-muted-foreground mt-2">{founder.bio}</p>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Key Hires */}
            <GlassCard className="!p-5">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-niice-green" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Key Hires (Funded)</h4>
              </div>
              <div className="space-y-2">
                {keyHires.map((hire, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Plus className="w-4 h-4 text-niice-green" />
                    <span className="text-sm text-white">{hire}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Advisors */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Advisors</h4>
              </div>
              <div className="space-y-2">
                {advisors.map((advisor, i) => (
                  <p key={i} className="text-sm text-muted-foreground">• {advisor}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hiring Timeline */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              <GlassCard>
                <h4 className="text-sm font-medium text-muted-foreground mb-6 text-center">Hiring Roadmap</h4>
                
                <div className="space-y-6">
                  {timeline.map((phase, i) => (
                    <div key={i} className="relative">
                      {/* Phase Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          i === 0 ? "bg-niice-green/20 border border-niice-green/30" :
                          i === 1 ? "bg-primary/20 border border-primary/30" :
                          "bg-accent/20 border border-accent/30"
                        }`}>
                          <Users className={`w-5 h-5 ${
                            i === 0 ? "text-niice-green" :
                            i === 1 ? "text-primary" :
                            "text-accent"
                          }`} />
                        </div>
                        <span className="font-medium text-white">{phase.phase}</span>
                      </div>
                      
                      {/* Items */}
                      <div className="ml-12 space-y-2">
                        {phase.items.map((item, j) => (
                          <div key={j} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Arrow */}
                      {i < timeline.length - 1 && (
                        <div className="absolute left-5 -bottom-3 transform">
                          <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideTeam;
