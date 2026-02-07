/** 
 * Solution 1: Sort and compare consecutive elements
 * Time: O(nlog(n)), Space: O(n)
 */
export function sortAndCompare(nums: number[]) {
    const n = nums.length
    // Avoid mutating array
    const sorted = [...nums].sort()
    for (let i=0; i<n-1; i++){
        if (sorted[i] === sorted[i+1]){
            return true
        }
    }
    return false 
};

/**
 * Solution 2: Store found elements in a set
 * Time: O(n), Space: O(n)
 */
export function hashLookup(nums: number[]) {
    const found = new Set<number>()
    for (let num of nums){
        if (found.has(num)){
            return true
        }
        found.add(num)
    }
    return false
};

