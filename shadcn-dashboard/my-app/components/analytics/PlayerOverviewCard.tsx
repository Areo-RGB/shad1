import { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PlayerOverviewCardProps {
  playerName: string;
  sprint10m: string | null;
  sprint20m: string | null;
  agility: string | null;
}

export const PlayerOverviewCard: FC<PlayerOverviewCardProps> = ({
  playerName,
  sprint10m,
  sprint20m,
  agility
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
            <span className="font-semibold">
              {sprint10m || "N/A"} s
            </span>
          </div>
          <div className="text-sm flex justify-between">
            <span>20m Sprint:</span>
            <span className="font-semibold">
              {sprint20m || "N/A"} s
            </span>
          </div>
          <div className="text-sm flex justify-between">
            <span>Gewandtheit:</span>
            <span className="font-semibold">
              {agility || "N/A"} s
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 