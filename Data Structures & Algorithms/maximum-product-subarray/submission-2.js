class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // brute-force: 用兩個迴圈取得所有subarray的排列組合，取最小的
        let max = -Infinity;
        for(let i = 0 ; i < nums.length ; i++) {
            let temp = 1;  
            for(let j = i ; j < nums.length ; j++) {
                //for(let c = i ; c <= j ; c ++) {
                temp *= nums[j];
                //}
                max = Math.max(max, temp);
            }
        }
        return max;
    }
}
