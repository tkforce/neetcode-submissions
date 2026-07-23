class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        const reversed = cleanStr.split('').reverse().join('');

        return cleanStr === reversed;
    }
}
