class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // Buttom-up DP with space optimized
        // if()
        
        let prevSum = nums[0];
        let maxSum = nums[0];
        for(let i = 1 ; i < nums.length ; i ++) {
            // each nums[i] basically has two options:
            // 1. extend an exsiting sub array
            // 2. start a new one
            // we need to pick the one that is larger as dp[i]
            let currSum = Math.max(nums[i], nums[i] + prevSum);
            maxSum = Math.max(maxSum, currSum);
            prevSum = currSum;
        }

        return maxSum;

    }
}
