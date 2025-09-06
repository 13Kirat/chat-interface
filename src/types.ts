export interface Styles {
  lightMode: boolean;
  profilePicUrl: string;
  chatIconUrl: string;
  userBubbleColor: string;
  botBubbleColor: string;
  userTextColor: string;
  botTextColor: string;
  headerBgColor: string;
  headerTitle: string;
  headerTextColor: string;
  headerSubtitle: string;
  headerSubtitleColor: string;
  chatAreaBgColor: string;
  bubbleRadius: number;
  widgetWidth: number;
  cornerRadius: number;
  syncUserBubbleColor: boolean;
  showPoweredBy: boolean;
  composerPlaceholder: string;
  composerInputBgColor: string;
  composerInputTextColor: string;
  composerInputBorderColor: string;
  footerText: string;
  footerTextColor: string;
  footerBgColor: string;
  fontSize?: number;
  fontFamily?: string;
}

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}