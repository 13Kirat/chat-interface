// Function to convert hex color to RGB
function hexToRgb(hex: string): [number, number, number] | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(_m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

// Function to convert RGB to luminance
function getLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map(function(v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Function to calculate contrast ratio
export function getContrastRatio(rgb1: [number, number, number], rgb2: [number, number, number]): number {
  const lum1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
  const lum2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// Function to parse any CSS color string to RGB
export function parseColorToRgb(color: string): [number, number, number] | null {
  if (color.startsWith('#')) {
    return hexToRgb(color);
  } else if (color.startsWith('rgb')) {
    const rgba = color.match(/\d+/g);
    if (rgba && rgba.length >= 3) {
      return [parseInt(rgba[0]), parseInt(rgba[1]), parseInt(rgba[2])];
    }
  }
  return null;
}