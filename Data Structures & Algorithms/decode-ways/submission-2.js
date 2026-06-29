class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(s[0] === '0') return 0;
        
        let twoBack = 1; // dp[0] 只有一個字元的一種結果
        let oneBack = 1; // dp[1] 第一個字元不是0，所以只會有兩個字元的一種結果

        for(let i = 2 ; i <= s.length ; i ++) {
            let curr = 0;
            if(s[i - 1] !== '0') curr += oneBack;

            const twoDigit = Number(s.substring(i - 2, i));
            if (twoDigit >= 10 && twoDigit <= 26) curr += twoBack;
            
            twoBack = oneBack;
            oneBack = curr;
        }

        return oneBack;
    }
}
