class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [...s.replace(/[^a-z0-9]/gi, '').toLowerCase()]

        let foward = 0;
        let backward = arr.length - 1;
        for(let i = 0; i < arr.length; i++) {
            if(arr[foward] != arr[backward]) {
                return false
            } 
            foward += 1;
            backward -= 1;
        }
        return true;
    }
}
