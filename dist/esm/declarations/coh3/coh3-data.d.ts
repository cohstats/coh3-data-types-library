import { leaderBoardType, logFileRaceType, raceID, raceType } from './coh3-types';
declare const logFileRaceTypeToRaceType: Record<logFileRaceType, raceType>;
declare const leaderboardsIDAsObject: {
    '1v1': {
        american: number;
        british: number;
        dak: number;
        german: number;
    };
    '2v2': {
        american: number;
        british: number;
        dak: number;
        german: number;
    };
    '3v3': {
        american: number;
        british: number;
        dak: number;
        german: number;
    };
    '4v4': {
        american: number;
        british: number;
        dak: number;
        german: number;
    };
};
declare const localizedNames: Record<raceType, string>;
declare const localizedGameTypes: Record<leaderBoardType, string>;
declare const raceIDs: Record<raceID, raceType>;
declare const raceIDsAsObject: Record<number, {
    id: number;
    name: string;
    faction_id: number;
    localizedName?: string;
}>;
declare const matchTypesAsObject: Record<number, {
    id: number;
    name: string;
    localizedName?: string;
}>;
export { leaderboardsIDAsObject, localizedNames, localizedGameTypes, raceIDs, matchTypesAsObject, raceIDsAsObject, logFileRaceTypeToRaceType, };
//# sourceMappingURL=coh3-data.d.ts.map