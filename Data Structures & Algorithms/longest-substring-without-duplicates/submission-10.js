class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 0) return 0;
        
        let longest = 1;
        let l = 0;
        let r = 1;
        while( r < s.length ){
            let sub = s.substring(l,r);
            if(!sub.includes(s[r])){
                r++;
                longest = Math.max(longest, r-l);
            } else {
                l++;
            }
        }
        return longest;
    }
}
