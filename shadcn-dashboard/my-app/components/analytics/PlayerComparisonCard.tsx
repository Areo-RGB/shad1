import React from 'react';
import { Card } from '@/components/ui/card';
import PlayerComparisonBar from './PlayerComparisonBar'; // Assuming it's in the same directory

export interface PerformanceBarData {
  id: string;
  testName: string;
  playerResultRaw: number | null;
  playerResultDisplay: string;
  rangeMin: number;
  rangeMax: number;
  isLowerBetter?: boolean;
}

interface PlayerComparisonCardProps {
  playerName: string;
  performanceBars: PerformanceBarData[];
}

const PlayerComparisonCard: React.FC<PlayerComparisonCardProps> = ({
  playerName,
  performanceBars,
}) => {
  return (
    <Card className="p-4 flex flex-col">
      <h3 className="text-base text-display mb-4">{playerName}</h3>
      <div className="space-y-4 flex-1 text-body">
        {performanceBars.map((data) => (
          <PlayerComparisonBar
            key={data.id}
            testName={data.testName}
            playerResultRaw={data.playerResultRaw}
            playerResultDisplay={data.playerResultDisplay}
            rangeMin={data.rangeMin}
            rangeMax={data.rangeMax}
            isLowerBetter={data.isLowerBetter}
          />
        ))}
      </div>
    </Card>
  );
};

export default PlayerComparisonCard;
