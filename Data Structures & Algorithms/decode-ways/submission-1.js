class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = new Map();
        const dfs = (i) => {
            let result = 0;
            if(memo.has(i)) return memo.get(i);
            if(i === s.length) return 1;
            if(s[i] === '0') return 0;
            // 針對每一個i都有兩種選擇
            // opt 1: 選一位數 -> 他的所有可能就是i + 1開始走到底
            let oneDigiResult = dfs(i + 1);  
            // opt 2: 選兩位數 -> 他的所有可能就是i + 2開始走到底
            let twoDigiResult = 0;
            if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6'))) {
                twoDigiResult = dfs(i + 2);
            }
            result = oneDigiResult + twoDigiResult;
            memo.set(i, result)
            return result;
        }

        return dfs(0);
    }
}
