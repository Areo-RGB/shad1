import { FC } from "react";
import { PerformanceData } from "@/app/analytics/data";

interface TopResultsTableProps {
  testData: { [key: string]: PerformanceData[] };
}

export const TopResultsTable: FC<TopResultsTableProps> = ({
  testData
}) => {
  // Helper to get the best result for a test
  const getBestResult = (testName: string): PerformanceData | null => {
    if (!testData[testName] || testData[testName].length === 0) {
      return null;
    }
    
    const playerData = testData[testName].filter(item => item.isPlayer);
    if (playerData.length === 0) return null;
    
    // For most tests, lower is better (sprint times)
    if (testName !== "Balljonglieren") {
      return playerData.reduce((best, current) => 
        current.playerResult < best.playerResult ? current : best
      , playerData[0]);
    } 
    // For Balljonglieren, higher is better
    else {
      return playerData.reduce((best, current) => 
        current.playerResult > best.playerResult ? current : best
      , playerData[0]);
    }
  };

  return (
    <div className="rounded-md border border-border">
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Test</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Spieler</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Ergebnis</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(testData).map(testName => {
            const bestResult = getBestResult(testName);
            if (!bestResult) return null;
            
            return (
              <tr key={testName} className="border-b border-border">
                <td className="p-4 align-middle">{testName}</td>
                <td className="p-4 align-middle">{bestResult.playerName}</td>
                <td className="p-4 align-middle font-medium">
                  {bestResult.playerResult.toFixed(2)} {bestResult.testUnits}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}; 