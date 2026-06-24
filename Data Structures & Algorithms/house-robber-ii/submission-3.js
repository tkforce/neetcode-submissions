class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        
        if(nums.length === 1) return nums[0];
        if(nums.length === 2) return Math.max(nums[0], nums[1])
        // 建立一個輔助函式來處理「直線」的遞迴搶劫
        // 傳入 start 和 end 來限制這條直線的範圍
        const robRange = (start, end) => {
            
            let rob1 = nums[start];
            let rob2 = Math.max(nums[start], nums[start + 1]);
            
            for(let i = start + 2 ; i <= end; i++) {
                const newRob = Math.max(nums[i] + rob1, rob2);
                rob1 = rob2;
                rob2 = newRob; 
            }

            return rob2;
        }

        return Math.max(robRange(0, nums.length - 2),
                        robRange(1, nums.length - 1));

    }
}
