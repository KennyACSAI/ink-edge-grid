import SlideWrapper from "../SlideWrapper";
import { BadgeCheck } from "lucide-react";

interface SlideTitleProps {
  isVisible: boolean;
}

const SlideTitle = ({ isVisible }: SlideTitleProps) => {
  return (
    <SlideWrapper index={0} id="title" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full text-center relative">
        {/* Animated Map Glow Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-purple-glow opacity-50 animate-glow-pulse" />
          
          {/* Map Grid Lines */}
          <svg className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-10" viewBox="0 0 100 100">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="currentColor" strokeWidth="0.2" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="currentColor" strokeWidth="0.2" />
            ))}
            {/* Location dots */}
            <circle cx="30" cy="40" r="1" fill="#7636E4" className="animate-glow-pulse" />
            <circle cx="60" cy="35" r="1" fill="#82FF00" className="animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
            <circle cx="45" cy="55" r="1" fill="#7636E4" className="animate-glow-pulse" style={{ animationDelay: "1s" }} />
            <circle cx="70" cy="60" r="1" fill="#2dd4bf" className="animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          {/* Logo with Verified Badge */}
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-display-lg md:text-[6rem] font-bold text-white tracking-tight">
              Niice
            </h1>
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-niice-green/20 border border-niice-green/30">
              <BadgeCheck className="w-5 h-5 text-niice-green" />
              <span className="text-sm font-medium text-niice-green">Verified</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-niice-purple-light font-medium">
            Verified local meetups for Gen Z
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The hyper-local social layer that turns nearby intent into real-world connections.
          </p>

          {/* Footer */}
          <div className="pt-12 space-y-2">
            <p className="text-base text-white font-medium">
              Basri Kerem Alhan <span className="text-muted-foreground">|</span> CEO & Co-Founder
            </p>
            <p className="text-sm text-muted-foreground">
              Seed Round <span className="text-muted-foreground">|</span> January 2026
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideTitle;
