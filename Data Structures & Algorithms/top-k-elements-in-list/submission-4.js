class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = {};

        for(let num of nums){
            countMap[num] = (countMap[num] || 0) + 1;
        }
        const countArray = Object.entries(countMap);
        countArray.sort((a,b) => b[1] - a[1]);
        
        return countArray.slice(0, k).map( ([num, freq]) => num );
    }
}
