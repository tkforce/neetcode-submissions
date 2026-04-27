class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       if (t === "") return "";

        // 記錄 t 需要的字元與數量
        const countT = {};
        const window = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;

        // 記錄最佳解：[左右邊界, 最小長度]
        let res = [-1, -1];
        let resLen = Infinity;
        
        let l = 0;

        // r 是右指標，不斷向右擴張
        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            // 如果這個字元是我們需要的，而且數量剛好達標了，have 就 + 1
            if (countT[c] && window[c] === countT[c]) {
                have += 1;
            }

            // 當視窗已經包含所有 t 的字元時，嘗試縮小它
            while (have === need) {
                // 1. 更新目前找到的最短視窗
                if ((r - l + 1) < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }

                // 2. 嘗試把左邊界 (l) 往右移來縮小視窗
                let leftChar = s[l];
                window[leftChar] -= 1; // 把左邊字元移出視窗

                // 如果移出去的字元是我們需要的，而且導致數量不夠了，have 就要 - 1
                if (countT[leftChar] && window[leftChar] < countT[leftChar]) {
                    have -= 1;
                }
                
                l += 1; // 左指標往右移
            }
        }

        // 提取結果
        let [left, right] = res;
        return resLen !== Infinity ? s.slice(left, right + 1) : "";
    }
}
