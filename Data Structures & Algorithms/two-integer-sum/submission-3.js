class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();
        for(let n = 0 ; n < nums.length ; n++) {
            let diff = target - nums[n];
            if(prevMap.has(diff)) {
                return (diff > nums[n]) ? [n, prevMap.get(diff)] : [prevMap.get(diff), n];
            } 
            prevMap.set(nums[n], n)
        }
    }
}
