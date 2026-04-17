class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const countMap = {};
        for(const num of nums) {
            countMap[num] = (countMap[num] || 0) + 1;
        } 
        
        const countArray = Object.entries(countMap).map(([num,freq]) => [num, freq]);
        countArray.sort((a,b) => b[1] - a[1]);

        return countArray.slice(0, k).map(([num,freq])=> num)

    }
}
