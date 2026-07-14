/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // sort by start time so we simply compare
        intervals.sort((a, b) => {
            return a.start - b.start; 
        })

        for(let i = 1 ; i < intervals.length ; i ++) {
            if(intervals[i - 1].end > intervals[i].start) return false;
        }
        return true;
        
    }

}
