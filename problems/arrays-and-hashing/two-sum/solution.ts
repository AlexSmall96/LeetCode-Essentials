// Solution 1: Brute force nested loops O(n^2)
// Solution 2: One pass hash map with indices O(n)

/** Solution 1: Nested loops
 *  Time: O(n^2), Space: O(1)
 */
export function nestedLoops(nums: number[], target: number){
    const n = nums.length
    for (let i=0; i<n; i++){
        for (let j = i+1; j<n; j++){
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}


/** Solution 2: Hash map with indices
 * Time: O(n), Space: O(n)
 */
export function indexHashMap(nums: number[], target: number){
    const indices: {[num: number]: number} = {}
    for (let [index, num] of nums.entries()){
        const diff = target - num
        // Check if complement index was already added
        if (diff in indices){
            return [indices[diff], index]
        }
        // Store index after checking complement
        indices[num] = index
    }
}

