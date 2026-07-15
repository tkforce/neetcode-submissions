class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {

        const n = matrix.length;

        // 步驟 1：上下翻轉 (Vertical Reverse)
        // 在 JavaScript 中，直接對 2D 陣列 reverse() 會剛好把 row 的順序上下顛倒
        matrix.reverse();

        // 步驟 2：對角線轉置 (Transpose)
        // 遍歷對角線右上方的所有元素，並跟左下方的對稱元素互換
        for (let i = 0; i < n; i++) {
            // 注意！j 從 i + 1 開始，這樣才不會把已經互換過的元素又換回來
            for (let j = i + 1; j < n; j++) {
                // 交換 [i][j] 和 [j][i]
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
}
