import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideWrapperProps {
  index: number;
  id: string;
  isVisible: boolean;
  children: ReactNode;
  className?: string;
}

const SlideWrapper = ({ index, id, isVisible, children, className }: SlideWrapperProps) => {
  return (
    <section
      id={id}
      data-index={index}
      className={cn("scroll-snap-section", className)}
    >
      <div className={cn(
        "slide-content w-full h-full",
        isVisible && "visible"
      )}>
        {children}
      </div>
    </section>
  );
};

export default SlideWrapper;
