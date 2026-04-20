class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Solution 1: sort and iterate
        if(nums.length == 0) return 0;

        const sortedNums = nums.sort((a, b) => a - b );
        let longest = 1;
        let streak = 1;
        let current;
        console.log("sortedNums",sortedNums)
        for(let i = 0 ; i < sortedNums.length - 1; i++){
            current = sortedNums[i];          
            
            if(current == sortedNums[i+1]) continue;
            if(current + 1 == sortedNums[i+1]) {
                streak ++;
            } else {
                streak = 1; //reset
            }
            console.log("streak",streak)
            longest = Math.max(streak,longest);
        }
        return longest;
    }
}
