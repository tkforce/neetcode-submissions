class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let reorderedS = [...s].sort().join();
       let reorderedT = [...t].sort().join();
        return (reorderedS === reorderedT) 
    }
}
