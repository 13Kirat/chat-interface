import React, { useState } from 'react';
import type { Styles } from '../types';
import { useContrastWarning } from '../utils/useContrastWarning';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
  disabled?: boolean;
  styles: Styles;
  backgroundColor?: string; 
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, onChange, disabled, styles, backgroundColor }) => {
  const [isCopied, setIsCopied] = useState(false);
  const contrastWarning = useContrastWarning(color, backgroundColor || '#FFFFFF');

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div>
      <label className={`block text-sm font-medium mb-1 ${styles.lightMode ? 'text-gray-800' : 'text-gray-300'}`} style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>{label}</label>
      <div className="relative flex items-center border rounded-md">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 p-1 border-none rounded-l-md cursor-pointer"
          disabled={disabled}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-2 border-l-0 rounded-r-md `}
          style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}
          disabled={disabled}
        />
        <button
          onClick={handleCopy}
          className={`absolute right-2 top-2 px-1 py-0.5 rounded-md ${styles.lightMode ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-600 hover:bg-gray-500'}`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {backgroundColor && contrastWarning && (
        <p className="text-yellow-500 text-xs mt-1" title={contrastWarning}>
          {contrastWarning}
        </p>
      )}
    </div>
  );
};

export default ColorPicker;