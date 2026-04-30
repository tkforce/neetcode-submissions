class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] === target) return m;

        // 判斷左半邊是否為有序空間
        if (nums[l] <= nums[m]) {
            // 如果 target 在左半邊的有序範圍內
            if (target >= nums[l] && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } 
        // 否則，右半邊必定是有序空間
        else {
            // 如果 target 在右半邊的有序範圍內
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    return -1;
    }
}

