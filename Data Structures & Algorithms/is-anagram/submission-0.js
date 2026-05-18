class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charCounter = new Array(26).fill(0)
        
        if(s.length != t.length) return false;

        for(var i=0; i< s.length; i++){
            charCounter[s[i].charCodeAt(0) - 97]++;
            charCounter[t[i].charCodeAt(0) - 97]--;
        }

        for(var i=0; i< 26; i++){
            if(charCounter[i]!=0) return false;
        }
        return true;
    }

}
