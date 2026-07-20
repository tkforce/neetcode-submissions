class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // Goal: find the max non overlapping interval counts
        // each interval you can either skip it or choose it if non-overlapped
        // return the max of them
        
        if(intervals.length <= 1) return 0; 

        intervals.sort((a , b) => a[0] - b[0]); // sort by start
        
        const dfs = (idx, prev) => {
            if(idx > intervals.length - 1) return 0 ; // reach the end
            let result = dfs(idx + 1, prev) // skip it
            if(prev === -1 || intervals[prev][1] <= intervals[idx][0]) {
                // chose it when not overlapped
                result = Math.max(result, 1 + dfs(idx + 1, idx)); 
            }
            return result;
        }

        return intervals.length - dfs(0, -1);
    }
}
