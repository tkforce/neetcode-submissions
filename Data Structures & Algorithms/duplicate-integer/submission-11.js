class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const numsSet = new Set(nums);
        if(numsSet.size !== nums.length) return true
        return false
    }
}
