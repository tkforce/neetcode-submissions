class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // bottom up的邏輯: 每一個amount的答案(最少coin數)是由(amount - c)的答案 + 1(增加一個coin c)來得到
        // 因此可以推倒其狀態轉移方程式:
        // dp[i] = 1 + dp[i - c]);
        // 但因為我們要取有最小答案的c，所以會先把dp[i]填一個很大的值然後遍歷coins去拿到最小的:
        // dp[i] = Math.min(dp[i], 1 + dp[i - c])

        
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;
        
        for(let i = 1 ; i < dp.length ; i ++) {
            for(let coin of coins) {
                if(i - coin >= 0) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
