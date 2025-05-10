
// Calculate password entropy and estimate time to crack
export interface PasswordStrength {
  score: number; // 0-4 (very weak to very strong)
  label: 'Very Weak' | 'Weak' | 'Medium' | 'Strong' | 'Very Strong';
  color: string;
  timeToCrack: string;
  meetsRequirements: {
    minLength: boolean;
    hasLowercase: boolean;
    hasUppercase: boolean;
    hasNumber: boolean;
    hasSpecial: boolean;
  };
}

export const evaluatePasswordStrength = (password: string): PasswordStrength => {
  if (!password) {
    return {
      score: 0,
      label: 'Very Weak',
      color: 'strength-veryWeak',
      timeToCrack: 'Instantly',
      meetsRequirements: {
        minLength: false,
        hasLowercase: false,
        hasUppercase: false,
        hasNumber: false,
        hasSpecial: false
      }
    };
  }

  // Check requirements
  const minLength = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  // Calculate entropy
  let charsetSize = 0;
  if (hasLowercase) charsetSize += 26;
  if (hasUppercase) charsetSize += 26;
  if (hasNumber) charsetSize += 10;
  if (hasSpecial) charsetSize += 33;
  
  const entropy = Math.log2(Math.pow(charsetSize, password.length));
  
  // Calculate score based on entropy and requirements
  let score = 0;
  if (entropy > 80) score = 4;
  else if (entropy > 60) score = 3;
  else if (entropy > 40) score = 2;
  else if (entropy > 20) score = 1;
  
  // Adjust score based on requirements
  const requirementsMet = [minLength, hasLowercase, hasUppercase, hasNumber, hasSpecial].filter(Boolean).length;
  score = Math.min(4, Math.max(0, Math.min(score, requirementsMet - 1)));
  
  // Calculate time to crack (approximate)
  const guessesPerSecond = 1e9; // 1 billion guesses per second (modern hardware)
  const possibleCombinations = Math.pow(charsetSize, password.length);
  const secondsToCrack = possibleCombinations / guessesPerSecond / 2; // Divide by 2 for average case
  
  let timeToCrack = 'Instantly';
  if (secondsToCrack > 60 * 60 * 24 * 365 * 1000) {
    const years = Math.floor(secondsToCrack / (60 * 60 * 24 * 365));
    timeToCrack = `${years.toLocaleString()} years`;
  } else if (secondsToCrack > 60 * 60 * 24 * 365) {
    const years = Math.floor(secondsToCrack / (60 * 60 * 24 * 365));
    timeToCrack = `${years} ${years === 1 ? 'year' : 'years'}`;
  } else if (secondsToCrack > 60 * 60 * 24 * 30) {
    const months = Math.floor(secondsToCrack / (60 * 60 * 24 * 30));
    timeToCrack = `${months} ${months === 1 ? 'month' : 'months'}`;
  } else if (secondsToCrack > 60 * 60 * 24) {
    const days = Math.floor(secondsToCrack / (60 * 60 * 24));
    timeToCrack = `${days} ${days === 1 ? 'day' : 'days'}`;
  } else if (secondsToCrack > 60 * 60) {
    const hours = Math.floor(secondsToCrack / (60 * 60));
    timeToCrack = `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  } else if (secondsToCrack > 60) {
    const minutes = Math.floor(secondsToCrack / 60);
    timeToCrack = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
  } else if (secondsToCrack > 1) {
    timeToCrack = `${Math.floor(secondsToCrack)} seconds`;
  }
  
  const labels: ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'] = [
    'Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'
  ];
  
  const colors = [
    'strength-veryWeak', 
    'strength-weak', 
    'strength-medium', 
    'strength-strong', 
    'strength-veryStrong'
  ];
  
  return {
    score,
    label: labels[score],
    color: colors[score],
    timeToCrack,
    meetsRequirements: {
      minLength,
      hasLowercase,
      hasUppercase,
      hasNumber,
      hasSpecial
    }
  };
};
