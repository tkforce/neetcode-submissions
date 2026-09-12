class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        // recursivly select or not-select a num which compose a half of the nums
        const sum = nums.reduce((a, b) => a + b, 0);
        if(sum % 2 != 0) return false;
        const half = sum / 2;

        const dfs = (i, target) => {
            if(i === nums.length) return target === 0;
            if(target < 0) return false;

            return dfs(i + 1, target - nums[i]) || dfs(i + 1, target);
        }

        return dfs(0, half);
    }
}
