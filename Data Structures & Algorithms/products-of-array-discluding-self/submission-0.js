class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length == 0 ) return [];
        
        let allProduct = 1;
        const zeroIdxList = []
        for(const [idx, num] of nums.entries()){
            allProduct = (num == 0)? allProduct * 1 : allProduct * num;
            if(num == 0) zeroIdxList.push(idx);
        }
        console.log("zeroIdxList",zeroIdxList)
        const result = [];
        for(const [idx, num] of nums.entries()){  
            console.log("zeroIdxList.filter",zeroIdxList.filter(zeroIdx => zeroIdx != idx).length)
            if(zeroIdxList.filter(zeroIdx => zeroIdx != idx).length > 0){
                result.push(0);
            } else {
                result.push(allProduct/(num || 1));
            }       
        }
       
        return result;
    }
}
