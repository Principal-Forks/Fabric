// Generate vibrant rainbow gradient color based on position
export function generateGradientColor(y: number, height: number): string {
  // Full spectrum rainbow: 0 (red) -> 60 (yellow) -> 120 (green) -> 180 (cyan) -> 240 (blue) -> 300 (magenta)
  const hue = (y / height) * 360;
  return `hsla(${hue}, 85%, 65%, 0.9)`;
}

// Generate edge color as a blend between two particle colors
export function generateEdgeColor(color1: string, color2: string, alpha: number): string {
  // Extract HSL values from particle colors
  const hue1 = parseHue(color1);
  const hue2 = parseHue(color2);

  // Average the hues (handling wraparound)
  let avgHue = (hue1 + hue2) / 2;
  if (Math.abs(hue1 - hue2) > 180) {
    avgHue = (avgHue + 180) % 360;
  }

  // Return vibrant edge color with dynamic alpha
  return `hsla(${avgHue}, 80%, 60%, ${alpha * 0.4})`;
}

// Helper function to parse hue from HSLA string
function parseHue(hslaString: string): number {
  const match = hslaString.match(/hsla\((\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 0;
}
