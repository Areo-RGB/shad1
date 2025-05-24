import { FC } from "react";
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface MetricSummaryCardProps {
  title: string;
  playerCount: number;
  bestValue: string;
  averageValue: string;
  footerText: string;
}

export const MetricSummaryCard: FC<MetricSummaryCardProps> = ({
  title,
  playerCount,
  bestValue,
  averageValue,
  footerText
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription className="text-body">{title}</CardDescription>
        <CardTitle className="text-2xl text-display">
          {playerCount} Spieler
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-body">
          <div className="flex justify-between mb-1">
            <span>Bester Wert:</span>
            <span className="font-semibold">{bestValue}</span>
          </div>
          <div className="flex justify-between">
            <span>Durchschnitt:</span>
            <span className="font-semibold">{averageValue}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        {footerText}
      </CardFooter>
    </Card>
  );
}; 