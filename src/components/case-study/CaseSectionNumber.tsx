
import React from 'react';

interface CaseSectionNumberProps {
  number: string;
}

const CaseSectionNumber: React.FC<CaseSectionNumberProps> = ({ number }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
      <span className="font-bricolage text-sm font-semibold">{number}</span>
    </div>
  );
};

export default CaseSectionNumber;
