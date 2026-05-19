class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = strs.map(str=>str.split("").sort().join(""))
        const map = {}
        const result = []
        for(var i=0; i<strs.length; i++){
            if(map[sorted[i]]){
                map[sorted[i]].push(strs[i])
            }
            else{
                map[sorted[i]]=[strs[i]]
            }
        }
        
        for(var key in map){
            result.push(map[key])
        }
        
        return result
    }
}
