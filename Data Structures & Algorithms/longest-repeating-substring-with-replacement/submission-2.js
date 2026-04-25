class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // 每一個substring(window)合法的條件是: 總長度 - 頻率最高的字元 <= k
        // 所以每一個r在往右擴展的時候:
        // - 計算每個字元的count，同時更新最頻繁的字元
        // - 計算當前總長度 - 最頻繁 是否 <= k
        // - 如果不合法，那就要把l往右移動計算一個新的window
        
        let result = 0;
        let count = {};
        let l = 0;
        let maxFreq = 0;

        for(let r = 0 ; r < s.length ; r ++) {
            // 更新當前字元的頻率
            count[s[r]] = (count[s[r]] || 0) + 1;
            // 更新視窗內出現最多次字元的頻率
            maxFreq = Math.max(maxFreq, count[s[r]]);

            // 如果window不合法
            while((r-l+1) - maxFreq > k) {
                count[s[l]] -= 1;
                l ++;
            }

            result = Math.max(result, r-l+1 ) 
        }
        
        return result;

    }
}
