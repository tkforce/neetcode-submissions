/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        
        const mergeTwoList = (list1, list2) => {
            let dummy = {val: 0, next: null};
            let mergedList = dummy;
            while(list1 && list2) {
                if(list1.val < list2.val){
                    mergedList.next = list1;
                    list1 = list1.next;
                } else {
                    mergedList.next = list2;
                    list2 = list2.next;
                }
                mergedList = mergedList.next;       
            }
            if(list1){
                mergedList.next = list1;
            } else {
                mergedList.next = list2;
            }
            return dummy.next;
        }

        if(lists.length == 0) return null;
        if(lists.length == 1) return lists[0];

        let mergedList = lists[0];
        for(let i = 1; i < lists.length; i++){       
            mergedList = mergeTwoList(mergedList, lists[i]);
        }
        
        return  mergedList;// lists[lists.length - 1]; 
        
    }
}
