
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
    <div className={cn("space-y-1", className)}>
      <h3 className="text-sm font-medium mb-2">Password should have:</h3>
      <ul className="space-y-1">
        {requirementItems.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.met ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-gray-300" />
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
