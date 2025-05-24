import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface PlayerComparisonEntry {
  id: string; // For key prop
  rank: number;
  playerName: string;
  resultDisplay: string; // Formatted result, e.g., "2.00s"
  rawValue: number; // The raw value for bar calculation
}

interface PlayerTestComparisonBarListProps {
  cardTitle: string;
  cardDescription: string;
  entries: PlayerComparisonEntry[];
  isLowerBetter?: boolean; // Default to true if not provided
  rangeMin: number; // Min value of the expected range for scaling
  rangeMax: number; // Max value of the expected range for scaling
}

const PlayerTestComparisonBarList: React.FC<PlayerTestComparisonBarListProps> = ({
  cardTitle,
  cardDescription,
  entries,
  isLowerBetter = true, // Default to true
  rangeMin,
  rangeMax,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-display">{cardTitle}</CardTitle>
        <CardDescription className="text-body">{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-body">
          {entries.map((entry) => {
            const rangeSpan = rangeMax - rangeMin;
            let barWidthPercentage = 0;

            if (entry.rawValue !== null && typeof entry.rawValue !== 'undefined') {
              const valueForCalc = entry.rawValue;
              if (rangeSpan > 0) {
                if (isLowerBetter) {
                  const percentage = ((valueForCalc - rangeMin) / rangeSpan) * 100;
                  barWidthPercentage = Math.max(0, Math.min(100, 100 - percentage));
                } else {
                  const percentage = ((valueForCalc - rangeMin) / rangeSpan) * 100;
                  barWidthPercentage = Math.max(0, Math.min(100, percentage));
                }
              } else if (rangeSpan === 0) { // rangeMin === rangeMax
                if (isLowerBetter) {
                  if (valueForCalc <= rangeMin) barWidthPercentage = 100; // Player is at or better than the target
                  else barWidthPercentage = 0; // Player is worse than the target
                } else { // Higher is better
                  if (valueForCalc >= rangeMin) barWidthPercentage = 100; // Player is at or better than the target
                  else barWidthPercentage = 0; // Player is worse than the target
                }
              }
            }
            
            const displayName = `${entry.rank}. ${entry.playerName}`;

            return (
              <div key={entry.id} className="flex flex-col space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-display">{displayName}</span>
                  <span className="text-sm font-mono">{entry.resultDisplay}</span>
                </div>
                <div className="w-full bg-primary/10 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${barWidthPercentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerTestComparisonBarList;
