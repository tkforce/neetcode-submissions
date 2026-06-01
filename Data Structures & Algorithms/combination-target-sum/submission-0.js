class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // [2,5,6,9]
        const result = [];

        const dfs = (i, remain, currentCombination) => {
            
            // stop conditions:
            // if remain is 0 -> found valide combination! so add to the result array
            if(remain === 0) {
                result.push([...currentCombination]);
                return;
            }
            // if remain < 0 or reached the end of the nums -> need to go back
            if(remain < 0 || i === nums.length) {
                return;
            }
            
            // decision tree:
            // option 1: chose the same num
            currentCombination.push(nums[i]);
            dfs(i, remain - nums[i], currentCombination);
            
            // backtrack
            currentCombination.pop()

            // option 2: chose the next num
            // dfs(i + 1, remain - nums[])
            dfs(i + 1, remain, currentCombination);

        }

        dfs(0, target, []);

        return result;
        
    }
}
