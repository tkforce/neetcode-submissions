class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // 把每一個index都當作中心往兩邊持續擴展，只要兩端的值相同就可以持續往外擴
        // 但是回文的中心點會有兩種情況: 奇數跟偶數
        // odd: 正中間 ex: aba
        // even: 兩個數字之間 ex: abba
        let resultLen = 0;
        let resultIdx = 0;

        for(let i = 0 ; i < s.length ; i++) {
            // for odd length
            let l = i;
            let r = i;
            while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                let currentLen = r - l + 1;
                if(currentLen > resultLen) {
                    resultLen = currentLen;
                    resultIdx = l;
                }
                
                l --;
                r ++;                
            }
            // for even length
            l = i;
            r = i + 1;
            while( l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                let currentLen = r - l + 1;
                if(currentLen > resultLen) {
                    resultLen = currentLen;
                    resultIdx = l;
                }

                l --;
                r ++
            }
        }

        return s.slice(resultIdx, resultIdx + resultLen);
    }
}
