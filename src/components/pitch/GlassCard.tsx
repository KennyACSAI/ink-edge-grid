import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = false }: GlassCardProps) => {
  return (
    <div className={cn(
      "glass-card p-6 md:p-8",
      hover && "hover-lift cursor-pointer",
      className
    )}>
      {children}
    </div>
  );
};

export default GlassCard;
