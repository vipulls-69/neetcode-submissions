class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (k == nums.length){
            return nums
        }

        const map = {}

        for(const num of nums){
            if(!map[num]) map[num]=1
            else map[num]++
        }

        const heap = new PriorityQueue((a,b)=>map[a]-map[b]);

        for(const val in map){
            heap.enqueue(val)
            if(heap.size() > k) heap.dequeue()
        }

        const res = [];
        while (heap.size() > 0) {
            res.push(heap.dequeue());
        }
        return res;
    }
}
