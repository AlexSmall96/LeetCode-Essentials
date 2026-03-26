/** Sliding window with set
 * Time O(n), Space O(n)
 */
export function lengthOfLongestSubstring(s: string): number {
    const n = s.length
    let left = 0
    let longestWindow = 0

    let windowSet = new Set()

    for (let right=0; right<n; right++){
        const character = s[right]
        let invalid = windowSet.has(character)
        // Shrink the window from left until it becomes valid again
        while (invalid){
            windowSet.delete(s[left])
            left++
            invalid = windowSet.has(character)
        }
        // Expand window from right and update longest window found so far
        windowSet.add(character)
        longestWindow = Math.max(longestWindow, right - left + 1)
    }

    return longestWindow    
}