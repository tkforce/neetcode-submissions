class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // sort by start
        // if intervals[i].end >= intervals[i+1].start
        // set new end to max(intervals[i].end, intervals[i+1].end) 
        // else 
        // add the current interval to the new array
        if(intervals === 1) return intervals;

        const resultIntervals = [];
        intervals.sort((a, b) => (a[0] - b[0])); // sort by start
        let currStart = intervals[0][0];
        let currEnd = intervals[0][1];
        for(let i = 0 ; i < intervals.length - 1 ; i ++) {
            
            if(currEnd >= intervals[i+1][0]) {
                currStart = Math.min(currStart, intervals[i][0]);
                currEnd = Math.max(currEnd, intervals[i][1], intervals[i+1][1])
                continue;
            } else {
                resultIntervals.push([currStart, currEnd]);
                currStart = intervals[i+1][0];
                currEnd = intervals[i+1][1];
            }
        }

        resultIntervals.push([currStart, currEnd]);

        return resultIntervals;
    }
}
