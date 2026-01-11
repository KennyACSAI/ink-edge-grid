import { cn } from "@/lib/utils";

interface ProgressRailProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const ProgressRail = ({ total, current, onDotClick }: ProgressRailProps) => {
  return (
    <div className="progress-rail hidden md:flex" role="navigation" aria-label="Slide navigation">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={cn("progress-dot focus-ring", current === i && "active")}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={current === i ? "true" : undefined}
        />
      ))}
    </div>
  );
};

export default ProgressRail;
