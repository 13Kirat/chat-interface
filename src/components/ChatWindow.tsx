import React from 'react';
import type { Styles, Message } from '../types';
import Header from './Header';
import MessageArea from './MessageArea';
import Composer from './Composer';
import Footer from './Footer';

interface ChatWindowProps {
  styles: Styles;
  messages: Message[];
  onSendMessage: (text: string) => void;
  label?: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ styles, messages, onSendMessage }) => {
  return (
    <div
      className={`flex flex-col sticky top-5 rounded-lg h-[500px] mx-auto border ${styles.lightMode ? 'shadow-2xl border-black' : 'shadow-none border-white'}`}
      style={{
        width: `${styles.widgetWidth}px`,
        borderRadius: `${styles.cornerRadius}px`,
        overflow: 'hidden',
        backgroundColor: styles.chatAreaBgColor,
      }}
    >
      <Header styles={styles} />
      <MessageArea styles={styles} messages={messages} />
      <Composer styles={styles} onSendMessage={onSendMessage} />
      {styles.showPoweredBy && <Footer styles={styles} />}
    </div>
  );
};

export default ChatWindow;