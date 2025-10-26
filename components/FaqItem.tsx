
import React from 'react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-brand-blue hover:bg-gray-50 focus:outline-none transition-colors duration-300"
      >
        <span>{question}</span>
        <i className={`fas fa-plus transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}></i>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-5 pt-0 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;