class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
    // bottom-up DP
        if(nums.length === 0) return 0;

        const dp = Array(nums.length).fill(1);
        dp[nums.length - 1] = 1;
        let maxLength = 0;
        for(let i = nums.length - 1 ; i >= 0 ; i--) {
            for(let j = i + 1 ; j < nums.length ; j++) {
                // 比較i以後的每一個j，如果比num[j] > num[i]都是合法的
                // 所以就要取最大的dp[j]+1後當作dp[i]的值

                if(nums[j] > nums[i]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                }
            }
            maxLength = Math.max(maxLength, dp[i]);
        }
        return maxLength;
    }
}
