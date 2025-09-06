import React from 'react';
import type { Styles } from '../types';

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  styles: Styles;
}

const Toggle: React.FC<ToggleProps> = ({ label, checked, onChange, styles }) => {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className={`font-medium ${styles.lightMode ? 'text-gray-700' : 'text-gray-300'}`} style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>{label}</span>
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
        <div className={`block w-14 h-8 rounded-full transition ${checked ? 'bg-green-600' : `${styles.lightMode ? 'bg-gray-300' : 'bg-gray-600'}`}`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${checked ? 'transform translate-x-full' : ''}`}></div>
      </div>
    </label>
  );
};

export default Toggle;