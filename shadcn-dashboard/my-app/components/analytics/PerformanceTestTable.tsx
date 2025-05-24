import React from 'react';
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface PerformanceTestEntry {
  id: string; // For key prop
  rank: number;
  playerName: string;
  result: string; // Formatted result
  isPlayer?: boolean;
}

interface PerformanceTestTableProps {
  cardTitle: string;
  cardDescription: string;
  columnUnitName: string; // e.g., "Zeit (s)"
  entries: PerformanceTestEntry[];
}

const PerformanceTestTable: React.FC<PerformanceTestTableProps> = ({
  cardTitle,
  cardDescription,
  columnUnitName,
  entries,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-display">{cardTitle}</CardTitle>
        <CardDescription className="text-body">{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[400px] overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-2 text-display">Rang</th>
                <th className="text-left p-2 text-display">Spieler</th>
                <th className="text-right p-2 text-display">{columnUnitName}</th>
              </tr>
            </thead>
            <tbody className="text-body">
              {entries.map((entry) => (
                <tr 
                  key={entry.id} 
                  className={cn(
                    "border-b border-border",
                    entry.isPlayer && "bg-primary/10"
                  )}
                >
                  <td className="p-2 font-medium">{entry.rank}</td>
                  <td className="p-2">{entry.playerName}</td>
                  <td className="p-2 text-right font-mono">{entry.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceTestTable;
