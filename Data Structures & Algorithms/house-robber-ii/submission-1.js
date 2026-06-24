class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        
        if(nums.length === 1) return nums[0];
        
        const robRange = (start, end) => {
            const memo = new Map();
            const dfs = (i) => {
                if(i > end) return 0;
                if(memo.has(i)) return memo.get(i);
                
                const maxProfit = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
                memo.set(i, maxProfit)
                return maxProfit;
            }

            return dfs(start);
        }

        return Math.max(robRange(0, nums.length - 2),
                        robRange(1, nums.length - 1));

    }
}
