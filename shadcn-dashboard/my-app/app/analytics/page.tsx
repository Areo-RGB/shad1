// shadcn-dashboard/my-app/app/analytics/page.tsx
"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" // Keep for main layout cards if any are left, or for structure.
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { performanceData, getPlayerNames, getTestData, PerformanceData } from "./data" // Ensure PerformanceData is exported from data.ts

// Import new analytics components
import { AnalyticsHeader } from "@/components/analytics/AnalyticsHeader"
import { PlayerOverviewCard } from "@/components/analytics/PlayerOverviewCard"
import { MetricSummaryCard } from "@/components/analytics/MetricSummaryCard"
import { PlayerComparisonBar } from "@/components/analytics/PlayerComparisonBar" // Used by PlayerComparisonCard
import { PlayerComparisonCard, PerformanceBarData } from "@/components/analytics/PlayerComparisonCard"
import { TopResultsTable, TopResultEntry } from "@/components/analytics/TopResultsTable"
import { PerformanceTestTable, PerformanceTestEntry } from "@/components/analytics/PerformanceTestTable"
import { PlayerTestComparisonBarList, PlayerComparisonEntry } from "@/components/analytics/PlayerTestComparisonBarList"

export default function Page() {
  const playerNames = getPlayerNames();

  // Prepare data for TopResultsTable
  const testNamesForTopResults = ["10m Sprint", "20m Sprint", "Gewandtheit", "Dribbling", "Balljonglieren", "Ballkontrolle"];
  const topResultsData: TopResultEntry[] = testNamesForTopResults.map(testName => {
    const testEntries = getTestData(testName).filter(item => item.isPlayer);
    let bestEntry: PerformanceData | undefined;
    if (testEntries.length > 0) {
      if (testName === "Balljonglieren") { // Higher is better
        bestEntry = testEntries.sort((a, b) => b.playerResult - a.playerResult)[0];
      } else { // Lower is better
        bestEntry = testEntries.sort((a, b) => a.playerResult - b.playerResult)[0];
      }
    }
    return {
      id: testName,
      testName: testName,
      playerName: bestEntry?.playerName || null,
      result: bestEntry ? `${bestEntry.playerResult.toFixed(testName === "Balljonglieren" ? 0 : 2)} ${bestEntry.testUnits}` : null,
    };
  });

  // Prepare data for PlayerComparisonCard components
  const playerComparisonCardsData = playerNames.map(playerName => {
    const playerData10m = performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "10m Sprint");
    const playerData20m = performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "20m Sprint");
    const playerDataGew = performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "Gewandtheit");

    const performanceBars: PerformanceBarData[] = [
      {
        id: "10m-sprint",
        testName: "10m Sprint",
        playerResultRaw: playerData10m?.playerResult ?? null,
        playerResultDisplay: playerData10m ? `${playerData10m.playerResult.toFixed(2)} s` : "N/A",
        rangeMin: 1.99, // DFB-97 for 10m
        rangeMax: 2.39, // DFB-3 for 10m
        isLowerBetter: true,
      },
      {
        id: "20m-sprint",
        testName: "20m Sprint",
        playerResultRaw: playerData20m?.playerResult ?? null,
        playerResultDisplay: playerData20m ? `${playerData20m.playerResult.toFixed(2)} s` : "N/A",
        rangeMin: 3.47, // DFB-97 for 20m
        rangeMax: 4.14, // DFB-3 for 20m
        isLowerBetter: true,
      },
      {
        id: "gewandtheit",
        testName: "Gewandtheit",
        playerResultRaw: playerDataGew?.playerResult ?? null,
        playerResultDisplay: playerDataGew ? `${playerDataGew.playerResult.toFixed(2)} s` : "N/A",
        rangeMin: 7.91,  // DFB-97 for Gewandtheit
        rangeMax: 9.66,  // DFB-3 for Gewandtheit
        isLowerBetter: true,
      }
    ];
    return { playerName, performanceBars };
  });
  
  // Data for MetricSummaryCards
  const testsForSummary = [
    { name: "10m Sprint", unit: "s", title: "Sprint Geschwindigkeit", footer: "10m Sprint Leistungsanalyse", isLowerBetter: true },
    { name: "Gewandtheit", unit: "s", title: "Gewandtheit", footer: "Beweglichkeit und Agilität der Spieler", isLowerBetter: true },
    { name: "Ballkontrolle", unit: "s", title: "Ballkontrolle", footer: "Technische Fähigkeiten mit dem Ball", isLowerBetter: true },
    { name: "Balljonglieren", unit: "Punkte", title: "Balljonglieren", footer: "Ballgefühl und Koordination", isLowerBetter: false },
  ];

  const metricSummaries = testsForSummary.map(test => {
    const data = getTestData(test.name).filter(item => item.isPlayer);
    const playerCount = data.length;
    let bestValue = "N/A";
    let averageValue = "N/A";

    if (playerCount > 0) {
      const results = data.map(item => item.playerResult);
      if (test.isLowerBetter) {
        bestValue = `${Math.min(...results).toFixed(test.unit === "s" ? 2 : 0)}${test.unit !== "Punkte" ? "s" : " Punkte"}`;
      } else {
        bestValue = `${Math.max(...results).toFixed(test.unit === "s" ? 2 : 0)}${test.unit !== "Punkte" ? "s" : " Punkte"}`;
      }
      averageValue = `${(results.reduce((acc, val) => acc + val, 0) / playerCount).toFixed(test.unit === "s" ? 2 : 1)}${test.unit !== "Punkte" ? "s" : " Punkte"}`;
    }
    return { ...test, playerCount, bestValue, averageValue };
  });

  // Data for individual test tabs
  const individualTestTabs = [
    { value: "10m-sprint", name: "10m Sprint", unit: "s", description: "Geschwindigkeit und Beschleunigung über kurze Distanz", isLowerBetter: true, rangeMin: 1.95, rangeMax: 2.95 }, // Example range, adjust as needed
    { value: "20m-sprint", name: "20m Sprint", unit: "s", description: "Geschwindigkeit und Ausdauer über mittlere Distanz", isLowerBetter: true, rangeMin: 3.40, rangeMax: 4.10 },
    { value: "gewandtheit", name: "Gewandtheit", unit: "s", description: "Beweglichkeit und schnelle Richtungswechsel", isLowerBetter: true, rangeMin: 7.30, rangeMax: 9.80 },
    { value: "dribbling", name: "Dribbling", unit: "s", description: "Ballführung und Kontrolle während der Bewegung", isLowerBetter: true, rangeMin: 10.0, rangeMax: 14.5 },
    { value: "balljonglieren", name: "Balljonglieren", unit: "Punkte", description: "Ballgefühl und Koordination", isLowerBetter: false, rangeMin: 0, rangeMax: 11 }, // Higher is better
    { value: "ballkontrolle", name: "Ballkontrolle", unit: "s", description: "Präzise Ballbeherrschung und Technik", isLowerBetter: true, rangeMin: 8.5, rangeMax: 15.5 },
  ];

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 p-4 md:p-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <AnalyticsHeader 
                title="Leistungsanalyse" 
                description="Verfolge und analysiere deine sportlichen Leistungen" 
              />
              <div className="px-0">
                <Tabs defaultValue="ubersicht" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 sm:flex sm:flex-wrap md:grid-cols-4 lg:flex">
                    <TabsTrigger value="ubersicht" className="text-display">Übersicht</TabsTrigger>
                    {individualTestTabs.map(tab => (
                      <TabsTrigger key={tab.value} value={tab.value} className="text-display">{tab.name}</TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <TabsContent value="ubersicht" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spielerübersicht</CardTitle>
                        <CardDescription className="text-body">Wähle einen Spieler aus, um Details zu sehen</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {playerNames.map((playerName) => {
                            const sprint10m = performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "10m Sprint")?.playerResult.toFixed(2);
                            const sprint20m = performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "20m Sprint")?.playerResult.toFixed(2);
                            const agility = performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "Gewandtheit")?.playerResult.toFixed(2);
                            return (
                              <PlayerOverviewCard 
                                key={playerName}
                                playerName={playerName}
                                sprint10m={sprint10m || null}
                                sprint20m={sprint20m || null}
                                agility={agility || null}
                              />
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {metricSummaries.map(summary => (
                        <MetricSummaryCard
                          key={summary.name}
                          title={summary.title}
                          playerCount={summary.playerCount}
                          bestValue={summary.bestValue}
                          averageValue={summary.averageValue}
                          footerText={summary.footer}
                        />
                      ))}
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler-Leistungsvergleich</CardTitle>
                        <CardDescription className="text-body">Spieler im Vergleich zu den DFB-Referenzwerten</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="min-h-[300px] w-full">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                            {playerComparisonCardsData.map(data => (
                              <PlayerComparisonCard 
                                key={data.playerName}
                                playerName={data.playerName}
                                performanceBars={data.performanceBars}
                              />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <TopResultsTable topResults={topResultsData} />
                  </TabsContent>
                  
                  {individualTestTabs.map(tabInfo => {
                    const testDataForTable: PerformanceTestEntry[] = getTestData(tabInfo.name)
                      .sort((a, b) => tabInfo.isLowerBetter ? a.playerResult - b.playerResult : b.playerResult - a.playerResult)
                      .map((entry, index) => ({
                        id: entry.playerName + entry.testName, // More unique key
                        rank: index + 1,
                        playerName: entry.playerName,
                        result: `${entry.playerResult.toFixed(tabInfo.unit === "s" ? 2 : 0)}${tabInfo.unit !== "Punkte" ? "s" : ""}${tabInfo.unit === "Punkte" ? " Punkte" : ""}`,
                        isPlayer: entry.isPlayer,
                      }));

                    const playerTestDataForBars: PlayerComparisonEntry[] = getTestData(tabInfo.name)
                      .filter(item => item.isPlayer)
                      .sort((a, b) => tabInfo.isLowerBetter ? a.playerResult - b.playerResult : b.playerResult - a.playerResult)
                      .map((entry, index) => ({
                        id: entry.playerName,
                        rank: index + 1,
                        playerName: entry.playerName,
                        resultDisplay: `${entry.playerResult.toFixed(tabInfo.unit === "s" ? 2 : 0)}${tabInfo.unit !== "Punkte" ? "s" : ""}${tabInfo.unit === "Punkte" ? " Punkte" : ""}`,
                        rawValue: entry.playerResult,
                      }));
                      
                    return (
                      <TabsContent key={tabInfo.value} value={tabInfo.value} className="space-y-4 mt-6">
                        <PerformanceTestTable
                          cardTitle={`${tabInfo.name} Performance`}
                          cardDescription={tabInfo.description}
                          columnUnitName={tabInfo.unit === "s" ? `Zeit (${tabInfo.unit})` : tabInfo.unit}
                          entries={testDataForTable}
                        />
                        <PlayerTestComparisonBarList
                          cardTitle="Spieler Vergleich"
                          cardDescription={`${tabInfo.name} Ergebnisse im Vergleich (${tabInfo.isLowerBetter ? "niedriger" : "höher"} ist besser)`}
                          entries={playerTestDataForBars}
                          isLowerBetter={tabInfo.isLowerBetter}
                          rangeMin={tabInfo.rangeMin}
                          rangeMax={tabInfo.rangeMax}
                        />
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}