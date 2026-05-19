class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(!strs.length) return strs
        const map = {}
        const result = []
        for(var str of strs){
            const hashSet = new Array(26).fill(0)
            for(var c of str){
                hashSet[c.charCodeAt(0)-97]++;
            }
            if(!map[hashSet]){ map[hashSet] = [str] }
            else { map[hashSet].push(str) }
        }
        for(var val in map){
            result.push(map[val])
        }
        return result
    }
}
