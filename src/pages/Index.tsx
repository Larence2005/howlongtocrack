
import React from 'react';
import PasswordStrengthChecker from '@/components/PasswordStrengthChecker';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-2">How Strong Is Your Password?</h1>
        <p className="text-center text-gray-600 mb-8">
          Type your password below to see how secure it is
        </p>
        <PasswordStrengthChecker />
      </div>
      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>
          Password information is never stored or transmitted.
          <br />
          All calculations happen directly in your browser.
        </p>
      </footer>
    </div>
  );
};

export default Index;
