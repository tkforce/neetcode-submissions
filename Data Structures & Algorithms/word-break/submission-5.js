class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // recursive + memo : 走過wordDisct裡面所有單字的combination看有沒有符合
        const memo = {};
        const dfs = (target) => {
            if(target.length === 0) return true;
            if(!wordDict.some( word => target.includes(word))) return false;
            if(target in memo) return memo[target];
            //針對目前的target，每一個有在target裡的word，分別往下走，然後任一條是true就是true
            for(let word of wordDict) {
                if(target.startsWith(word)){
                    if(dfs(target.slice(word.length))) return true;
                } 
            }
            memo[target] = false;
            return false;
        }

        return dfs(s);
    }
}
