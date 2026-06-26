class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let result = 0;
        for(let i = 0 ; i < s.length ; i ++) {
            
            // odd length
            result += this.findPalindromic(i, i, s)

            // even length
            result += this.findPalindromic(i, i + 1, s)
        }
        return result
    }

    findPalindromic = (l, r, s) => {
        let count = 0
        while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            count ++;
            l --;
            r ++;
        }
        return count;
    }
}
