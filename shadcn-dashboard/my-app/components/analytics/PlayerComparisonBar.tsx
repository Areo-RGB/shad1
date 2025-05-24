import React from 'react';

interface PlayerComparisonBarProps {
  testName: string;
  playerResultRaw: number | null;
  playerResultDisplay: string;
  rangeMin: number;
  rangeMax: number;
  isLowerBetter?: boolean; // Optional, will default to true in component logic
}

const PlayerComparisonBar: React.FC<PlayerComparisonBarProps> = ({
  testName,
  playerResultRaw,
  playerResultDisplay,
  rangeMin,
  rangeMax,
  isLowerBetter = true, // Default to true
}) => {
  let barWidthPercentage = 0;

  if (playerResultRaw !== null) {
    const range = rangeMax - rangeMin;
    if (range === 0) {
      // If range is 0, bar is full if player result matches min/max, otherwise empty.
      // This specific logic might need adjustment based on exact desired behavior for zero range.
      barWidthPercentage = playerResultRaw === rangeMin ? 100 : 0;
    } else {
      const percentage = ((playerResultRaw - rangeMin) / range) * 100;
      if (isLowerBetter) {
        barWidthPercentage = Math.max(0, Math.min(100, 100 - percentage));
      } else {
        barWidthPercentage = Math.max(0, Math.min(100, percentage));
      }
    }
  }

  const calculatedWidthString = `${barWidthPercentage}%`;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span>{testName}:</span>
        <span>{playerResultDisplay}</span>
      </div>
      <div className="w-full flex items-center gap-2">
        <span className="text-xs text-muted-foreground">DFB-97</span> {/* Or adapt if range isn't always DFB 97-3 */}
        <div className="flex-1 bg-primary/10 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: calculatedWidthString }}
          ></div>
        </div>
        <span className="text-xs text-muted-foreground">DFB-3</span> {/* Or adapt */}
      </div>
    </div>
  );
};

export default PlayerComparisonBar;
