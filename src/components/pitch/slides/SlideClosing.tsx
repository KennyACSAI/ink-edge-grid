import SlideWrapper from "../SlideWrapper";
import { Mail, Phone, Download, MapPin } from "lucide-react";

interface SlideClosingProps {
  isVisible: boolean;
}

const SlideClosing = ({ isVisible }: SlideClosingProps) => {
  return (
    <SlideWrapper index={12} id="closing" isVisible={isVisible}>
      <div className="container mx-auto px-6 md:px-12 py-24 h-full flex items-center relative">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-niice-dark via-transparent to-niice-dark" />
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid */}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 5} x2="100" y2={i * 5} stroke="white" strokeWidth="0.1" />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 5} y1="0" x2={i * 5} y2="100" stroke="white" strokeWidth="0.1" />
            ))}
            {/* Glowing nodes */}
            <circle cx="20" cy="30" r="1.5" fill="#7636E4" className="animate-glow-pulse" />
            <circle cx="45" cy="50" r="2" fill="#82FF00" className="animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
            <circle cx="70" cy="40" r="1.5" fill="#7636E4" className="animate-glow-pulse" style={{ animationDelay: "1s" }} />
            <circle cx="30" cy="70" r="1" fill="#2dd4bf" className="animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
            <circle cx="80" cy="65" r="1.5" fill="#82FF00" className="animate-glow-pulse" style={{ animationDelay: "2s" }} />
            <circle cx="55" cy="25" r="1" fill="#7636E4" className="animate-glow-pulse" style={{ animationDelay: "2.5s" }} />
            
            {/* Connection lines */}
            <line x1="20" y1="30" x2="45" y2="50" stroke="#7636E4" strokeWidth="0.2" opacity="0.5" />
            <line x1="45" y1="50" x2="70" y2="40" stroke="#82FF00" strokeWidth="0.2" opacity="0.5" />
            <line x1="45" y1="50" x2="30" y2="70" stroke="#7636E4" strokeWidth="0.2" opacity="0.5" />
            <line x1="70" y1="40" x2="80" y2="65" stroke="#82FF00" strokeWidth="0.2" opacity="0.5" />
          </svg>
        </div>

        <div className="w-full max-w-3xl mx-auto text-center relative z-10">
          {/* Headline */}
          <h2 className="text-display-sm md:text-display font-bold text-white mb-8">
            Niice turns <span className="text-niice-purple-light">intent</span> into <span className="text-niice-green">attendance.</span>
          </h2>

          {/* Copy Block */}
          <div className="space-y-4 mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every day, millions of people in cities across Europe want to meet someone nearby.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              They open an app. They scroll. They close it.
            </p>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              Niice is the layer that turns intent into attendance.
            </p>
            <p className="text-lg md:text-xl text-niice-purple-light leading-relaxed">
              We're building the default social infrastructure for local life.
            </p>
          </div>

          {/* Contact Info */}
          <div className="glass-card p-8 inline-block mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">Thank you</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="mailto:basrikerem.alhan@niicesocial.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>basrikerem.alhan@niicesocial.com</span>
              </a>
              <a 
                href="tel:+393391225683"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+39 339 122 5683</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:basrikerem.alhan@niicesocial.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-glow-purple"
              >
                <Mail className="w-4 h-4" />
                Email us
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Download className="w-4 h-4" />
                Download deck PDF
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Rotterdam, Netherlands</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideClosing;
