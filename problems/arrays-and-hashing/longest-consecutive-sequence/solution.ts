// Solution 1: Sorted array comparison O(n * log(n))
// Solution 2: One-pass sequence counter O(n)

/** Solution 1: Sorted array comparison
 *  Time O(n * log(n)), Space: O(1) 
 */
export function sortAndCompare(nums: number[]) {
    const n = nums.length

    if (n === 0){
        return 0
    }

    let max = 1
    let curr = 1

    // Avoid mutating input array
    const sorted = [...nums].sort((a,b) => a-b)

    for (let i=0; i<n-1; i++){
        if (sorted[i] === sorted[i+1] - 1){
            curr++
            max = curr > max? curr: max  
        } else if (sorted[i] !== sorted[i+1]) {
            curr = 1 // Only reset current score if adjacent elements are not equal and differ by more than 1
        }
    }   

    return max
};

/** Solution 2: Sequence counter
 *  Time O(n), Space: O(n)
 */
export function sequenceCounter(nums: number[]) {
    
    const elements = new Set<number>([...nums])
    const visited = new Set<number>()

    let max = 0
    for (let num of elements){
        // Element must be start of sequence - other elements will be reached when k is incremented
        if (!visited.has(num) && !elements.has(num-1)){
            let k = 0
            while (elements.has(num + k)){
                k++
                visited.add(num + k)
            }
            max = k > max? k : max
        }
    }

    return max
};