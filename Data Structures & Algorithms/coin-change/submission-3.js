class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // recursive with memo (top-down)
        // 想像成一個decision tree, 每一次選一個coin後，剩下amount - coin再去選下一個coin
        // 一直遞迴下去直到amount - coin < 0才停下來
        // 至於該選哪個coin，因為我們要取最少，所以要取結果最少的coin
        const memo = {};
        const dfs = (amount) => {
            if(amount === 0) return 0;
            if(!!memo[amount]) return memo[amount];

            let res = Infinity;
            for(let coin of coins) {
                if(amount - coin >= 0) {
                    res =  Math.min(res, 1 + dfs(amount - coin));
                }
            }
            memo[amount] = res;
            return res;
        };
        const minCoins = dfs(amount);
        return minCoins === Infinity ? -1 : minCoins;
        
    }
}
