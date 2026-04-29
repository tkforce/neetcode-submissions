class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        let l = 0;
        let r = nums.length - 1;
        
        while( l < r ) {
            let m = l + Math.floor((r - l) / 2);
            
            if(nums[m] > nums[r]) {
                l = m + 1; // 排除已經確定比較大的m，才不會在l = 0, r = 1時造成無限迴圈
            } else {
                r = m;
            }
        }
        return nums[l];

    }
}
