class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // 依照 start time 升冪排序
        intervals.sort((a, b) => a[0] - b[0]);

        // 直接將第一個區間放入結果，作為比對的基準
        const resultIntervals = [intervals[0]];

        // 從第二個區間開始遍歷
        for (let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            const lastMerged = resultIntervals[resultIntervals.length - 1];

            // 判斷是否重疊：如果 lastMerged 的結束時間 >= current 的開始時間
            if (lastMerged[1] >= current[0]) {
                // 發生重疊，更新 lastMerged 的結束時間為兩者中的最大值
                lastMerged[1] = Math.max(lastMerged[1], current[1]);
            } else {
                // 沒有重疊，直接將 current 區間加入結果陣列
                resultIntervals.push(current);
            }
        }

        return resultIntervals;
    }
}
