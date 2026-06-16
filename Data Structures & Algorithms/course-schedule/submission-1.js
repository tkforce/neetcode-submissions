class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Thinking:
        // 如果把prerequisites看成是一個directed graph，沒辦法上完所有課的意思就是這個graph有cycle
        // 因此如果在走訪這個directed graph的過程中發現任一個cycle，就是false，否則就是true
        // 1.該怎麼建構graph -> 把prerequisites轉成Adjacency List(是一種高效率描述graph的資料結構)
        // 2.該怎麼偵測有cycle -> 透過一個visitedSet來記錄走過的路，當遇到已經走過的就代表有cycle

        // 1. 建構adjList
        const adjMap = new Map();
        for(let i = 0 ; i < numCourses ; i ++) {
            adjMap.set(i, []);
        }
        for(let [c, pre] of prerequisites){
            adjMap.get(c).push(pre);
        }
        
        // 偵測cycle用
        const visitedSet = new Set();
        
        // 2. 建立DFS走訪機制
        const dfs = (course) => {
            // base case: already visited -> cycle
            if(visitedSet.has(course)) return false;
            
            // base case: no pre-course (no adjacent) -> valid
            if(adjMap.get(course).length === 0) return true;

            // keep traversing
            visitedSet.add(course);
            
            // 遞迴檢查每個先修課 -> 任一個是false(有cycle)就是false
            for(const pre of adjMap.get(course)){
                if(!dfs(pre)) return false;
            }
            // 回朔
            visitedSet.delete(course);
            
            return true;
        }


        // 3. 因為graph可能會不連通，所以必須把每一堂課都當作起始點走走看，任一個作為起始點是false，結果就是false
        for(let c = 0 ; c < numCourses ; c ++) {
            if(!dfs(c)) return false;
        }
        return true;
    }
}
