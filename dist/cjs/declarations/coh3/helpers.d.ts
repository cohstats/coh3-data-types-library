import { LaddersDataArrayObject, LaddersDataObject } from "./coh3-types";
/**
 * Extracts just the string ID from the steam name used in the results of API.
 * @param name In format "/steam/76561198131099369"
 */
declare const convertSteamNameToID: (name: string) => string;
declare const getMatchDuration: (startTime: number, endTime: number) => string;
declare const getMatchPlayersByFaction: (reportedPlayerResults: Array<any>, faction: "axis" | "allies") => any[];
declare const findAndMergeStatGroups: (laddersDataObject: LaddersDataObject | null | undefined, laddersHistoryObject: LaddersDataObject | null | undefined) => Array<LaddersDataArrayObject>;
export { findAndMergeStatGroups, convertSteamNameToID, getMatchDuration, getMatchPlayersByFaction, };
//# sourceMappingURL=helpers.d.ts.map