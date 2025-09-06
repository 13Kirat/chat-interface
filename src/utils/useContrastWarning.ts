import { useState, useEffect } from 'react';
import { getContrastRatio, parseColorToRgb } from './colorUtils';

export function useContrastWarning(foregroundColor: string, backgroundColor: string): string | null {
  const [warning, setWarning] = useState<string | null>(null);

  useEffect(() => {
    const fgRgb = parseColorToRgb(foregroundColor);
    const bgRgb = parseColorToRgb(backgroundColor);

    if (fgRgb && bgRgb) {
      const ratio = getContrastRatio(fgRgb, bgRgb);
      if (ratio < 4.5) {
        setWarning(`Low contrast: ${ratio.toFixed(2)}:1. Recommended: 4.5:1 or higher.`);
      } else {
        setWarning(null);
      }
    } else {
      setWarning('Invalid color format.');
    }
  }, [foregroundColor, backgroundColor]);

  return warning;
}
