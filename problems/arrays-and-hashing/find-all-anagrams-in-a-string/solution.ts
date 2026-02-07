/** Solution 1: Sort and compare substrings
 * Time: O(n*m*log(m)), Space: O(m)
 * n = length of s, m = length of p
 */
export function sortAndCompareSubStrings(s: string, p:string) {
    const sortedP = p.split("").sort().join("")
    const indices = []
    const sLength = s.length
    const pLength = p.length
    for (let i=0; i<sLength - pLength + 1; i++){
        const sorted = s.slice(i,i+pLength).split("").sort().join("")
        if (sorted === sortedP){
            indices.push(i)
        }
    }

    return indices
}

/** Solution 2: Sliding window frequency counter
 * Time: O(n), Space: O(m)
 * n = length of s, m = length of p
 */
export function slidingWindowFrequencies(s: string, p:string) {
    
    const n = p.length
    const m = s.length
    
    if (n > m){
        return []
    }

    let freq:{[key: string]: number} = {}

    for (let char of p){
        if (char in freq){
            freq[char]++
        } else {
            freq[char] = 1
        }
    }

    let count = 0
    let indices = []

    for (let i=0; i<m; i++){
        const end = s[i]
        const start = s[i-n]
        if (!(end in freq)){
            freq[end] = 0
        }
        if (i >= n){
            const prev = freq[start]
            // Char at index i-n no longer uses up a letter from p
            freq[start]++
            // If new value is 1 closer to 0, increment count, otherwise decrement it
            const improvement = Math.abs(freq[start]) === Math.abs(prev) -1
            count = improvement ? count + 1 : count - 1
        }
        const prev = freq[end]
        // Char at current index uses up a letter from p
        freq[end]--
        // If new value is 1 closer to 0, increment count, otherwise decrement it
        const improvement = Math.abs(freq[end]) === Math.abs(prev) - 1
        count = improvement? count + 1 : count - 1
        if (count === n){
            indices.push(i-n+1)
        }
    }

    return indices

}