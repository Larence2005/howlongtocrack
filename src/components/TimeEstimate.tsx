
import React from 'react';
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface TimeEstimateProps {
  time: string;
  className?: string;
}

const TimeEstimate: React.FC<TimeEstimateProps> = ({ time, className }) => {
  return (
    <div className={cn("flex items-center gap-3 p-3 rounded-md bg-secondary/30 border border-accent/10", className)}>
      <Clock className="w-5 h-5 text-accent shrink-0" />
      <div className="flex flex-col w-full overflow-hidden">
        <span className="text-xs text-foreground/80">Time to crack:</span>
        <span className="font-medium text-foreground truncate break-all">{time}</span>
      </div>
    </div>
  );
};

export default TimeEstimate;
