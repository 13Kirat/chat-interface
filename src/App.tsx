import React, { useState, useCallback } from 'react';
import ChatWindow from './components/ChatWindow';
import StyleConfigPanel from './components/StyleConfigPanel';
import type { Styles, Message } from './types';
import AppHeader from './components/AppHeader';

const App: React.FC = () => {
  const [styles, setStyles] = useState<Styles>({
    lightMode: false,
    profilePicUrl: 'https://i.pravatar.cc/40?img=3',
    chatIconUrl: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/content/send/materialicons/24px.svg',
    userBubbleColor: '#6D28D9',
    botBubbleColor: '#f1f0f0',
    userTextColor: '#ffffff',
    botTextColor: '#000000',
    headerBgColor: '#6D28D9',
    headerTitle: 'Chatbot',
    headerTextColor: '#ffffff',
    headerSubtitle: 'Online',
    headerSubtitleColor: '#ffffff',
    chatAreaBgColor: '#ffffff',
    bubbleRadius: 16,
    widgetWidth: 360,
    cornerRadius: 12,
    syncUserBubbleColor: true,
    showPoweredBy: true,
    composerPlaceholder: 'Type a message...',
    composerInputBgColor: '#ffffff',
    composerInputTextColor: '#000000',
    composerInputBorderColor: '#e0e0e0',
    footerText: 'Made With Love',
    footerTextColor: '#6b7280',
    footerBgColor: '#f3f4f6',
    fontSize: 16,
    fontFamily: 'sans-serif',
  });

  const [messages, setMessages] = useState<Message[]>([]);

  const [activeView, setActiveView] = useState<'chat' | 'style'>('chat');

  const handleStyleChange = useCallback((style: keyof Styles, value: any) => {
    setStyles(prevStyles => {
      const newStyles = { ...prevStyles };
      (newStyles as any)[style] = value;
      if (style === 'syncUserBubbleColor' && value) {
        newStyles.userBubbleColor = newStyles.headerBgColor;
      }
      if (style === 'headerBgColor' && newStyles.syncUserBubbleColor) {
        newStyles.userBubbleColor = value;
      }
      if (style === 'lightMode') {
        newStyles.chatAreaBgColor = value ? '#ffffff' : '#1a1a1a';
        newStyles.botBubbleColor = value ? '#f0f0f0' : '#333333';
        newStyles.botTextColor = value ? '#000000' : '#ffffff';
      }
      return newStyles;
    });
  }, []);

  const handleSendMessage = (text: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      { id: Date.now(), text, sender: 'user' },
      { id: Date.now() + 1, text: `Echo: ${text}`, sender: 'bot' },
    ]);
  };

  return (
    <div className={`min-h-screen font-sans ${styles.lightMode ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
      <AppHeader activeView={activeView} setActiveView={setActiveView} styles={styles} />
      <main className="container mx-auto p-4">
        {activeView === 'chat' ? (
          <div className="flex justify-center items-start">
            <ChatWindow
              styles={styles}
              messages={messages}
              onSendMessage={handleSendMessage}
            />
          </div>
        ) : (
          <StyleConfigPanel
            styles={styles}
            onStyleChange={handleStyleChange}
          />
        )}
      </main>
    </div>
  );
};

export default App;