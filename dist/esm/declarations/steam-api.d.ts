declare const getNumberOfOnlinePlayersSteamUrl: (appId?: number | string) => string;
export interface SteamApiPlayerInterface {
    steamid: string;
    communityvisibilitystate?: number;
    profilestate?: number;
    personaname?: string;
    commentpermission?: number;
    profileurl: string;
    avatar?: string;
    avatarmedium: string;
    avatarfull?: string;
    avatarhash?: string;
    lastlogoff?: number;
    personastate?: number;
    realname?: string;
    primaryclanid?: string;
    timecreated?: number;
    personastateflags?: number;
    loccountrycode?: string;
}
export { getNumberOfOnlinePlayersSteamUrl };
//# sourceMappingURL=steam-api.d.ts.map