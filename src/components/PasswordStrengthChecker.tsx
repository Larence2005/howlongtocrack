
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { evaluatePasswordStrength, PasswordStrength } from '@/utils/passwordUtils';
import StrengthMeter from './StrengthMeter';
import TimeEstimate from './TimeEstimate';
import RequirementsList from './RequirementsList';
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
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className={cn(
            "h-5 w-5",
            strength.score === 0 ? "text-strength-veryWeak" : 
            strength.score === 1 ? "text-strength-weak" : 
            strength.score === 2 ? "text-strength-medium" : 
            strength.score === 3 ? "text-strength-strong" : 
            "text-strength-veryStrong animate-pulse-glow"
          )} />
          <CardTitle className="text-xl">Password Strength Checker</CardTitle>
        </div>
        <CardDescription>
          Enter a password to check its strength
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pr-10"
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
      </CardContent>
    </Card>
  );
};

export default PasswordStrengthChecker;
