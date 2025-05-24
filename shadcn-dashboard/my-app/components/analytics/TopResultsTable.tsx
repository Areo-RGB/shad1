import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface TopResultEntry {
  id: string; // For key prop
  testName: string;
  playerName: string | null;
  result: string | null;
}

interface TopResultsTableProps {
  topResults: TopResultEntry[];
}

const TopResultsTable: React.FC<TopResultsTableProps> = ({ topResults }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-display">Beste Ergebnisse</CardTitle>
        <CardDescription className="text-body">Top-Leistungen nach Kategorie</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-2 text-display">Test</th>
                <th className="text-left p-2 text-display">Spieler</th>
                <th className="text-right p-2 text-display">Ergebnis</th>
              </tr>
            </thead>
            <tbody className="text-body">
              {topResults.map((entry) => (
                <tr key={entry.id} className="border-b border-border">
                  <td className="p-2">{entry.testName}</td>
                  <td className="p-2">{entry.playerName || "N/A"}</td>
                  <td className="p-2 text-right font-mono">{entry.result || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopResultsTable;
