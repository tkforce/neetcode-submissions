class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // prerequisites整個組起來就是一個directed graph
        // 能修完就代表這個graph是沒有cycle的/不能修完代表有cycle
        // 1. 建構graph -> 建立一個adj map
        // 2. 走訪這個graph -> 透過一個visited map來偵測cycle，當有cycle就return

        // building adj map
        const adjMap = new Map();
        for(let i = 0 ; i < numCourses; i ++) {
            adjMap.set(i, []);
        }
        for(let [target, prerequisite] of prerequisites) {
            adjMap.get(target).push(prerequisite);
        }
        // adjMap: {0:[1], 1:[0]}
        const visitedSet = new Set();
        
        const dfs = (c) => {
            if(visitedSet.has(c)) return false; // cycle detected
            if(adjMap.get(c).length === 0) return true; // no pre-course -> valid
            
            visitedSet.add(c);
            const adj = adjMap.get(c);
            for(let pre of adj) {
                if(!dfs(pre)) return false;
            }
            visitedSet.delete(c);
            adjMap.set(c, []);

            return true;
        }

        // start with each course
        for(let i = 0 ; i < numCourses ; i ++) {
            if(!dfs(i)) return false
        }
        return true;
    }
}
