class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // sol 1: brute-force兩個array把所有的排列組合走一遍取最大的
        // sol 2: 把計算過sum的組合存起來(用range i,j當作key, sum當value)避免重複計算
        // sol 3: Bottom UP DP

        // make dp[i] as the max sub array sum ending at index i 
        let dp = new Array(nums.length).fill(-Infinity);
        dp[0] = nums[0];
        for(let i = 1 ; i < nums.length ; i ++) {
            dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
        }

        return Math.max(...dp);
    }
}
