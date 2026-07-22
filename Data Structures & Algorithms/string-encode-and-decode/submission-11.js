class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
  encode(strs) {
        if(!strs || strs.length == 0) return ''
        
        const sizesList = []
        let result = ''
        for(const str of strs){
            sizesList.push(str.length);
            result = result + str;
        }
        result = sizesList.join(',') + '#' + result;
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length == 0) return [];
        
        const sizesList = str.slice(0, str.indexOf('#')).split(',');
        const resultString = str.slice(str.indexOf('#') + 1);
        const resultList = [];
        let idx = 0;
        for(const size of sizesList) {
            const num = Number(size)
            const str = resultString.slice(idx, idx + num)
            resultList.push(str);
            idx = idx + num;
        }
        return resultList;
    }
}
