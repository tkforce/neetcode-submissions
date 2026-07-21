class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // [2,3,1,5], target = 4
        // {
        //     2: 0,
        //     3: 1,
        //     1: 2,
        //     5: 3
        // }
        let map = new Map();
        // one pass
        for(let i = 0; i < nums.length ; i++) {
            
            let diff = target - nums[i];
            if(map.has(diff)) return [map.get(diff), i];
            
            map.set(nums[i], i);

        }
        // two pass
        // for(let i = 0 ; i < nums.length ; i++){
        //     let diff = target - nums[i];
        //     if(map.has(diff) && map.get(diff) !== i) return [map.get(diff), i];
        // }
        return [];
    }
}
