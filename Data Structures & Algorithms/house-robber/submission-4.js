class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // ⚠️ 必須提前處理邊界情況 (防呆)
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        // 你的邏輯：明確定義 dp[0] 和 dp[1]
        let rob1 = nums[0]; 
        let rob2 = Math.max(nums[0], nums[1]);

        // 從第三間房子開始跑
        for (let i = 2; i < nums.length; i++) {
            let temp = Math.max(nums[i] + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
