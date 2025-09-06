import React from 'react';
import type { Styles } from '../types';

interface SliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  styles: Styles;
}

const Slider: React.FC<SliderProps> = ({ label, min, max, value, onChange, styles }) => {
  return (
    <div>
      <label className={`block text-sm font-medium mb-2 ${styles.lightMode ? 'text-gray-800' : 'text-gray-300'}`} style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>{label}</label>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600 ${styles.lightMode ? 'bg-gray-200' : 'bg-gray-700'}`}
        />
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className={`w-20 p-2 border rounded-md ${styles.lightMode ? 'bg-gray-100' : 'bg-gray-700'}`}
          style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}
        />
      </div>
    </div>
  );
};

export default Slider;
