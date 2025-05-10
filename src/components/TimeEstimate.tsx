
import React from 'react';
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

interface TimeEstimateProps {
  time: string;
  className?: string;
}

const TimeEstimate: React.FC<TimeEstimateProps> = ({ time, className }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "flex items-center gap-3 p-3 rounded-md bg-secondary/30 border border-accent/10",
      isMobile ? "flex-col items-start" : "",
      className
    )}>
      <div className={cn("flex items-center gap-2", isMobile ? "w-full" : "")}>
        <Clock className="w-5 h-5 text-accent shrink-0" />
        <span className="text-xs text-foreground/80">Time to crack:</span>
      </div>
      <div className={cn("w-full overflow-hidden", isMobile ? "pl-0" : "pl-8")}>
        <span className="font-medium text-foreground break-words">{time}</span>
      </div>
    </div>
  );
};

export default TimeEstimate;
