class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // sort it first 
        const sortedNums = nums.sort();
        // loop from the start and stop when the next is the same
        //sortedNums.forEach( num => )
        let idx = 0;
        while(idx < sortedNums.length) {
            if(nums[idx] == nums[idx+1])
                return true
            idx ++;
        }
        return false
    }
}
