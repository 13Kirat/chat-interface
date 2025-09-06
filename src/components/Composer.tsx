import React, { useState } from 'react';
import type { Styles } from '../types';

interface ComposerProps {
  styles: Styles;
  onSendMessage: (text: string) => void;
}

const Composer: React.FC<ComposerProps> = ({ styles, onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="p-4 flex items-center border-t" style={{ borderColor: styles.composerInputBorderColor }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={styles.composerPlaceholder}
        className="flex-1 p-3 border rounded-full focus:ring-2 focus:ring-black transition-shadow duration-200 ease-in-out"
        style={{
          backgroundColor: styles.composerInputBgColor,
          color: styles.composerInputTextColor,
          borderColor: styles.composerInputBorderColor,
          fontSize: `${styles.fontSize}px`,
          fontFamily: styles.fontFamily,
        }}
      />
      <button
        onClick={handleSend}
        className="ml-3 p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-transform duration-200 ease-in-out transform hover:scale-110"
        style={{ backgroundColor: styles.headerBgColor }}
      >
        <img src={styles.chatIconUrl} alt="Send" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Composer;
