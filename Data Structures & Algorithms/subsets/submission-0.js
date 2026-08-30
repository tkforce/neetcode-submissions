class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // think of it as a decision tree where each decision comes from choosing one of the remaining num
        const result = [];
        const path = []; // the path taken
        
        const dfs = (start) => {
            result.push([...path]);
            for(let i = start ; i < nums.length ; i ++) {
                path.push(nums[i]);
                dfs(i + 1);
                path.pop();    
            }
        }

        dfs(0);
        return result;
    }
}
