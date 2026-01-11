import { useEffect, useRef, useState, useCallback } from "react";
import PitchNav from "@/components/pitch/PitchNav";
import ProgressRail from "@/components/pitch/ProgressRail";
import SlideTitle from "@/components/pitch/slides/SlideTitle";
import SlideProblem from "@/components/pitch/slides/SlideProblem";
import SlideSolution from "@/components/pitch/slides/SlideSolution";
import SlideMarket from "@/components/pitch/slides/SlideMarket";
import SlideProduct from "@/components/pitch/slides/SlideProduct";
import SlideTraction from "@/components/pitch/slides/SlideTraction";
import SlideGTM from "@/components/pitch/slides/SlideGTM";
import SlideCompetition from "@/components/pitch/slides/SlideCompetition";
import SlideModel from "@/components/pitch/slides/SlideModel";
import SlideTeam from "@/components/pitch/slides/SlideTeam";
import SlideFinancials from "@/components/pitch/slides/SlideFinancials";
import SlideAsk from "@/components/pitch/slides/SlideAsk";
import SlideClosing from "@/components/pitch/slides/SlideClosing";

const SECTIONS = [
  { id: "title", label: "Niice" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "market", label: "Market" },
  { id: "product", label: "Product" },
  { id: "traction", label: "Traction" },
  { id: "gtm", label: "GTM" },
  { id: "competition", label: "Competition" },
  { id: "model", label: "Model" },
  { id: "team", label: "Team" },
  { id: "financials", label: "Financials" },
  { id: "ask", label: "Ask" },
  { id: "closing", label: "Contact" },
];

const PitchDeck = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0]));

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    
    const sections = container.querySelectorAll(".scroll-snap-section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(index);
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        root: container,
        threshold: [0.5],
      }
    );

    const sections = container.querySelectorAll(".scroll-snap-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-gradient-dark min-h-screen">
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="bg-blob bg-blob-purple w-[800px] h-[800px] -top-40 -left-40 animate-glow-pulse"
          style={{ position: "absolute" }}
        />
        <div 
          className="bg-blob bg-blob-purple w-[600px] h-[600px] top-1/2 right-0 animate-glow-pulse"
          style={{ position: "absolute", animationDelay: "1.5s" }}
        />
        <div 
          className="bg-blob bg-blob-green w-[400px] h-[400px] bottom-20 left-1/4 animate-glow-pulse"
          style={{ position: "absolute", animationDelay: "3s", opacity: 0.3 }}
        />
      </div>

      {/* Navigation */}
      <PitchNav 
        sections={SECTIONS} 
        currentSection={currentSection} 
        onNavigate={scrollToSection}
      />

      {/* Progress Rail */}
      <ProgressRail 
        total={SECTIONS.length} 
        current={currentSection} 
        onDotClick={scrollToSection}
      />

      {/* Main Content */}
      <div 
        ref={containerRef}
        className="scroll-snap-container"
      >
        <SlideTitle isVisible={visibleSections.has(0)} />
        <SlideProblem isVisible={visibleSections.has(1)} />
        <SlideSolution isVisible={visibleSections.has(2)} />
        <SlideMarket isVisible={visibleSections.has(3)} />
        <SlideProduct isVisible={visibleSections.has(4)} />
        <SlideTraction isVisible={visibleSections.has(5)} />
        <SlideGTM isVisible={visibleSections.has(6)} />
        <SlideCompetition isVisible={visibleSections.has(7)} />
        <SlideModel isVisible={visibleSections.has(8)} />
        <SlideTeam isVisible={visibleSections.has(9)} />
        <SlideFinancials isVisible={visibleSections.has(10)} />
        <SlideAsk isVisible={visibleSections.has(11)} />
        <SlideClosing isVisible={visibleSections.has(12)} />
      </div>
    </div>
  );
};

export default PitchDeck;
