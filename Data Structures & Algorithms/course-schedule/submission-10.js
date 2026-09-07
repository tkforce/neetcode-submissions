class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // use FS Topological Sort instead
        // 1. use indegree[] to track the indegree of each course
        // 2. build adjMap 
        // 3. add those course with indegress 0 into the queue
        // 4. start BFS with this queue
    
        const indegree = new Array(numCourses).fill(0);
        const adjMap = new Map();
        
        for(let i = 0 ; i < numCourses; i ++) {
            adjMap.set(i,[]);
        }
        for(let [c, pre] of prerequisites) {
            adjMap.get(pre).push(c);
            indegree[c] ++;
        }

        const queue = [];
        for(let i = 0 ; i < indegree.length ; i ++) {
            if(indegree[i] === 0) queue.push(i);
        }

        let courseCount = 0;
        while(queue.length > 0) {
            let currCourse = queue.shift();
            courseCount ++;
            let nextCourses = adjMap.get(currCourse);
            for(let next of nextCourses){
                if(indegree[next]) indegree[next] --;
                
                if(indegree[next] === 0) queue.push(next);
            }
            
        }
        return courseCount === numCourses;
        
    }
}
