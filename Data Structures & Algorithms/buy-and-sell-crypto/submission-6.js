class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        let l = 0;
        let r = 1;
        while( r < prices.length) {
            let currProfit = prices[r] - prices[l];
            if(currProfit > 0) {
                maxProfit = Math.max(maxProfit, currProfit);
            } else {
                l = r;
            }
            r++
        }
        return maxProfit;
    }
}
