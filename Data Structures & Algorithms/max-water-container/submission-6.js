class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let r = heights.length - 1;
        let l = 0;
        while( l < r ) {
            let curr = Math.min(heights[l], heights[r]) * Math.abs(l - r);
            max = Math.max(max, curr);
            if(heights[l] > heights[r]) {
                r --;
            } else {
                l ++
            }
        }
        return max;   
    }
}
