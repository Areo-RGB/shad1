import { FC } from "react";
import { PerformanceData } from "@/app/analytics/data";

interface PerformanceTestTableProps {
  testName: string;
  data: PerformanceData[];
  unit: string;
}

export const PerformanceTestTable: FC<PerformanceTestTableProps> = ({
  testName,
  data,
  unit
}) => {
  // Sort data: player data first by performance, then reference data
  const sortedData = [...data].sort((a, b) => {
    // Put player data first
    if (a.isPlayer && !b.isPlayer) return -1;
    if (!a.isPlayer && b.isPlayer) return 1;
    
    // Sort by performance (for most tests, lower is better)
    if (testName === "Balljonglieren") {
      return b.playerResult - a.playerResult; // Higher is better
    } else {
      return a.playerResult - b.playerResult; // Lower is better
    }
  });

  return (
    <div className="rounded-md border border-border">
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Rang</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
            <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Ergebnis</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr 
              key={`${item.playerName}-${index}`} 
              className={`border-b border-border ${item.isPlayer ? "bg-primary/10" : ""}`}
            >
              <td className="p-4 align-middle">{index + 1}</td>
              <td className="p-4 align-middle">{item.playerName}</td>
              <td className="p-4 align-middle text-right font-medium">
                {item.playerResult.toFixed(2)} {unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 