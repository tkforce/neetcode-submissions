class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Solution 1: [bruce force] using three pointers to iterate all possilbiity
        // const resultMap = {};
        // for(let a = 0 ; a < nums.length; a++) {
        //     for(let b = a + 1 ; b < nums.length; b++) {
        //         for(let c = b + 1 ; c < nums.length ; c++) {
        //             if(nums[a] + nums[b] + nums[c] == 0) {
        //                 let triplet = [nums[a], nums[b], nums[c]].sort();
        //                 let key = triplet.join('');
        //                 if(!resultMap[key]) resultMap[key] = triplet; 
        //             } 
        //         }
        //     }
        // }   
        // return Object.values(resultMap);
        /* Solution 2 thinking:
        The bottleneck is the triple loop that cause O(n3), so this is where we can optimize
        - The reason we need to triverse every possible combination is because we don't know how the num is arragned
        - so if we can sorted it, it give us some edge (eg. numbers are incremental and easier to see duplicates)
        - Based on this edge, we can fix one number, and use two pointers (right and left) to find the triple faster 
        */
        const result = [];
        const sortedNums = nums.sort((a,b) => a - b); // sorted
        console.log("sortedNums", sortedNums)
        for(let i = 0 ; i < sortedNums.length; i++) {
            // Skip the same element to avoid duplicate triplets
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            
            let l = i+1;
            let r = sortedNums.length - 1;
            while(l < r) {
                let sum = sortedNums[i] + sortedNums[l] + sortedNums[r];
                if(sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    result.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
                    r--;
                    l++;
                    // Skip duplicate values for l and r
                    while (l < r && nums[l] === nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;
                }  
            }
        }
        return result;
    }
}
