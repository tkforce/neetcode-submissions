class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // group by str lenght -> first layer 
        // sort each str before adding to each group

        // {"act":["act","act(cat)"],
        //  "pots":["pots","pots(stop)"]   
        // }
        const groupedBySortedStr = {};
        strs.forEach( str => {
                const sortedStr = str.split('').sort().join('');
                if(!groupedBySortedStr[sortedStr]) {
                    groupedBySortedStr[sortedStr] = []   
                }
                groupedBySortedStr[sortedStr].push(str)
            })
        return Object.values(groupedBySortedStr);
    }
}
