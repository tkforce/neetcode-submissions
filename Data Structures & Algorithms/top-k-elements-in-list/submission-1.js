class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // step1: We need to count the freq for each num, so
        // loop through each element and add to a map as [num:freq]
        /*
            {3:2, 2:4, 1:5}
        */
        // step2: We need to sort by freq, so we need to turn this map to array for sorting
        // [{3:2}, {2:4}, {1:5}]

        const countMap = {};
        for(const num of nums) {
            countMap[num] = (countMap[num] || 0) + 1;
        } 
        
        const countArray = Object.entries(countMap).map(([num,freq]) => [num, freq]);
        countArray.sort((a,b) => b[1] - a[1]);

        return countArray.slice(0, k).map(([num,freq])=> num)

    }
}
