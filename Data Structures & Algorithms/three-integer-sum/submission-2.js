class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Solution 1: [bruce force] using three pointers to iterate all possilbiity
        const resultMap = {};
        for(let a = 0 ; a < nums.length; a++) {
            for(let b = a + 1 ; b < nums.length; b++) {
                for(let c = b + 1 ; c < nums.length ; c++) {
                    if(nums[a] + nums[b] + nums[c] == 0) {
                        let triplet = [nums[a], nums[b], nums[c]].sort();
                        let key = triplet.join('');
                        if(!resultMap[key]) resultMap[key] = triplet; 
                    } 
                }
            }
        }   
        return Object.values(resultMap);
        
    }
}
