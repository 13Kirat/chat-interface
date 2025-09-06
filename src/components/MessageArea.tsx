import React, { useRef, useEffect } from 'react';
import type { Styles, Message } from '../types';

interface MessageAreaProps {
  styles: Styles;
  messages: Message[];
}

const MessageArea: React.FC<MessageAreaProps> = ({ styles, messages }) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <div
      className="flex-1 p-4 overflow-y-auto"
      style={{
        fontSize: `${styles.fontSize}px`,
        fontFamily: styles.fontFamily,
      }}
    >
      {messages.map(msg => (
        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4 last:mb-0 animate-fade-in`}>
          <div
            className={`max-w-xs lg:max-w-md px-4 py-2 ${styles.lightMode ? 'shadow-md' : 'shadow-none'}`}
            style={{
              backgroundColor: msg.sender === 'user' ? styles.userBubbleColor : styles.botBubbleColor,
              color: msg.sender === 'user' ? styles.userTextColor : styles.botTextColor,
              borderRadius: `${styles.bubbleRadius}px`,
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageArea;
