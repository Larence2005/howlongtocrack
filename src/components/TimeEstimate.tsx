
import React from 'react';
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface TimeEstimateProps {
  time: string;
  className?: string;
}

const TimeEstimate: React.FC<TimeEstimateProps> = ({ time, className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Clock className="w-4 h-4 text-muted-foreground" />
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">Time to crack:</span>
        <span className="font-medium">{time}</span>
      </div>
    </div>
  );
};

export default TimeEstimate;
