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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        // Goal:find the max count of overlapping meetings
        // Sweep Line Algorithm
        // 1.透過一個map紀錄每一個時間點有meeting的數量(透過+1/-1)
        // 2.然後針對這個map去找出最大值
        const timeMap = new Map();
        for(const interval of intervals) {
            let {start, end} = interval;
            timeMap.set(start, (timeMap.get(start) || 0) + 1);
            timeMap.set(end, (timeMap.get(end) || 0) - 1);
        }
        const sortedKeys = Array.from(timeMap.keys()).sort((a, b) => a - b);
        let currOverlap = 0;
        let maxOverlap = 0;
        for(const key of sortedKeys) {
            currOverlap += timeMap.get(key);
            maxOverlap = Math.max(maxOverlap, currOverlap);
        }
        return maxOverlap;
        
    }
}
