class MedianFinder {
    constructor() {
        this.data = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.data.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.data.sort((a,b) => a - b);
        let n = this.data.length;
        if(n % 2 === 0){ // even
            return (this.data[n/2] + this.data[n/2 - 1]) / 2;
        } else { // odd
            return this.data[Math.floor(n/2)];
        }
    }
}
