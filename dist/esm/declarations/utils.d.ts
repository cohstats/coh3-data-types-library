declare const calculatePageNumber: (position: number, RECORD_PER_PAGE?: number) => number;
declare const calculatePositionNumber: (pageNumber: number, RECORD_PER_PAGE?: number) => number;
/**
 * INFO: This is old function
 * Returns string based on how much time elapsed from the match start
 *
 * Time < 1 Hour      returns MM minutes ago
 *
 * Time < 1 Day       returns HH hours MM minutes ago
 *
 * Time < 5 Days      returns X days ago
 *
 * Time > 5 days      returns en-US locale date
 */
declare function formatMatchTime(startTime: number, onlyDate?: boolean): string;
export { calculatePageNumber, calculatePositionNumber, formatMatchTime };
//# sourceMappingURL=utils.d.ts.map