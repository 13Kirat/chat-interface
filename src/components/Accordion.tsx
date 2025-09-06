import React, { useState } from 'react';
import type { Styles } from '../types';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  styles: Styles;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, styles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-lg mb-4 ${styles.lightMode ? 'border-gray-200' : 'border-gray-700'}`}>
      <button
        className={`w-full flex justify-between items-center p-4 font-semibold focus:outline-none ${styles.lightMode ? 'text-gray-800' : 'text-white'}`}
        style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke={styles.lightMode ? '#4B5563' : '#FFFFFF'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && <div className={`p-4 border-t ${styles.lightMode ? 'border-gray-200' : 'border-gray-700'}`}>{children}</div>}
    </div>
  );
};

export default Accordion;