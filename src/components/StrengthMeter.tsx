
import React from 'react';
import { cn } from "@/lib/utils";
import { PasswordStrength } from '@/utils/passwordUtils';

interface StrengthMeterProps {
  strength: PasswordStrength;
  className?: string;
}

const StrengthMeter: React.FC<StrengthMeterProps> = ({ strength, className }) => {
  const segments = [
    { active: strength.score >= 0, color: 'bg-strength-veryWeak' },
    { active: strength.score >= 1, color: 'bg-strength-weak' },
    { active: strength.score >= 2, color: 'bg-strength-medium' },
    { active: strength.score >= 3, color: 'bg-strength-strong' },
    { active: strength.score >= 4, color: 'bg-strength-veryStrong' }
  ];

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Strength:</span>
        <span 
          className={cn(
            "text-sm font-semibold",
            strength.score === 0 && "text-strength-veryWeak",
            strength.score === 1 && "text-strength-weak",
            strength.score === 2 && "text-strength-medium",
            strength.score === 3 && "text-strength-strong",
            strength.score === 4 && "text-strength-veryStrong",
          )}
        >
          {strength.label}
        </span>
      </div>
      
      <div className="flex w-full gap-1 h-2">
        {segments.map((segment, index) => (
          <div 
            key={index}
            className={cn(
              "h-full flex-1 rounded-sm transition-all duration-300",
              segment.active ? segment.color : "bg-gray-200",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default StrengthMeter;
