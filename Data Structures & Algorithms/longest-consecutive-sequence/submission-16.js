class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Solution 1: sort and iterate
        // if(nums.length == 0) return 0;

        // const sortedNums = nums.sort((a, b) => a - b );
        // let longest = 1;
        // let streak = 1;
        // let current;
        // for(let i = 0 ; i < sortedNums.length - 1; i++){
        //     current = sortedNums[i];          
            
        //     if(current == sortedNums[i+1]) continue;
        //     if(current + 1 == sortedNums[i+1]) {
        //         streak ++;
        //     } else {
        //         streak = 1; //reset
        //     }
        //     longest = Math.max(streak,longest);
        // }
        // return longest;

        // Solution 2: use Set to dedupe and find if num+1 exsit
        if(nums.length == 0) return 0;

        const numsSet = new Set(nums);
        let longest = 1;
        for (let num of numsSet) {
            if (!numsSet.has(num - 1)){
                // only handel those could be the start of a sequence
                // to save time
                let streak = 1;
                for (let i = 1; i < numsSet.size ; i++) {
                    if(numsSet.has(num + i)) {
                        streak ++;
                    } else {
                        streak = 1; //reset
                        break;
                    } 
                    console.log("streak", streak);
                    longest = Math.max(longest, streak);
                }
            }
        }
        return longest;
    }
}
