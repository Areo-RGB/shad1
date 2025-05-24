// shadcn-dashboard/my-app/app/analytics/page.tsx
"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
// import { Skeleton } from "@/components/ui/skeleton" // Skeleton not used in this version, can be removed if not needed
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { performanceData, getPlayerNames, getTestData, getPlayerSpecificData } from "./data"
import { useEffect } from 'react';

// Import our new components
import { AnalyticsHeader } from "@/components/analytics/AnalyticsHeader"
import { PlayerOverviewCard } from "@/components/analytics/PlayerOverviewCard"
import { MetricSummaryCard } from "@/components/analytics/MetricSummaryCard"
import { PlayerComparisonCard } from "@/components/analytics/PlayerComparisonCard"
import { TopResultsTable } from "@/components/analytics/TopResultsTable"
import { PerformanceTestTable } from "@/components/analytics/PerformanceTestTable"
import { PlayerTestComparisonBarList } from "@/components/analytics/PlayerTestComparisonBarList"

export default function Page() {
  // Add useEffect to apply themed borders to table rows
  // This can be a fallback; ideally, border-border is applied directly in JSX.
  useEffect(() => {
    // Find all table rows with border-b class that don't already have border-border
    const tableRows = document.querySelectorAll('tr.border-b:not(.border-border)');
    
    // Add border-border class to apply themed color
    tableRows.forEach(row => {
      row.classList.add('border-border');
    });
  }, []);  // Empty dependency array ensures this runs once after mount
  
  // Helper function to prepare data for TopResultsTable
  const prepareTestData = () => {
    const testNames = ["10m Sprint", "20m Sprint", "Gewandtheit", "Dribbling", "Ballkontrolle", "Balljonglieren"];
    const data: { [key: string]: any } = {};
    
    testNames.forEach(testName => {
      data[testName] = getTestData(testName);
    });
    
    return data;
  };
  
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 p-4 md:p-6"> {/* Added padding here for consistency */}
            <div className="flex flex-col gap-4 md:gap-6"> {/* Removed py-4/md:py-6 as padding is on parent now */}
              {/* Athletics Performance Header */}
              <AnalyticsHeader 
                title="Leistungsanalyse" 
                description="Verfolge und analysiere deine sportlichen Leistungen" 
              />
                {/* Athletics Performance Tabs */}
              <div className="px-0"> {/* Adjusted padding as parent has it */}
                <Tabs defaultValue="ubersicht" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 sm:flex sm:flex-wrap md:grid-cols-4 lg:flex"> {/* Made TabsList responsive */}
                    <TabsTrigger value="ubersicht" className="text-display">Übersicht</TabsTrigger>
                    <TabsTrigger value="10m-sprint" className="text-display">10m Sprint</TabsTrigger>
                    <TabsTrigger value="20m-sprint" className="text-display">20m Sprint</TabsTrigger>
                    <TabsTrigger value="gewandtheit" className="text-display">Gewandtheit</TabsTrigger>
                    <TabsTrigger value="dribbling" className="text-display">Dribbling</TabsTrigger>
                    <TabsTrigger value="balljonglieren" className="text-display">Balljonglieren</TabsTrigger>
                    <TabsTrigger value="ballkontrolle" className="text-display">Ballkontrolle</TabsTrigger>
                  </TabsList>
                  
                  {/* Übersicht Tab Content */}
                  <TabsContent value="ubersicht" className="space-y-4 mt-6"> {/* Added mt-6 for spacing */}
                    {/* Player Selection */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spielerübersicht</CardTitle>
                        <CardDescription className="text-body">Wähle einen Spieler aus, um Details zu sehen</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {getPlayerNames().map((playerName) => (
                            <PlayerOverviewCard 
                              key={playerName}
                              playerName={playerName}
                              sprint10m={performanceData.find(item => 
                                item.isPlayer && 
                                item.playerName === playerName && 
                                item.testName === "10m Sprint"
                              )?.playerResult.toFixed(2) || null}
                              sprint20m={performanceData.find(item => 
                                item.isPlayer && 
                                item.playerName === playerName && 
                                item.testName === "20m Sprint"
                              )?.playerResult.toFixed(2) || null}
                              agility={performanceData.find(item => 
                                item.isPlayer && 
                                item.playerName === playerName && 
                                item.testName === "Gewandtheit"
                              )?.playerResult.toFixed(2) || null}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Main metrics cards */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {/* Card 1 - Sprint Speed */}
                      <MetricSummaryCard
                        title="Sprint Geschwindigkeit"
                        playerCount={getTestData("10m Sprint").filter(item => item.isPlayer).length}
                        bestValue={`${Math.min(...getTestData("10m Sprint").filter(item => item.isPlayer).map(item => item.playerResult)).toFixed(2)}s`}
                        averageValue={`${(getTestData("10m Sprint").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                          getTestData("10m Sprint").filter(item => item.isPlayer).length).toFixed(2)}s`}
                        footerText="10m Sprint Leistungsanalyse"
                      />
                      
                      {/* Card 2 - Agility */}
                      <MetricSummaryCard
                        title="Gewandtheit"
                        playerCount={getTestData("Gewandtheit").filter(item => item.isPlayer).length}
                        bestValue={`${Math.min(...getTestData("Gewandtheit").filter(item => item.isPlayer).map(item => item.playerResult)).toFixed(2)}s`}
                        averageValue={`${(getTestData("Gewandtheit").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                          getTestData("Gewandtheit").filter(item => item.isPlayer).length).toFixed(2)}s`}
                        footerText="Beweglichkeit und Agilität der Spieler"
                      />
                      
                      {/* Card 3 - Ball Control */}
                      <MetricSummaryCard
                        title="Ballkontrolle"
                        playerCount={getTestData("Ballkontrolle").filter(item => item.isPlayer).length}
                        bestValue={`${Math.min(...getTestData("Ballkontrolle").filter(item => item.isPlayer).map(item => item.playerResult)).toFixed(2)}s`}
                        averageValue={`${(getTestData("Ballkontrolle").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                          getTestData("Ballkontrolle").filter(item => item.isPlayer).length).toFixed(2)}s`}
                        footerText="Technische Fähigkeiten mit dem Ball"
                      />
                      
                      {/* Card 4 - Balljonglieren */}
                      <MetricSummaryCard
                        title="Balljonglieren"
                        playerCount={getTestData("Balljonglieren").filter(item => item.isPlayer).length}
                        bestValue={`${getTestData("Balljonglieren").filter(item => item.isPlayer).length > 0 ? 
                          Math.max(...getTestData("Balljonglieren").filter(item => item.isPlayer).map(item => item.playerResult)) : 0} Punkte`}
                        averageValue={`${getTestData("Balljonglieren").filter(item => item.isPlayer).length > 0 ?
                          (getTestData("Balljonglieren").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                          getTestData("Balljonglieren").filter(item => item.isPlayer).length).toFixed(1) : 0} Punkte`}
                        footerText="Ballgefühl und Koordination"
                      />
                    </div>
                    
                    {/* Chart Area */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler-Leistungsvergleich</CardTitle>
                        <CardDescription className="text-body">Spieler im Vergleich zu den DFB-Referenzwerten</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="min-h-[300px] w-full">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                            {getPlayerNames().map((player) => (
                              <PlayerComparisonCard
                                key={player}
                                playerName={player}
                                performanceDataForPlayer={getPlayerSpecificData(player)}
                              />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Best Results */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Beste Ergebnisse</CardTitle>
                        <CardDescription className="text-body">Top-Leistungen in jeder Kategorie</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <TopResultsTable testData={prepareTestData()} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  {/* 10m Sprint Tab Content */}
                  <TabsContent value="10m-sprint" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">10m Sprint Performance</CardTitle>
                        <CardDescription className="text-body">Detaillierte Ergebnisse aller Spieler</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PerformanceTestTable
                          testName="10m Sprint"
                          data={getTestData("10m Sprint")}
                          unit="s"
                        />
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler Vergleich</CardTitle>
                        <CardDescription className="text-body">Leistungsvergleich 10m Sprint</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PlayerTestComparisonBarList
                          testName="10m Sprint"
                          playerTestData={getTestData("10m Sprint")}
                          isLowerBetter={true}
                          rangeMin={1.99} // DFB-97
                          rangeSpan={0.4} // Approximate range between DFB-97 and DFB-3
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  {/* 20m Sprint Tab Content */}
                  <TabsContent value="20m-sprint" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">20m Sprint Performance</CardTitle>
                        <CardDescription className="text-body">Geschwindigkeit und Ausdauer über mittlere Distanz</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="max-h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left p-2 text-display">Rang</th>
                                <th className="text-left p-2 text-display">Spieler</th>
                                <th className="text-right p-2 text-display">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody className="text-body">
                              {getTestData("20m Sprint")
                                .sort((a, b) => a.playerResult - b.playerResult) // Sort by time (ascending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b border-border`}>
                                  <td className="p-2 font-medium">{index + 1}</td>
                                  <td className="p-2">{entry.playerName}</td>
                                  <td className="p-2 text-right font-mono">{entry.playerResult.toFixed(2)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler Vergleich</CardTitle>
                        <CardDescription className="text-body">20m Sprint Ergebnisse der Spieler im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-body">
                          {getTestData("20m Sprint")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-display">{index + 1}. {entry.playerName}</span>
                                <span className="text-sm font-mono">{entry.playerResult.toFixed(2)}s</span>
                              </div>
                              <div className="w-full bg-primary/10 rounded-full h-2.5">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ 
                                    width: `${Math.max(0, 100 - ((entry.playerResult - 3.4) / 0.7) * 100)}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Gewandtheit Tab Content */}
                  <TabsContent value="gewandtheit" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Gewandtheit Analyse</CardTitle>
                        <CardDescription className="text-body">Beweglichkeit und schnelle Richtungswechsel</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="max-h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left p-2 text-display">Rang</th>
                                <th className="text-left p-2 text-display">Spieler</th>
                                <th className="text-right p-2 text-display">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody className="text-body">
                              {getTestData("Gewandtheit")
                                .sort((a, b) => a.playerResult - b.playerResult)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b border-border`}>
                                  <td className="p-2 font-medium">{index + 1}</td>
                                  <td className="p-2">{entry.playerName}</td>
                                  <td className="p-2 text-right font-mono">{entry.playerResult.toFixed(2)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler Vergleich</CardTitle>
                        <CardDescription className="text-body">Gewandtheit Ergebnisse im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-body">
                          {getTestData("Gewandtheit")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-display">{index + 1}. {entry.playerName}</span>
                                <span className="text-sm font-mono">{entry.playerResult.toFixed(2)}s</span>
                              </div>
                              <div className="w-full bg-primary/10 rounded-full h-2.5">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ 
                                    width: `${Math.max(0, 100 - ((entry.playerResult - 7.3) / 2.5) * 100)}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Dribbling Tab Content */}
                  <TabsContent value="dribbling" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Dribbling Fähigkeiten</CardTitle>
                        <CardDescription className="text-body">Ballführung und Kontrolle während der Bewegung</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="max-h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left p-2 text-display">Rang</th>
                                <th className="text-left p-2 text-display">Spieler</th>
                                <th className="text-right p-2 text-display">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody className="text-body">
                              {getTestData("Dribbling")
                                .sort((a, b) => a.playerResult - b.playerResult)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b border-border`}>
                                  <td className="p-2 font-medium">{index + 1}</td>
                                  <td className="p-2">{entry.playerName}</td>
                                  <td className="p-2 text-right font-mono">{entry.playerResult.toFixed(2)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler Vergleich</CardTitle>
                        <CardDescription className="text-body">Dribbling Ergebnisse im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-body">
                          {getTestData("Dribbling")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-display">{index + 1}. {entry.playerName}</span>
                                <span className="text-sm font-mono">{entry.playerResult.toFixed(2)}s</span>
                              </div>
                              <div className="w-full bg-primary/10 rounded-full h-2.5">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ 
                                    width: `${Math.max(0, 100 - ((entry.playerResult - 10.0) / 4.5) * 100)}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Balljonglieren Tab Content */}
                  <TabsContent value="balljonglieren" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Balljonglieren Fähigkeiten</CardTitle>
                        <CardDescription className="text-body">Ballgefühl und Koordination</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="max-h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left p-2 text-display">Rang</th>
                                <th className="text-left p-2 text-display">Spieler</th>
                                <th className="text-right p-2 text-display">Punkte</th>
                              </tr>
                            </thead>
                            <tbody className="text-body">
                              {getTestData("Balljonglieren")
                                .sort((a, b) => b.playerResult - a.playerResult) // Sort by points (descending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b border-border`}>
                                  <td className="p-2 font-medium">{index + 1}</td>
                                  <td className="p-2">{entry.playerName}</td>
                                  <td className="p-2 text-right font-mono">{entry.playerResult.toFixed(0)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler Vergleich</CardTitle>
                        <CardDescription className="text-body">Balljonglieren Ergebnisse im Vergleich (höher ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-body">
                          {getTestData("Balljonglieren")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => b.playerResult - a.playerResult)  // Descending for balljonglieren
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-display">{index + 1}. {entry.playerName}</span>
                                <span className="text-sm font-mono">{entry.playerResult.toFixed(0)} Punkte</span>
                              </div>
                              <div className="w-full bg-primary/10 rounded-full h-2.5">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ 
                                    width: `${Math.min(100, (entry.playerResult / 11) * 100)}%` // Assuming 11 is a good max for scaling
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Ballkontrolle Tab Content */}
                  <TabsContent value="ballkontrolle" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Ballkontrolle Analyse</CardTitle>
                        <CardDescription className="text-body">Präzise Ballbeherrschung und Technik</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="max-h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left p-2 text-display">Rang</th>
                                <th className="text-left p-2 text-display">Spieler</th>
                                <th className="text-right p-2 text-display">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody className="text-body">
                              {getTestData("Ballkontrolle")
                                .sort((a, b) => a.playerResult - b.playerResult) // Sort by time (ascending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b border-border`}>
                                  <td className="p-2 font-medium">{index + 1}</td>
                                  <td className="p-2">{entry.playerName}</td>
                                  <td className="p-2 text-right font-mono">{entry.playerResult.toFixed(2)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-display">Spieler Vergleich</CardTitle>
                        <CardDescription className="text-body">Ballkontrolle Ergebnisse im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-body">
                          {getTestData("Ballkontrolle")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-display">{index + 1}. {entry.playerName}</span>
                                <span className="text-sm font-mono">{entry.playerResult.toFixed(2)}s</span>
                              </div>
                              <div className="w-full bg-primary/10 rounded-full h-2.5">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ 
                                    width: `${Math.max(0, 100 - ((entry.playerResult - 8.5) / 7.0) * 100)}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}