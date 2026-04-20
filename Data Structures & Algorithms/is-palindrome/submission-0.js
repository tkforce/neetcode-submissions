class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log("s",s.replace(/[^a-z0-9]/gi, '').toLowerCase());
        const arr = [...s.replace(/[^a-z0-9]/gi, '').toLowerCase()]
        console.log("s arr", arr);

        let foward = 0;
        let backward = arr.length - 1;
        for(let i = 0; i < arr.length; i++) {
            console.log("foward","backward",foward, backward);
            console.log("arr[foward]","arr[backward]",arr[foward], arr[backward]);
            if(arr[foward] != arr[backward]) {
                return false
            } 
            foward += 1;
            backward -= 1;
        }
        return true;
    }
}
