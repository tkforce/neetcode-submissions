class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 0) return 0;
        
        let currentMax = nums[0];
        let currentMin = nums[0];
        let result = nums[0];

        for(let i = 1 ; i < nums.length ; i ++) {
            
            let tempMax = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);
            currentMin = Math.min(nums[i], nums[i] * currentMax, nums[i] * currentMin);
            currentMax = tempMax;
            result = Math.max(result, currentMax);
        }

        return result;
    }   
}
