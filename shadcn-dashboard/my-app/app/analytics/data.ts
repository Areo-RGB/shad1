// Define the type for each performance data entry
export type PerformanceData = {
  isPlayer: boolean;
  playerName: string;
  playerResult: number;
  testName: string;
  testCategory: string;
  testUnits: string;
};

// Export the performance data array
export const performanceData: PerformanceData[] = [
  { isPlayer: false, playerName: "DFB-3", playerResult: 2.39, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-10", playerResult: 2.33, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-20", playerResult: 2.28, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-30", playerResult: 2.24, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-40", playerResult: 2.21, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-50", playerResult: 2.18, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-60", playerResult: 2.16, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-70", playerResult: 2.13, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-80", playerResult: 2.10, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-90", playerResult: 2.05, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-97", playerResult: 1.99, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-3", playerResult: 4.14, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-10", playerResult: 4.01, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-20", playerResult: 3.93, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-30", playerResult: 3.87, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-40", playerResult: 3.82, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-50", playerResult: 3.78, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-60", playerResult: 3.74, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-70", playerResult: 3.69, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-80", playerResult: 3.64, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-90", playerResult: 3.57, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-97", playerResult: 3.47, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-3", playerResult: 9.66, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-10", playerResult: 9.33, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-20", playerResult: 9.07, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-30", playerResult: 8.90, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-40", playerResult: 8.77, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-50", playerResult: 8.66, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-60", playerResult: 8.54, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-70", playerResult: 8.42, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-80", playerResult: 8.28, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-90", playerResult: 8.11, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-97", playerResult: 7.91, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-3", playerResult: 14.37, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-10", playerResult: 13.42, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-20", playerResult: 12.84, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-30", playerResult: 12.50, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-40", playerResult: 12.15, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-50", playerResult: 11.90, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-60", playerResult: 11.68, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-70", playerResult: 11.44, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-80", playerResult: 11.16, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-90", playerResult: 10.84, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-97", playerResult: 10.43, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-3", playerResult: 15.29, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-10", playerResult: 13.81, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-20", playerResult: 12.86, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-30", playerResult: 12.28, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-40", playerResult: 11.78, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-50", playerResult: 11.36, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-60", playerResult: 10.99, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-70", playerResult: 10.59, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-80", playerResult: 10.18, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-90", playerResult: 9.66, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB-97", playerResult: 9.00, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: false, playerName: "DFB", playerResult: 1, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: false, playerName: "DFB", playerResult: 1, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: false, playerName: "DFB", playerResult: 1, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: false, playerName: "DFB", playerResult: 1, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: false, playerName: "DFB-80", playerResult: 2, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: false, playerName: "DFB-90", playerResult: 3, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: false, playerName: "DFB-97", playerResult: 6, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: true, playerName: "Finley", playerResult: 2.00, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Finley", playerResult: 3.59, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Finley", playerResult: 7.81, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Finley", playerResult: 10.27, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: true, playerName: "Finley", playerResult: 0.00, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: true, playerName: "Finley", playerResult: 10.82, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: true, playerName: "Alex", playerResult: 7.39, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Alex", playerResult: 10.00, testName: "Dribbling", testCategory: "Technik", testUnits: "s" },
  { isPlayer: true, playerName: "Alex", playerResult: 2.16, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Alex", playerResult: 3.78, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Bent", playerResult: 2.87, testName: "10m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Bent", playerResult: 3.95, testName: "20m Sprint", testCategory: "Schnelligkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Bent", playerResult: 7.92, testName: "Gewandtheit", testCategory: "Beweglichkeit", testUnits: "s" },
  { isPlayer: true, playerName: "Bent", playerResult: 8.95, testName: "Ballkontrolle", testCategory: "Technik", testUnits: "s" },
  { isPlayer: true, playerName: "Bent", playerResult: 11, testName: "Balljonglieren", testCategory: "Technik", testUnits: "Punkte" },
  { isPlayer: true, playerName: "Bent", playerResult: 12.15, testName: "Dribbling", testCategory: "Gewandtheit", testUnits: "s" },
];

// Helper functions to work with the data

/**
 * Get all data for a specific test
 */
export function getTestData(testName: string): PerformanceData[] {
  return performanceData.filter(item => item.testName === testName);
}

/**
 * Get all player data (where isPlayer is true)
 */
export function getPlayerData(): PerformanceData[] {
  return performanceData.filter(item => item.isPlayer === true);
}

/**
 * Get all reference data (where isPlayer is false)
 */
export function getReferenceData(): PerformanceData[] {
  return performanceData.filter(item => item.isPlayer === false);
}

/**
 * Get data for a specific player
 */
export function getPlayerSpecificData(playerName: string): PerformanceData[] {
  return performanceData.filter(item => item.playerName === playerName && item.isPlayer === true);
}

/**
 * Get all unique player names
 */
export function getPlayerNames(): string[] {
  const playerData = getPlayerData();
  const playerNames = playerData.map(item => item.playerName);
  return [...new Set(playerNames)];
}

/**
 * Get all unique test names
 */
export function getTestNames(): string[] {
  const testNames = performanceData.map(item => item.testName);
  return [...new Set(testNames)];
}

/**
 * Calculate percentile of a player's result compared to reference data
 */
export function calculatePercentile(playerResult: number, testName: string, isLowerBetter: boolean = true): number {
  const referenceData = getReferenceData().filter(item => item.testName === testName);
  
  if (referenceData.length === 0) return 0;
  
  const results = referenceData.map(item => item.playerResult);
  
  if (isLowerBetter) {
    // For tests where lower values are better (like sprint times)
    const betterResults = results.filter(result => result <= playerResult);
    return Math.round((betterResults.length / results.length) * 100);
  } else {
    // For tests where higher values are better (like Balljonglieren)
    const betterResults = results.filter(result => result >= playerResult);
    return Math.round((betterResults.length / results.length) * 100);
  }
}
