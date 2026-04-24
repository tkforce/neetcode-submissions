class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 0) return 0;
        
        const visitedSet = new Set();
        let maxLength = 1;
        let l = 0;

        for(let r = 0 ; r < s.length; r++){
           
            while(visitedSet.has(s[r])) {
                visitedSet.delete(s[l]);
                l ++;
            }
           
            visitedSet.add(s[r]);
            maxLength = Math.max(maxLength, visitedSet.size);
        }
        return maxLength;
    }
}
