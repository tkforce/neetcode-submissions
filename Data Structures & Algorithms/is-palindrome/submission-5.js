class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) l++;
            while (r > l && !this.isAlphanumeric(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
        return true;

        // const cleanStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        // const reversedStr = cleanStr.split('').reverse().join('');
        
        // return cleanStr == reversedStr
    }

    isAlphanumeric(char) {
        return (char >= 'a' && char <= 'z') || 
               (char >= 'A' && char <= 'Z') || 
               (char >= '0' && char <= '9');
    }
}
