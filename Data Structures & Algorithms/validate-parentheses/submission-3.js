class Solution {
   

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if((s.length % 2) != 0 ) return false;
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };
        for(let i = 0 ; i < s.length ; i++){
            if(['[', '{', '('].includes(s[i])) {
                console.log("push",s[i])
                stack.push(s[i]);
            } else {
                let open = stack.pop();
                let close = '';

                if(open !== closeToOpen[s[i]]) return false;
            }
        }
        return stack.length === 0;
    }


}
