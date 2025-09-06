import React from 'react';
import type { Styles } from '../types';

interface FooterProps {
  styles: Styles;
}

const Footer: React.FC<FooterProps> = ({ styles }) => {
  return (
    <div
      className="text-center text-xs py-2"
      style={{
        backgroundColor: styles.footerBgColor,
        color: styles.footerTextColor,
        fontSize: `${styles.fontSize}px`,
        fontFamily: styles.fontFamily,
      }}
    >
      {styles.footerText}
    </div>
  );
};

export default Footer;