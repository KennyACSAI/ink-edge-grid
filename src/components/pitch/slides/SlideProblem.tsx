import SlideWrapper from "../SlideWrapper";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { Smartphone, Users } from "lucide-react";

interface SlideProblemProps {
  isVisible: boolean;
}

const SlideProblem = ({ isVisible }: SlideProblemProps) => {
  const problems = [
    { percent: 62, text: "of 18-24s now use TikTok/Instagram for local discovery but these platforms have", highlight: "zero coordination tools" },
    { percent: 40, suffix: "-60%", text: "no-show rates on event platforms because they optimize for RSVPs, not", highlight: "attendance" },
    { percent: 14, text: "of dating app matches ever meet in person — platforms profit from", highlight: "unresolved users" },
    { percent: 25, suffix: "-40%", text: "of Gen Z report frequent", highlight: "loneliness", suffix2: "despite being the most connected generation" },
  ];

  return (
    <SlideWrapper index={1} id="problem" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-display-sm md:text-display font-bold text-white">
              Gen Z wants local connection but current tools <span className="text-niice-purple-light">fail them</span>
            </h2>

            <div className="space-y-5">
              {problems.map((problem, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl md:text-3xl font-bold text-primary">
                      <AnimatedCounter value={problem.percent} suffix="%" isVisible={isVisible} />
                      {problem.suffix && <span className="text-lg">{problem.suffix}</span>}
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {problem.text} <span className="pill-badge">{problem.highlight}</span>
                    {problem.suffix2 && ` ${problem.suffix2}`}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-lg md:text-xl font-medium text-white">
                The result: <span className="text-niice-green">Intent exists.</span> Infrastructure doesn't.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex items-center justify-center">
            <GlassCard className="w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                {/* Endless Scroll Mock */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Discovery Apps</span>
                  </div>
                  <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="h-16 rounded-lg bg-white/5 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="text-xs text-center text-muted-foreground/60 mt-2">endless scroll...</p>
                </div>

                {/* Empty Tables Mock */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">Real World</span>
                  </div>
                  <div className="relative h-48 rounded-lg bg-gradient-to-b from-white/5 to-transparent overflow-hidden">
                    {/* Empty cafe tables illustration */}
                    <div className="absolute inset-0 flex flex-wrap gap-3 p-4 opacity-30">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-dashed border-white/20" />
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground/40">Empty</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideProblem;
