class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const dfs = (idx, remain, currentCombo) => {
            // stop condition:
            // success: found a valide combination
            if(remain === 0) {
                result.push([...currentCombo]);
                return;
            }  
            // fail: negative or used all nums
            if(idx >= nums.length || remain < 0) return;

            // try each options at a time and backtrack if it fail
            for(let i = idx ; i < nums.length; i++ ){
                currentCombo.push(nums[i]);
                dfs(i, remain - nums[i], currentCombo);
                currentCombo.pop();
            }
            
        }

        dfs(0, target, []);
        return result;
    }
}
