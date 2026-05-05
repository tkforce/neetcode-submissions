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
        // 最直覺: reverse -> remove  -> reverse
        // reverse
        let prev = null;
        let curr = head;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        head = prev;
        // remove
        
        
        let idx = 1;
        curr = head;
        if (n === 1) {
            head = head.next;
        } else {
            while(curr) {          
                if(idx == n - 1){
                    let target = curr.next;
                    if(target){
                        curr.next = target.next;
                        target.next = null;
                    }
                    break;
                } 
                curr = curr.next;
                idx ++;
            }
        }

        // revere again
        prev = null;
        curr = head;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        return prev;
    }
}
