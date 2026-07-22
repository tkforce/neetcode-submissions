class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // {"act": ["act","cat"],
        //  ""
        // }
        const resultMap = new Map();
        for(let str of strs) {
            let sortedStr = [...str].sort().join(""); 
            if(!resultMap.has(sortedStr)){
                resultMap.set(sortedStr, [str]);
            } else {
                resultMap.get(sortedStr).push(str);
            }           
        }

        return Array.from(resultMap.values());
        
    }
}
