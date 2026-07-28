class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // find the pivot point using binary search
        let l = 0;
        let r = nums.length - 1;
        
        while(l < r) {
            let mid = Math.floor((l + r) / 2) ;

            if(nums[mid] > nums[r]) {
                // pivot is on the right
                l = mid + 1;
            } else {
                // pivot is on the left
                r = mid;
            }
            mid = (l + r) % 2 + 1;

        }
        return nums[l]
    }
}
