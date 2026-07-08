class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // 為了讓查詢單字的速度變成 O(1)，我們把 Array 轉成 Set
    const wordSet = new Set(wordDict);
    
    // 建立 dp 陣列，長度為 s.length + 1，預設全為 false
    const dp = new Array(s.length + 1).fill(false);
    
    // 初始化地基 (空字串)
    dp[0] = true;
    
    // i 代表我們目前正在檢查的字串長度 (從 1 到 s.length)
    for (let i = 1; i <= s.length; i++) {
        
        // j 是我們嘗試去尋找的「安全檢查點」 (從 0 到 i-1)
        for (let j = 0; j < i; j++) {
            
            // 條件 1: dp[j] 必須是 true (前半段拼得出來)
            // 條件 2: 從 j 切到 i 的字串，必須存在於字典中
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break; // 只要找到一種切法能拼出前 i 個字元，就可以提早結束這層迴圈了
            }
        }
    }
    
    // 最後回傳陣列的最後一格，就代表「整個字串」能不能被拼出來
    return dp[s.length];
    }
}
