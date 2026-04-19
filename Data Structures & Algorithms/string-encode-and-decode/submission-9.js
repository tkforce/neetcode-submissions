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
        console.log("encode result", result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("decode str length", str.length);
        if(str.length == 0) return [];
        
        const sizesList = str.slice(0, str.indexOf('#')).split(',');
        const resultString = str.slice(str.indexOf('#') + 1);
        console.log("sizesList,resultString",sizesList,resultString);
        const resultList = [];
        let idx = 0;
        for(const size of sizesList) {
            const num = Number(size)
            console.log("@", idx, idx + num);
            const str = resultString.slice(idx, idx + num)
            console.log("push",str)
            resultList.push(str);
            idx = idx + num;
        }
        console.log("decoded resultList",resultList)
        return resultList;
    }
}
