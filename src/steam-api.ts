const baseUrl = "https://api.steampowered.com/";
const COH3_STEAM_APP_ID = 1677280;

const getNumberOfOnlinePlayersSteamUrl = (appId: number | string = COH3_STEAM_APP_ID) => {
  return encodeURI(`${baseUrl}ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appId}`);
};

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
