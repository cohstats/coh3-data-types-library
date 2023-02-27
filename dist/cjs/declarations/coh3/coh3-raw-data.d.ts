declare const matchTypes: ({
    id: number;
    name: string;
    localizedName?: undefined;
} | {
    id: number;
    name: string;
    localizedName: string;
})[];
declare const races: ({
    id: number;
    name: string;
    faction_id: number;
    localizedName: string;
} | {
    id: number;
    name: string;
    faction_id: number;
    localizedName?: undefined;
})[];
declare const leaderboards: {
    id: number;
    name: string;
    isranked: number;
    leaderboardmap: {
        matchtype_id: number;
        statgroup_type: number;
        race_id: number;
    }[];
}[];
declare const factions: {
    0: {
        id: number;
        name: string;
    };
    1: {
        id: number;
        name: string;
    };
    2: {
        id: number;
        name: string;
    };
};
export { factions, races, matchTypes, leaderboards };
//# sourceMappingURL=coh3-raw-data.d.ts.map