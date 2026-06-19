class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        
        if(n <= 2) return n;

        let f1 = 1;
        let f2 = 2;

        let currentTotal = 0;
        for(let i = 3 ; i <= n ; i ++){
            currentTotal = f1 + f2;

            f1 = f2;
            f2 = currentTotal;
        }

        return currentTotal;
    }
}
