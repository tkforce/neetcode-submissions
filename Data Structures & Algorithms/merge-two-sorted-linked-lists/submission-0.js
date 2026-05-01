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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = { val: 0, next: null};
        let mergedList = dummy;

        while(list1 && list2) {
            if(list1.val < list2.val) {
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

        return dummy.next; // start after the first dummy node;
    
    }
}
