class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // Solution 1: brute force
        // let max = 0;
        // for(let i = 0 ; i < heights.length; i++) {
        //     for(let j = i + 1 ; j < heights.length ; j++) {
        //         // console.log("i,j,min", i, j, (j - i),Math.min(heights[j], heights[i]))
        //         const curr = (j - i) * Math.min(heights[j], heights[i]);
        //         console.log("curr",curr)
        //         max = Math.max(curr, max);
        //     }
        // }
        // return max;

        // Solution 2: two pointers
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        while(left < right){
            const curr = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(curr, max);
            if(heights[left] > heights[right]){
                right --;
            } else if(heights[left] < heights[right]){
                left ++;
            } else {
                right --; // 
            }
        }
        return max;
    }
}
