
import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

interface RequirementsListProps {
  requirements: {
    minLength: boolean;
    hasLowercase: boolean;
    hasUppercase: boolean;
    hasNumber: boolean;
    hasSpecial: boolean;
  };
  className?: string;
}

const RequirementsList: React.FC<RequirementsListProps> = ({ requirements, className }) => {
  const requirementItems = [
    { label: "At least 8 characters", met: requirements.minLength },
    { label: "Lowercase letter (a-z)", met: requirements.hasLowercase },
    { label: "Uppercase letter (A-Z)", met: requirements.hasUppercase },
    { label: "Number (0-9)", met: requirements.hasNumber },
    { label: "Special character (!@#$%^&*)", met: requirements.hasSpecial },
  ];

  return (
    <div className={cn("p-4 rounded-md bg-secondary/30 border border-accent/10", className)}>
      <h3 className="text-sm font-bold mb-3">Password should have:</h3>
      <ul className="space-y-2">
        {requirementItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">
            {item.met ? (
              <CheckCircle color="#68db54" className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-gray-500" />
            )}
            <span className={cn(
              "text-sm",
              item.met ? "text-foreground" : "text-muted-foreground"
            )}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequirementsList;
