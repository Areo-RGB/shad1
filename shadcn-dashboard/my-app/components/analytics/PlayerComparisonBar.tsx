import { FC } from "react";

interface PlayerComparisonBarProps {
  testName: string;
  playerResult: string | null;
  dfb97Value: number;
  dfb3Value: number;
  referenceRangeMin: number;
  referenceRangeMax: number;
  isLowerBetter?: boolean;
}

export const PlayerComparisonBar: FC<PlayerComparisonBarProps> = ({
  testName,
  playerResult,
  dfb97Value,
  dfb3Value,
  referenceRangeMin,
  referenceRangeMax,
  isLowerBetter = true
}) => {
  // Calculate performance percentage (if player result exists)
  const calculatePerformanceWidth = () => {
    if (!playerResult) return 0;
    
    const numericResult = parseFloat(playerResult);
    
    if (isLowerBetter) {
      // For tests where lower values are better (sprint times, etc.)
      return Math.max(0, 100 - ((numericResult - referenceRangeMin) / (referenceRangeMax - referenceRangeMin) * 100));
    } else {
      // For tests where higher values are better (Balljonglieren)
      return Math.min(100, ((numericResult - referenceRangeMin) / (referenceRangeMax - referenceRangeMin) * 100));
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span>{testName}:</span>
        <span>
          {playerResult || "N/A"} {isLowerBetter ? "s" : "Punkte"}
        </span>
      </div>
      <div className="w-full flex items-center gap-2">
        <span className="text-xs text-muted-foreground">DFB-97</span>
        <div className="flex-1 bg-primary/10 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full" 
            style={{ width: `${calculatePerformanceWidth()}%` }}
          />
        </div>
      </div>
    </div>
  );
}; 