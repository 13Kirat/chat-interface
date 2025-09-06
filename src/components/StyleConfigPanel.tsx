import React from 'react';
import type { Styles } from '../types';
import ColorPicker from './ColorPicker';
import Slider from './Slider';
import Toggle from './Toggle';
import Accordion from './Accordion';

interface StyleConfigPanelProps {
  styles: Styles;
  onStyleChange: (style: keyof Styles, value: Styles[keyof Styles]) => void;
}

const StyleConfigPanel: React.FC<StyleConfigPanelProps> = ({ styles, onStyleChange }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg w-full max-w-full mx-auto lg:max-w-3xl ${styles.lightMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      <h2 className={`text-2xl font-bold mb-6 ${styles.lightMode ? 'text-gray-800' : 'text-white'}`}>Style Configuration</h2>
      <Accordion title="Appearance" styles={styles}>
        <Toggle
          label="Light Mode"
          checked={styles.lightMode}
          onChange={(e) => onStyleChange('lightMode', e.target.checked)}
          styles={styles}
        />
      </Accordion>

      <Accordion title="Branding" styles={styles}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Profile Picture URL</label>
            <input
              type="text"
              value={styles.profilePicUrl}
              onChange={(e) => onStyleChange('profilePicUrl', e.target.value)}
              className={`w-full p-2 border rounded ${styles.lightMode ? "bg-gray-200 focus:ring-black" : "bg-gray-700 focus:ring-white"} focus:ring-2`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Chat Icon URL</label>
            <input
              type="text"
              value={styles.chatIconUrl}
              onChange={(e) => onStyleChange('chatIconUrl', e.target.value)}
              className={`w-full p-2 border rounded ${styles.lightMode ? "bg-gray-200 focus:ring-black" : "bg-gray-700 focus:ring-white"} focus:ring-2`}
            />
          </div>
        </div>
      </Accordion>

      <Accordion title="Header" styles={styles}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input type="text" value={styles.headerTitle} onChange={(e) => onStyleChange('headerTitle', e.target.value)} className={`w-full p-2 border rounded ${styles.lightMode ? "bg-gray-200 focus:ring-black" : "bg-gray-700 focus:ring-white"} focus:ring-2`} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subtitle</label>
            <input type="text" value={styles.headerSubtitle} onChange={(e) => onStyleChange('headerSubtitle', e.target.value)} className={`w-full p-2 border rounded ${styles.lightMode ? "bg-gray-200 focus:ring-black" : "bg-gray-700 focus:ring-white"} focus:ring-2`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColorPicker label="Background" color={styles.headerBgColor} onChange={(c) => onStyleChange('headerBgColor', c)} styles={styles} />
            <ColorPicker label="Text Color" color={styles.headerTextColor} onChange={(c) => onStyleChange('headerTextColor', c)} styles={styles} backgroundColor={styles.headerBgColor} />
            <ColorPicker label="Subtitle Color" color={styles.headerSubtitleColor} onChange={(c) => onStyleChange('headerSubtitleColor', c)} styles={styles} backgroundColor={styles.headerBgColor} />
          </div>
        </div>
      </Accordion>

      <Accordion title="Chat Area" styles={styles}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorPicker label="Background" color={styles.chatAreaBgColor} onChange={(c) => onStyleChange('chatAreaBgColor', c)} styles={styles} />
        </div>
      </Accordion>

      <Accordion title="Message Bubbles" styles={styles}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorPicker label="User Bubble" color={styles.userBubbleColor} onChange={(c) => onStyleChange('userBubbleColor', c)} disabled={styles.syncUserBubbleColor} styles={styles} />
          <ColorPicker label="Bot Bubble" color={styles.botBubbleColor} onChange={(c) => onStyleChange('botBubbleColor', c)} styles={styles} />
          <ColorPicker label="User Text" color={styles.userTextColor} onChange={(c) => onStyleChange('userTextColor', c)} styles={styles} backgroundColor={styles.userBubbleColor} />
          <ColorPicker label="Bot Text" color={styles.botTextColor} onChange={(c) => onStyleChange('botTextColor', c)} styles={styles} backgroundColor={styles.botBubbleColor} />
        </div>
      </Accordion>

      <Accordion title="Composer" styles={styles}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Placeholder</label>
            <input type="text" value={styles.composerPlaceholder} onChange={(e) => onStyleChange('composerPlaceholder', e.target.value)} className={`w-full p-2 border rounded ${styles.lightMode ? "bg-gray-200 focus:ring-black" : "bg-gray-700 focus:ring-white"} focus:ring-2`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColorPicker label="Input BG" color={styles.composerInputBgColor} onChange={(c) => onStyleChange('composerInputBgColor', c)} styles={styles} />
            <ColorPicker label="Input Text" color={styles.composerInputTextColor} onChange={(c) => onStyleChange('composerInputTextColor', c)} styles={styles} backgroundColor={styles.composerInputBgColor} />
            <ColorPicker label="Input Border" color={styles.composerInputBorderColor} onChange={(c) => onStyleChange('composerInputBorderColor', c)} styles={styles} />
          </div>
        </div>
      </Accordion>

      <Accordion title="Footer" styles={styles}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Text</label>
            <input type="text" value={styles.footerText} onChange={(e) => onStyleChange('footerText', e.target.value)} className={`w-full p-2 border rounded ${styles.lightMode ? "bg-gray-200 focus:ring-black" : "bg-gray-700 focus:ring-white"} focus:ring-2`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColorPicker label="Background" color={styles.footerBgColor} onChange={(c) => onStyleChange('footerBgColor', c)} styles={styles} />
            <ColorPicker label="Text Color" color={styles.footerTextColor} onChange={(c) => onStyleChange('footerTextColor', c)} styles={styles} backgroundColor={styles.footerBgColor} />
          </div>
        </div>
      </Accordion>

      <Accordion title="Layout" styles={styles}>
        <div className="space-y-4">
          <Slider
            label="Widget Width (px)"
            min={280}
            max={420}
            value={styles.widgetWidth}
            onChange={(e) => onStyleChange('widgetWidth', parseInt(e.target.value))}
            styles={styles}
          />
          <Slider
            label="Widget Corner Radius (px)"
            min={0}
            max={24}
            value={styles.cornerRadius}
            onChange={(e) => onStyleChange('cornerRadius', parseInt(e.target.value))}
            styles={styles}
          />
          <Slider
            label="Bubble Radius (px)"
            min={0}
            max={24}
            value={styles.bubbleRadius}
            onChange={(e) => onStyleChange('bubbleRadius', parseInt(e.target.value))}
            styles={styles}
          />
        </div>
      </Accordion>

      <Accordion title="Typography" styles={styles}>
        <div className="space-y-4">
          <Slider
            label="Font Size (px)"
            min={12}
            max={18}
            value={styles.fontSize || 16} 
            onChange={(e) => onStyleChange('fontSize', parseInt(e.target.value))}
            styles={styles}
          />
          <div>
            <label className={`block text-sm font-medium mb-1 ${styles.lightMode ? 'text-gray-800' : 'text-gray-300'}`}>Font Family</label>
            <select
              value={styles.fontFamily || 'sans-serif'}
              onChange={(e) => onStyleChange('fontFamily', e.target.value)}
              className={`w-full p-2 border rounded ${styles.lightMode ? "bg-gray-200 focus:ring-black" : "bg-gray-700 focus:ring-white"} focus:ring-2`}
            >
              <option value="sans-serif">Sans-serif (Default)</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
            </select>
          </div>
        </div>
      </Accordion>

      <Accordion title="Behavior" styles={styles}>
        <div className="space-y-4">
          <Toggle
            label="Sync User Bubble with Header"
            checked={styles.syncUserBubbleColor}
            onChange={(e) => onStyleChange('syncUserBubbleColor', e.target.checked)}
            styles={styles}
          />
          <Toggle
            label="Show 'Powered By' Line"
            checked={styles.showPoweredBy}
            onChange={(e) => onStyleChange('showPoweredBy', e.target.checked)}
            styles={styles}
          />
        </div>
      </Accordion>
    </div>
  );
};

export default StyleConfigPanel;