class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let lastStep = nums.length - 1;
        const jump = (cur) => {

            if(cur >= lastStep) return true;

            let maxJump = nums[cur];
            for( let j = 1 ; j <= maxJump ; j ++) {
                if(jump( cur + j)) return true;                
            }
            
            return false;
        }

        return jump(0);
    }
}
