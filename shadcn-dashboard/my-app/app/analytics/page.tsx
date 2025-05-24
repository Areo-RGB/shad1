import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { performanceData, getPlayerNames, getTestData } from "./data"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">              {/* Athletics Performance Header */}
              <div className="px-4 lg:px-6">
                <h1 className="text-2xl font-bold tracking-tight">Leistungsanalyse</h1>
                <p className="text-muted-foreground">Verfolge und analysiere deine sportlichen Leistungen</p>
              </div>
                {/* Athletics Performance Tabs */}
              <div className="px-4 lg:px-6">
                <Tabs defaultValue="ubersicht" className="w-full">
                  <TabsList className="flex flex-wrap">
                    <TabsTrigger value="ubersicht">Übersicht</TabsTrigger>
                    <TabsTrigger value="10m-sprint">10m Sprint</TabsTrigger>
                    <TabsTrigger value="20m-sprint">20m Sprint</TabsTrigger>
                    <TabsTrigger value="gewandtheit">Gewandtheit</TabsTrigger>
                    <TabsTrigger value="dribbling">Dribbling</TabsTrigger>
                    <TabsTrigger value="balljonglieren">Balljonglieren</TabsTrigger>
                    <TabsTrigger value="ballkontrolle">Ballkontrolle</TabsTrigger>
                  </TabsList>
                    <TabsContent value="ubersicht" className="space-y-4 mt-4">                    
                    {/* Player Selection */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Spielerübersicht</CardTitle>
                        <CardDescription>Wähle einen Spieler aus, um Details zu sehen</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {getPlayerNames().map((playerName) => (
                            <Card key={playerName} className="cursor-pointer hover:bg-muted/50 transition-colors">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-xl">{playerName}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-col gap-2">
                                  <div className="text-sm flex justify-between">
                                    <span>10m Sprint:</span>
                                    <span className="font-semibold">
                                      {performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "10m Sprint")?.playerResult.toFixed(2) || "N/A"} s
                                    </span>
                                  </div>
                                  <div className="text-sm flex justify-between">
                                    <span>20m Sprint:</span>
                                    <span className="font-semibold">
                                      {performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "20m Sprint")?.playerResult.toFixed(2) || "N/A"} s
                                    </span>
                                  </div>
                                  <div className="text-sm flex justify-between">
                                    <span>Gewandtheit:</span>
                                    <span className="font-semibold">
                                      {performanceData.find(item => item.isPlayer && item.playerName === playerName && item.testName === "Gewandtheit")?.playerResult.toFixed(2) || "N/A"} s
                                    </span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Main metrics cards */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {/* Card 1 - Sprint Speed */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Sprint Geschwindigkeit</CardDescription>
                          <CardTitle className="text-2xl">
                            {getTestData("10m Sprint").filter(item => item.isPlayer).length} Spieler
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Bester Wert:</span>
                              <span className="font-semibold">
                                {Math.min(...getTestData("10m Sprint").filter(item => item.isPlayer).map(item => item.playerResult)).toFixed(2)}s
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Durchschnitt:</span>
                              <span className="font-semibold">
                                {(getTestData("10m Sprint").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                                getTestData("10m Sprint").filter(item => item.isPlayer).length).toFixed(2)}s
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="text-xs text-muted-foreground">
                          10m Sprint Leistungsanalyse
                        </CardFooter>
                      </Card>
                      
                      {/* Card 2 - Agility */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Gewandtheit</CardDescription>
                          <CardTitle className="text-2xl">
                            {getTestData("Gewandtheit").filter(item => item.isPlayer).length} Spieler
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Bester Wert:</span>
                              <span className="font-semibold">
                                {Math.min(...getTestData("Gewandtheit").filter(item => item.isPlayer).map(item => item.playerResult)).toFixed(2)}s
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Durchschnitt:</span>
                              <span className="font-semibold">
                                {(getTestData("Gewandtheit").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                                getTestData("Gewandtheit").filter(item => item.isPlayer).length).toFixed(2)}s
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="text-xs text-muted-foreground">
                          Beweglichkeit und Agilität der Spieler
                        </CardFooter>
                      </Card>
                      
                      {/* Card 3 - Ball Control */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Ballkontrolle</CardDescription>
                          <CardTitle className="text-2xl">
                            {getTestData("Ballkontrolle").filter(item => item.isPlayer).length} Spieler
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Bester Wert:</span>
                              <span className="font-semibold">
                                {Math.min(...getTestData("Ballkontrolle").filter(item => item.isPlayer).map(item => item.playerResult)).toFixed(2)}s
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Durchschnitt:</span>
                              <span className="font-semibold">
                                {(getTestData("Ballkontrolle").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                                getTestData("Ballkontrolle").filter(item => item.isPlayer).length).toFixed(2)}s
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="text-xs text-muted-foreground">
                          Technische Fähigkeiten mit dem Ball
                        </CardFooter>
                      </Card>
                      
                      {/* Card 4 - Balljonglieren */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription>Balljonglieren</CardDescription>
                          <CardTitle className="text-2xl">
                            {getTestData("Balljonglieren").filter(item => item.isPlayer).length} Spieler
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Bester Wert:</span>
                              <span className="font-semibold">
                                {getTestData("Balljonglieren").filter(item => item.isPlayer).length > 0 ? 
                                  Math.max(...getTestData("Balljonglieren").filter(item => item.isPlayer).map(item => item.playerResult)) : 0} Punkte
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Durchschnitt:</span>
                              <span className="font-semibold">
                                {getTestData("Balljonglieren").filter(item => item.isPlayer).length > 0 ?
                                  (getTestData("Balljonglieren").filter(item => item.isPlayer).reduce((acc, item) => acc + item.playerResult, 0) / 
                                  getTestData("Balljonglieren").filter(item => item.isPlayer).length).toFixed(1) : 0} Punkte
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="text-xs text-muted-foreground">
                          Ballgefühl und Koordination
                        </CardFooter>
                      </Card>
                    </div>                      {/* Chart Area */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Spieler-Leistungsvergleich</CardTitle>
                        <CardDescription>Spieler im Vergleich zu den DFB-Referenzwerten</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="h-[300px] w-full">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                            {getPlayerNames().map((player) => (
                              <Card key={player} className="p-4 flex flex-col">
                                <h3 className="text-base font-semibold mb-4">{player}</h3>
                                <div className="space-y-4 flex-1">
                                  {/* 10m Sprint Comparison */}
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                      <span>10m Sprint:</span>
                                      <span>
                                        {performanceData.find(item => item.isPlayer && item.playerName === player && item.testName === "10m Sprint")?.playerResult.toFixed(2) || "N/A"} s
                                      </span>
                                    </div>
                                    <div className="w-full flex items-center gap-2">
                                      <span className="text-xs text-muted-foreground">DFB-97</span>
                                      <div className="flex-1 bg-primary/10 rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" 
                                          style={{ 
                                            width: `${Math.max(0, 100 - ((
                                              performanceData.find(item => item.isPlayer && item.playerName === player && item.testName === "10m Sprint")?.playerResult || 0
                                              - 1.99) / 0.4 * 100))}%` 
                                          }}>
                                        </div>
                                      </div>
                                      <span className="text-xs text-muted-foreground">DFB-3</span>
                                    </div>
                                  </div>

                                  {/* 20m Sprint Comparison */}
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                      <span>20m Sprint:</span>
                                      <span>
                                        {performanceData.find(item => item.isPlayer && item.playerName === player && item.testName === "20m Sprint")?.playerResult.toFixed(2) || "N/A"} s
                                      </span>
                                    </div>
                                    <div className="w-full flex items-center gap-2">
                                      <span className="text-xs text-muted-foreground">DFB-97</span>
                                      <div className="flex-1 bg-primary/10 rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" 
                                          style={{ 
                                            width: `${Math.max(0, 100 - ((
                                              performanceData.find(item => item.isPlayer && item.playerName === player && item.testName === "20m Sprint")?.playerResult || 0
                                              - 3.47) / 0.67 * 100))}%` 
                                          }}>
                                        </div>
                                      </div>
                                      <span className="text-xs text-muted-foreground">DFB-3</span>
                                    </div>
                                  </div>
                                  
                                  {/* Gewandtheit Comparison */}
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                      <span>Gewandtheit:</span>
                                      <span>
                                        {performanceData.find(item => item.isPlayer && item.playerName === player && item.testName === "Gewandtheit")?.playerResult.toFixed(2) || "N/A"} s
                                      </span>
                                    </div>
                                    <div className="w-full flex items-center gap-2">
                                      <span className="text-xs text-muted-foreground">DFB-97</span>
                                      <div className="flex-1 bg-primary/10 rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" 
                                          style={{ 
                                            width: `${Math.max(0, 100 - ((
                                              performanceData.find(item => item.isPlayer && item.playerName === player && item.testName === "Gewandtheit")?.playerResult || 0
                                              - 7.91) / 1.75 * 100))}%` 
                                          }}>
                                        </div>
                                      </div>
                                      <span className="text-xs text-muted-foreground">DFB-3</span>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                      {/* Data Tables */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Beste Ergebnisse</CardTitle>
                        <CardDescription>Top-Leistungen nach Kategorie</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Test</th>
                                <th className="text-left p-2">Spieler</th>
                                <th className="text-right p-2">Ergebnis</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* 10m Sprint */}
                              <tr className="border-b">
                                <td className="p-2">10m Sprint</td>
                                <td className="p-2">
                                  {getTestData("10m Sprint")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerName || "N/A"}
                                </td>
                                <td className="p-2 text-right font-mono">
                                  {getTestData("10m Sprint")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerResult.toFixed(2) || "N/A"} s
                                </td>
                              </tr>
                              
                              {/* 20m Sprint */}
                              <tr className="border-b">
                                <td className="p-2">20m Sprint</td>
                                <td className="p-2">
                                  {getTestData("20m Sprint")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerName || "N/A"}
                                </td>
                                <td className="p-2 text-right font-mono">
                                  {getTestData("20m Sprint")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerResult.toFixed(2) || "N/A"} s
                                </td>
                              </tr>
                              
                              {/* Gewandtheit */}
                              <tr className="border-b">
                                <td className="p-2">Gewandtheit</td>
                                <td className="p-2">
                                  {getTestData("Gewandtheit")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerName || "N/A"}
                                </td>
                                <td className="p-2 text-right font-mono">
                                  {getTestData("Gewandtheit")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerResult.toFixed(2) || "N/A"} s
                                </td>
                              </tr>
                              
                              {/* Dribbling */}
                              <tr className="border-b">
                                <td className="p-2">Dribbling</td>
                                <td className="p-2">
                                  {getTestData("Dribbling")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerName || "N/A"}
                                </td>
                                <td className="p-2 text-right font-mono">
                                  {getTestData("Dribbling")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerResult.toFixed(2) || "N/A"} s
                                </td>
                              </tr>
                              
                              {/* Balljonglieren - note: higher is better */}
                              <tr className="border-b">
                                <td className="p-2">Balljonglieren</td>
                                <td className="p-2">
                                  {getTestData("Balljonglieren")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => b.playerResult - a.playerResult)[0]?.playerName || "N/A"}
                                </td>
                                <td className="p-2 text-right font-mono">
                                  {getTestData("Balljonglieren")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => b.playerResult - a.playerResult)[0]?.playerResult.toFixed(0) || "N/A"} Punkte
                                </td>
                              </tr>
                              
                              {/* Ballkontrolle */}
                              <tr className="border-b">
                                <td className="p-2">Ballkontrolle</td>
                                <td className="p-2">
                                  {getTestData("Ballkontrolle")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerName || "N/A"}
                                </td>
                                <td className="p-2 text-right font-mono">
                                  {getTestData("Ballkontrolle")
                                    .filter(item => item.isPlayer)
                                    .sort((a, b) => a.playerResult - b.playerResult)[0]?.playerResult.toFixed(2) || "N/A"} s
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>                  <TabsContent value="10m-sprint" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>10m Sprint Performance</CardTitle>
                        <CardDescription>Geschwindigkeit und Beschleunigung über kurze Distanz</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Rang</th>
                                <th className="text-left p-2">Spieler</th>
                                <th className="text-right p-2">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getTestData("10m Sprint")
                                .sort((a, b) => a.playerResult - b.playerResult) // Sort by time (ascending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b`}>
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
                        <CardTitle>Spieler Vergleich</CardTitle>
                        <CardDescription>10m Sprint Ergebnisse im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {getTestData("10m Sprint")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{index + 1}. {entry.playerName}</span>
                                <span className="text-sm font-mono">{entry.playerResult.toFixed(2)}s</span>
                              </div>
                              <div className="w-full bg-primary/10 rounded-full h-2.5">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ 
                                    width: `${Math.max(0, 100 - ((entry.playerResult - 1.95) / 1.0) * 100)}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>                  <TabsContent value="20m-sprint" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>20m Sprint Performance</CardTitle>
                        <CardDescription>Geschwindigkeit und Ausdauer über mittlere Distanz</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Rang</th>
                                <th className="text-left p-2">Spieler</th>
                                <th className="text-right p-2">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getTestData("20m Sprint")
                                .sort((a, b) => a.playerResult - b.playerResult) // Sort by time (ascending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b`}>
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
                        <CardTitle>Spieler Vergleich</CardTitle>
                        <CardDescription>20m Sprint Ergebnisse der Spieler im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {getTestData("20m Sprint")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{index + 1}. {entry.playerName}</span>
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
                    <TabsContent value="gewandtheit" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Gewandtheit Analyse</CardTitle>
                        <CardDescription>Beweglichkeit und schnelle Richtungswechsel</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Rang</th>
                                <th className="text-left p-2">Spieler</th>
                                <th className="text-right p-2">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getTestData("Gewandtheit")
                                .sort((a, b) => a.playerResult - b.playerResult) // Sort by time (ascending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b`}>
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
                        <CardTitle>Spieler Vergleich</CardTitle>
                        <CardDescription>Gewandtheit Ergebnisse im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {getTestData("Gewandtheit")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{index + 1}. {entry.playerName}</span>
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
                    <TabsContent value="dribbling" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Dribbling Fähigkeiten</CardTitle>
                        <CardDescription>Ballführung und Kontrolle während der Bewegung</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Rang</th>
                                <th className="text-left p-2">Spieler</th>
                                <th className="text-right p-2">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getTestData("Dribbling")
                                .sort((a, b) => a.playerResult - b.playerResult) // Sort by time (ascending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b`}>
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
                        <CardTitle>Spieler Vergleich</CardTitle>
                        <CardDescription>Dribbling Ergebnisse im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {getTestData("Dribbling")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{index + 1}. {entry.playerName}</span>
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
                    <TabsContent value="balljonglieren" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Balljonglieren Fähigkeiten</CardTitle>
                        <CardDescription>Ballgefühl und Koordination</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Rang</th>
                                <th className="text-left p-2">Spieler</th>
                                <th className="text-right p-2">Punkte</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getTestData("Balljonglieren")
                                .sort((a, b) => b.playerResult - a.playerResult) // Sort by points (descending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b`}>
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
                        <CardTitle>Spieler Vergleich</CardTitle>
                        <CardDescription>Balljonglieren Ergebnisse im Vergleich (höher ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {getTestData("Balljonglieren")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => b.playerResult - a.playerResult)  // Descending for balljonglieren
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{index + 1}. {entry.playerName}</span>
                                <span className="text-sm font-mono">{entry.playerResult.toFixed(0)} Punkte</span>
                              </div>
                              <div className="w-full bg-primary/10 rounded-full h-2.5">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ 
                                    width: `${Math.min(100, (entry.playerResult / 11) * 100)}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                    <TabsContent value="ballkontrolle" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Ballkontrolle Analyse</CardTitle>
                        <CardDescription>Präzise Ballbeherrschung und Technik</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[400px] overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Rang</th>
                                <th className="text-left p-2">Spieler</th>
                                <th className="text-right p-2">Zeit (s)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getTestData("Ballkontrolle")
                                .sort((a, b) => a.playerResult - b.playerResult) // Sort by time (ascending)
                                .map((entry, index) => (
                                <tr key={index} className={`${entry.isPlayer ? "bg-primary/10" : ""} border-b`}>
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
                        <CardTitle>Spieler Vergleich</CardTitle>
                        <CardDescription>Ballkontrolle Ergebnisse im Vergleich (niedriger ist besser)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {getTestData("Ballkontrolle")
                            .filter(item => item.isPlayer)
                            .sort((a, b) => a.playerResult - b.playerResult)
                            .map((entry, index) => (
                            <div key={index} className="flex flex-col space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{index + 1}. {entry.playerName}</span>
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
