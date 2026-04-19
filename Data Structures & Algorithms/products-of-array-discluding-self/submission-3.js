class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let totalProduct = 1;
    let zeroCount = 0;

    // 第一遍：計算非零乘積與 0 的數量 (O(n))
    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            totalProduct *= num;
        }
    }

    const result = [];
    // 第二遍：根據情況填入結果 (O(n))
    for (let num of nums) {
        if (zeroCount > 1) {
            // 超過一個 0，所有人都是 0
            result.push(0);
        } else if (zeroCount === 1) {
            // 只有一個 0，只有 0 的位置有值
            result.push(num === 0 ? totalProduct : 0);
        } else {
            // 沒有 0，直接除法
            result.push(totalProduct / num);
        }
    }

    return result;
    }
}
