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
        if (lists.length === 0) return null;

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
        mergedList.next = list1 ? list1 : list2;
        return dummy.next;
    }

    // 🚀 分治法核心邏輯
    while (lists.length > 1) {
        let mergedLists = []; // 用來裝這一輪合併完的結果
        
        // 每次跳兩格，兩兩一組進行合併
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            // 如果串列數量是奇數，最後一個會沒有配對對象，就給它 null
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null; 
            
            mergedLists.push(mergeTwoList(l1, l2));
        }
        // 把 lists 更新為這輪合併完的陣列，進入下一輪
        lists = mergedLists; 
    }
    
    // 最後剩下的那唯一一個串列，就是終極合併結果
    return lists[0];
    }
}
