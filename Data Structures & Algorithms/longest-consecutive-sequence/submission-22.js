class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        if(nums.length == 0) return 0;

        const numSet = new Set(nums);
        let longest = 0;
        for(let num of numSet) {
            // if(!numSet.has(num - 1)) {
                // only handle those could be the start of a sequence
                let curr = num
                let streak = 1;
                while(numSet.has(curr + 1)) {
                    streak ++;
                    curr ++;
                }
                longest = Math.max(longest, streak);
            // }
        }
        return longest;
    }
}
