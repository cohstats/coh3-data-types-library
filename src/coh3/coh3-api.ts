const BASE_RELIC_API_URL = 'https://coh3-api.reliclink.com';

/**
 *
 * @param leaderboard_id
 * @param sortBy 1 - ELO, 0 - Wins*
 * @param count 1 - 200
 * @param start
 */
const getLeaderBoardsUrl = (leaderboard_id: number, sortBy = 0, count = 100, start = 1) => {
  return encodeURI(
    `${BASE_RELIC_API_URL}/community/leaderboard/getleaderboard2?count=${count}&leaderboard_id=${leaderboard_id}&start=${start}&sortBy=${sortBy}&title=coh3`
  );
};

const getSearchUrl = (alias: string): string => {
  return encodeURI(
    `${BASE_RELIC_API_URL}/community/leaderboard/getpersonalstat?aliases=[${alias}]&title=coh3`
  );
};

const getPersonalStatsUrl = (profileID: string): string => {
  return encodeURI(
    `${BASE_RELIC_API_URL}/community/leaderboard/getpersonalstat?profile_ids=[${profileID}]&title=coh3`
  );
};

const getRecentMatchHistoryUrl = (profileID: string): string => {
  return encodeURI(
    `${BASE_RELIC_API_URL}/community/leaderboard/getrecentmatchhistorybyprofileId?profile_id=${profileID}&title=coh3`
  );
};

export { BASE_RELIC_API_URL, getSearchUrl, getPersonalStatsUrl, getRecentMatchHistoryUrl };
