class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let n = 0; n < nums.length; n++) {
            for(let m = n+1; m < nums.length; m++) {
                if(target == nums[n] + nums[m]) {
                    return (nums[n] > nums[m])? [m,n] : [n,m] 
                }
            }
        }
    }
}
