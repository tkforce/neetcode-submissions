class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const path = [];
        const dfs = (idx, remain) => {
            // stop condition:
            // success: found a valide combination
            if(remain === 0) {
                result.push([...path]);
                return;
            }  
            // fail: negative or used all nums
            if(idx >= nums.length || remain < 0) return;

            // try each options at a time and backtrack if it fail
            for(let i = idx ; i < nums.length; i++ ){
                path.push(nums[i]);
                dfs(i, remain - nums[i], path);
                path.pop();
            }
        }

        dfs(0, target, []);
        return result;
    }
}
