import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PlayerOverviewCardProps {
  playerName: string;
  sprint10m: string | null;
  sprint20m: string | null;
  agility: string | null;
}

const PlayerOverviewCard: React.FC<PlayerOverviewCardProps> = ({
  playerName,
  sprint10m,
  sprint20m,
  agility,
}) => {
  return (
    <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-display">{playerName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-body">
          <div className="text-sm flex justify-between">
            <span>10m Sprint:</span>
            <span className="font-semibold">{sprint10m ? `${sprint10m} s` : "N/A"}</span>
          </div>
          <div className="text-sm flex justify-between">
            <span>20m Sprint:</span>
            <span className="font-semibold">{sprint20m ? `${sprint20m} s` : "N/A"}</span>
          </div>
          <div className="text-sm flex justify-between">
            <span>Gewandtheit:</span>
            <span className="font-semibold">{agility ? `${agility} s` : "N/A"}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerOverviewCard;
