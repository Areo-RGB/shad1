import { FC } from "react";
import { Card } from "@/components/ui/card";
import { PlayerComparisonBar } from "./PlayerComparisonBar";
import { PerformanceData } from "@/app/analytics/data";

interface PlayerComparisonCardProps {
  playerName: string;
  performanceDataForPlayer: PerformanceData[];
}

export const PlayerComparisonCard: FC<PlayerComparisonCardProps> = ({
  playerName,
  performanceDataForPlayer
}) => {
  // Helper to find a specific test result
  const getTestResult = (testName: string): string | null => {
    const testData = performanceDataForPlayer.find(
      item => item.testName === testName
    );
    
    return testData ? testData.playerResult.toFixed(2) : null;
  };

  return (
    <Card className="p-4 flex flex-col">
      <h3 className="text-base text-display mb-4">{playerName}</h3>
      <div className="space-y-4 flex-1 text-body">
        {/* 10m Sprint Comparison */}
        <PlayerComparisonBar
          testName="10m Sprint"
          playerResult={getTestResult("10m Sprint")}
          dfb97Value={1.99}
          dfb3Value={2.39}
          referenceRangeMin={1.99}
          referenceRangeMax={2.39}
          isLowerBetter={true}
        />
        
        {/* 20m Sprint Comparison */}
        <PlayerComparisonBar
          testName="20m Sprint"
          playerResult={getTestResult("20m Sprint")}
          dfb97Value={3.47}
          dfb3Value={4.14}
          referenceRangeMin={3.47}
          referenceRangeMax={4.14}
          isLowerBetter={true}
        />
        
        {/* Gewandtheit Comparison */}
        <PlayerComparisonBar
          testName="Gewandtheit"
          playerResult={getTestResult("Gewandtheit")}
          dfb97Value={7.91}
          dfb3Value={9.66}
          referenceRangeMin={7.91}
          referenceRangeMax={9.66}
          isLowerBetter={true}
        />
      </div>
    </Card>
  );
}; 