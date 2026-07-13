class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let lastStep = nums.length - 1;
        const memo = new Array(nums.length).fill(null);
        const jump = (cur) => {

            if(cur >= lastStep) return true;
            if(memo[cur] !== null) return memo[cur];

            let maxJump = nums[cur];
            for( let j = 1 ; j <= maxJump ; j ++) {
                if(jump( cur + j )){
                    memo[cur + j] = true; 
                    return true;
                }               
            }
            memo[cur] = false
            return false;
        }

        return jump(0);
    }
}
