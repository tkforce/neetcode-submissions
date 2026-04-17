class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // solution 1: sort it first and look for next duplicate
        // time: n log n
        // space: n
        // // sort it first 
        // const sortedNums = nums.sort();
        // // loop from the start and stop when the next is the same
        // //sortedNums.forEach( num => )
        // let idx = 0;
        // while(idx < sortedNums.length) {
        //     if(sortedNums[idx] == sortedNums[idx+1])
        //         return true
        //     idx ++;
        // }
        // return false

        // Solution 2: Use the feature of "Set" to dedupe
         const set = new Set();
         let idx = 0
         while(idx < nums.length) {
            if(!set.has(nums[idx]))
                set.add(nums[idx])
            else return true
            
            idx ++;
         }
         return false
    }
}
