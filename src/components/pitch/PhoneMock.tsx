import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

const PhoneMock = ({ children, className, label }: PhoneMockProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="relative">
        {/* Phone Frame */}
        <div className="relative w-[200px] h-[420px] md:w-[240px] md:h-[500px] rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-2 shadow-elevated">
          {/* Inner Screen */}
          <div className="w-full h-full rounded-[2rem] bg-niice-dark overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
            
            {/* Content */}
            <div className="w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      )}
    </div>
  );
};

export default PhoneMock;
