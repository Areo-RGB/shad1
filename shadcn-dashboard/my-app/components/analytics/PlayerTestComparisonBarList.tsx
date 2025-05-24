import { FC } from "react";
import { PerformanceData } from "@/app/analytics/data";

interface PlayerTestComparisonBarListProps {
  testName: string;
  playerTestData: PerformanceData[];
  isLowerBetter?: boolean;
  rangeMin: number;
  rangeSpan: number;
}

export const PlayerTestComparisonBarList: FC<PlayerTestComparisonBarListProps> = ({
  testName,
  playerTestData,
  isLowerBetter = true,
  rangeMin,
  rangeSpan
}) => {
  // Sort players by performance
  const sortedPlayers = [...playerTestData]
    .filter(item => item.isPlayer)
    .sort((a, b) => {
      if (isLowerBetter) {
        return a.playerResult - b.playerResult; // Lower is better
      } else {
        return b.playerResult - a.playerResult; // Higher is better
      }
    });

  // Calculate performance percentage
  const calculatePerformanceWidth = (result: number) => {
    if (isLowerBetter) {
      // For tests where lower values are better (sprint times, etc.)
      return Math.max(0, 100 - ((result - rangeMin) / rangeSpan * 100));
    } else {
      // For tests where higher values are better (Balljonglieren)
      return Math.min(100, ((result - rangeMin) / rangeSpan * 100));
    }
  };

  return (
    <div className="space-y-4">
      {sortedPlayers.map((player, index) => (
        <div key={`${player.playerName}-${index}`} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{player.playerName}</span>
            <span className="font-medium">
              {player.playerResult.toFixed(2)} {player.testUnits}
            </span>
          </div>
          <div className="w-full bg-primary/10 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full" 
              style={{ width: `${calculatePerformanceWidth(player.playerResult)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}; 