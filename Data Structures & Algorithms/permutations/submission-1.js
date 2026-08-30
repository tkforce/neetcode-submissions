class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        const result = [];
        const path = [];
        const used = new Array(nums.length).fill(false);

        const dfs = () => {
            // stop condition: path reach the end
            if(path.length === nums.length) {
                result.push([...path]);
                return;
            }

            for(let i = 0 ; i < nums.length; i ++) {
                if(used[i]) continue; // chose another option if used
                path.push(nums[i]);
                used[i] = true;
                dfs();
                used[i] = false; // backtrack
                path.pop();
            }                     
        }

        dfs();
        return result;
    }
}
