import React from 'react';
import type { Styles } from '../types';

interface AppHeaderProps {
  activeView: 'chat' | 'style';
  setActiveView: (view: 'chat' | 'style') => void;
  styles: Styles;
}

const AppHeader: React.FC<AppHeaderProps> = ({ activeView, setActiveView, styles }) => {
  return (
    <header className={`shadow-sm mb-8 ${styles.lightMode ? 'bg-white' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className={`text-xl font-semibold ${styles.lightMode ? 'text-gray-800' : 'text-white'}`} style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>Chat Interface</h1>
        <nav className="flex space-x-2">
          <button
            onClick={() => setActiveView('chat')}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-colors duration-300 ${activeView === 'chat'
              ? 'bg-green-600 text-white'
              : `${styles.lightMode ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`
              }`}
            style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>
            Chat Preview
          </button>
          <button
            onClick={() => setActiveView('style')}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-colors duration-300 ${activeView === 'style'
              ? 'bg-green-600 text-white'
              : `${styles.lightMode ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`
              }`}
            style={{ fontSize: `${styles.fontSize}px`, fontFamily: styles.fontFamily }}>
            Style Editor
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;