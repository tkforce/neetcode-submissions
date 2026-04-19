class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // need to encode both the size and value into the encoded string so it can be decoded
        // but we can't merge the size like this "3abc2vb" which can easliy get confused when there are int in the string
        // so we need to seperate the size part and the string part
        // step1: create a size list that record the length of each string
        // step2: concate all the strings into one string
        // step3: append the sizelist in the front with a seperator '#'
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
