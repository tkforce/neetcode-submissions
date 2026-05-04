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
     * @return {void}
     */
    reorderList(head) {
        // 1. reverse the second half using two pointers

        let slow = head;
        let fast = head.next; // 這樣無論是奇數或偶數都可以停在正確的中點
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        

        let list1 = head;
        let list2 = slow.next;
        slow.next = null; // break into two lists

        // 2. reverse list2
        let prev = null;
        while(list2){
            let temp = list2.next;
            list2.next = prev;
            prev = list2;
            list2 = temp;
        }
        list2 = prev; // re point to the head of list 2

        // 3. merge with the first half
        // now merge head - slow with slow+1 - end
        
        while(list1 && list2){
            let temp1 = list1.next;
            let temp2 = list2.next;

            list1.next = list2;
            list2.next = temp1;

            list1 = temp1;
            list2 = temp2;
            
        }
        return 

    }
}
