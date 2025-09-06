import React from 'react';
import type { Styles } from '../types';

interface HeaderProps {
  styles: Styles;
}

const Header: React.FC<HeaderProps> = ({ styles }) => {
  return (
    <div
      className={`p-4 flex items-center z-10 ${styles.lightMode ? 'shadow-md' : 'shadow-none'}`}
      style={{ backgroundColor: styles.headerBgColor }}
    >
      <img
        src={styles.profilePicUrl}
        alt="Agent"
        className={`w-10 h-10 rounded-full mr-4 border-2 ${styles.lightMode ? 'border-white' : 'border-gray-700'}`}
      />
      <div>
        <h2 className="font-bold text-lg" style={{ color: styles.headerTextColor, fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>{styles.headerTitle}</h2>
        <p className="text-sm opacity-80" style={{ color: styles.headerSubtitleColor, fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>{styles.headerSubtitle}</p>
      </div>
    </div>
  );
};

export default Header;
