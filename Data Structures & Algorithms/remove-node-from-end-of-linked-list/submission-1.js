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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = {val:0, next:head};
        
        let left = dummy;
        let right = head;
    
        while(n > 0 && right){
            right = right.next;
            n --;
        }

        while(right){
            right = right.next;
            left = left.next;
        }

        left.next = left.next.next;

        return dummy.next; 

    }
}
