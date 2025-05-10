
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { evaluatePasswordStrength, PasswordStrength } from '@/utils/passwordUtils';
import StrengthMeter from './StrengthMeter';
import TimeEstimate from './TimeEstimate';
import RequirementsList from './RequirementsList';
import SecurityTips from './SecurityTips';
import { Eye, EyeOff, Shield } from "lucide-react";
import { cn } from '@/lib/utils';

const PasswordStrengthChecker: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState<PasswordStrength>(evaluatePasswordStrength(''));
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setStrength(evaluatePasswordStrength(password));
  }, [password]);

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg cyber-card backdrop-blur-md">
      <div className="relative z-10">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-2">
            <Shield 
              className={cn(
                "h-5 w-5 transition-all",
                strength.score === 0 ? "text-strength-veryWeak" : 
                strength.score === 1 ? "text-strength-weak" : 
                strength.score === 2 ? "text-strength-medium" : 
                strength.score === 3 ? "text-strength-strong" : 
                "text-strength-veryStrong animate-pulse-glow"
              )} 
            />
            <CardTitle className="text-xl">Password Strength Checker</CardTitle>
          </div>
          <CardDescription className="text-sm text-foreground/80 font-medium">
            Enter a password to check its strength
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10 backdrop-blur-sm bg-secondary/20 border-accent/20 focus-visible:ring-accent"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          
          <StrengthMeter strength={strength} />
          
          <TimeEstimate time={strength.timeToCrack} />
          
          <RequirementsList requirements={strength.meetsRequirements} />

          <SecurityTips />

          <div className="text-center text-xs text-foreground/70">
            <p>
              Password information is never stored or transmitted.
              <br />
              All calculations happen directly in your browser.
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PasswordStrengthChecker;
