class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const result = [];
        const path = [];
        const used  = new Array(nums.length).fill(false);

        const dfs = () => {
            if(path.length === nums.length) {
                result.push([...path]);
                return;
            }
            const seen = new Set();
            for(let i = 0 ; i < nums.length ; i ++) {
                if(used[i] || seen.has(nums[i])) continue;
                seen.add(nums[i]);
                path.push(nums[i]);
                used[i] = true;
                dfs();
                path.pop();
                used[i] = false;
            }
        }
        dfs();
        return result;
        
    }
}
