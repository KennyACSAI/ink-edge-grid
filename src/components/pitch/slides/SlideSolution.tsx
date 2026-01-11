import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import PhoneMock from "../PhoneMock";
import { MapPin, Calendar, MessageCircle, ShieldCheck, Zap, TrendingUp } from "lucide-react";

interface SlideSolutionProps {
  isVisible: boolean;
}

const SlideSolution = ({ isVisible }: SlideSolutionProps) => {
  const features = [
    { icon: MapPin, text: "Discover verified people, events, and local conversations within walking distance" },
    { icon: Calendar, text: "Coordinate directly on the map — no app-switching, no dead groups" },
    { icon: MessageCircle, text: "Meet in person with post-event matching that rewards real attendance" },
  ];

  const whyNow = [
    { num: 1, title: "Behavioral shift", text: "Mobile-first local search is native to Gen Z — the missing piece is coordination" },
    { num: 2, title: "Trust demand", text: "85% of users want age and photo verification on social platforms (TransUnion 2025)" },
    { num: 3, title: "Category validation", text: "$100M+ invested in hyper-local social in 2025; 222 just raised $10.1M Series A" },
  ];

  return (
    <SlideWrapper index={2} id="solution" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-display-sm md:text-display font-bold text-white">
              Niice: <span className="text-niice-purple-light">One map.</span> Real people. <span className="text-niice-green">Verified meetups.</span>
            </h2>

            {/* What we do */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">What we do</h3>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed pt-1">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why now */}
            <GlassCard className="!p-5">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Why now?</h3>
              <div className="space-y-4">
                {whyNow.map((item) => (
                  <div key={item.num} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-niice-green/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-niice-green">{item.num}</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">{item.title}:</span>
                      <span className="text-muted-foreground ml-1">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right: Phone Mock */}
          <div className="flex items-center justify-center">
            <PhoneMock>
              <div className="w-full h-full bg-niice-dark p-4 pt-10">
                {/* Map Background */}
                <div className="relative h-full rounded-2xl bg-gradient-to-b from-niice-dark-purple to-niice-dark overflow-hidden">
                  {/* Map Grid */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <line key={`h-${i}`} x1="0" y1={i * 12.5} x2="100" y2={i * 12.5} stroke="white" strokeWidth="0.3" />
                      ))}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <line key={`v-${i}`} x1={i * 12.5} y1="0" x2={i * 12.5} y2="100" stroke="white" strokeWidth="0.3" />
                      ))}
                    </svg>
                  </div>

                  {/* Location Pins */}
                  <div className="absolute inset-0">
                    <div className="absolute top-12 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-glow-purple">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-20 right-12 w-6 h-6 rounded-full bg-niice-green flex items-center justify-center">
                      <span className="text-[10px] font-bold">5</span>
                    </div>
                    <div className="absolute top-32 left-16 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Calendar className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Toggle Pills */}
                  <div className="absolute top-4 left-4 right-4 flex gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-medium">People</div>
                    <div className="px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-xs font-medium">Events</div>
                    <div className="px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-xs font-medium">Niice Now</div>
                  </div>

                  {/* Bottom Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-400" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">Coffee meetup</p>
                        <p className="text-xs text-muted-foreground">0.4 km • 3 going</p>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-niice-green/20 border border-niice-green/30">
                        <ShieldCheck className="w-3 h-3 text-niice-green" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideSolution;
