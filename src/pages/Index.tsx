
import React from 'react';
import PasswordStrengthChecker from '@/components/PasswordStrengthChecker';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-10">
      <div className="w-full max-w-xl mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 via-accent to-blue-400 text-transparent bg-clip-text">
          How Long To Crack
        </h1>
        <br></>
        <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto px-4">
          Type your password below to see how secure it is
        </p>
        <>br</>
        <PasswordStrengthChecker />
      </div>
      
      <footer className="w-full max-w-xl mt-6 text-center">
        <a 
          href="https://johnlarencelusaya.lovable.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium transition-all hover:scale-105 mb-6"
        >
          Created by <span className="text-highlight-green hover:underline">John Larence D. Lusaya</span>
        </a>
      </footer>
    </div>
  );
};

export default Index;
