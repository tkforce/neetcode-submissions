class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // Greedy: 當我們依照 start（起點）排序後，如果遇到兩個區間重疊
        // 我們應該移除「結束時間較晚」的那一個區間。
        // 因為結束時間越晚，越容易跟後面的區間產生重疊；保留結束時間早的，可以留給後面的區間更多空間。
        
        if(intervals.length <= 1) return 0;
        intervals.sort((a,b) => a[0] - b[0]);

        let removeCount = 0;
        let prevEnd = intervals[0][1]
        for(let i = 1; i < intervals.length; i ++) {
            let currStart = intervals[i][0];
            let currEnd = intervals[i][1];
            if(prevEnd > currStart) { 
                // overlap
                removeCount ++;
                prevEnd = Math.min(prevEnd, currEnd);
            } else {
                // no overlap
                prevEnd = currEnd;
            }
        }

        return removeCount;
        
    }
}
