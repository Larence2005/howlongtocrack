
import React from 'react';
import { cn } from "@/lib/utils";
import { Shield, Info } from "lucide-react";

interface SecurityTipsProps {
  className?: string;
}

const SecurityTips: React.FC<SecurityTipsProps> = ({ className }) => {
  const tips = [
    "Never store passwords in your browser - autofill can be exploited by malicious websites",
    "Use a dedicated password manager with strong encryption",
    "Create unique passwords for each service - if one is compromised, others remain safe",
    "Enable two-factor authentication (2FA) for your accounts whenever possible",
    "Regularly update your passwords, especially for critical accounts"
  ];

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-2 mb-1">
        <Shield color="red" className="h-5 w-5 text-accent" />
        <h3 className="text-sm font-bold text-foreground">Security Tips</h3>
      </div>
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div key={index} className="security-tip">
            <div className="flex gap-2">
              <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-foreground/90">{tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityTips;
