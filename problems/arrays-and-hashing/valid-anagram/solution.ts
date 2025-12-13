// Solution 1: Sorted string comparison O(nlog(n))
// Soltion 2: Two pass hash map with frequency counts O(n)

/** Solution 1: Sorted string comparison
 *  Time: O(nlog(n)), Space: O(n)
 */
export var inefficientSol = function(s:string, t:string) {
    const sortedS = s.split("").sort().join("")
    const sortedT = t.split("").sort().join("")
    return sortedS === sortedT
}


/** Solution 2: Hash map with frequency counts
 *  Time: O(n), Space: O(1)
 */
export var isAnagram = function(s:string, t:string) {
    
    // Anagrams must be same length
    if (s.length !== t.length){
        return false
    }

    const counts:{[char: string]: number} = {}

    for (let char of s){
        if (char in counts){
            counts[char]++
        } else {
            counts[char] = 1
        }
    }

    for (let char of t){
        // Not anagram if char in t but not in s
        if (!(char in counts)){
            return false
        } 
        counts[char]--
        // If count gets below 0 -> character occurs more in t than s -> not anagram
        if (counts[char] < 0){
            return false
        }
    }

    return true
    
};