// Solution 1: Brute Force Nested Loops O(k * n)
// Solution 2: Two Pass Bucket Sort O(n)

/** 
 * Solution 1: Brute Force Nested Loops
 * Time: O(k * n), Space: O(1)
 */
export const bruteForce = function(nums: number[], k:number) {
    const maxElements: number[] = []
    let newNums = nums

    for (let i=k; i>0; i--){
        const freq: {[num: string]: number} = {}
        let max = 0
        let maxIndex = newNums[0]
        for (let num of newNums){
            if (num in freq){
                freq[num]++
            } else {
                freq[num] = 1
            }
            if (freq[num] > max){
                max = freq[num]
                maxIndex = num
            }
        }
        maxElements.push(maxIndex)
        newNums = newNums.filter(num => num !== maxIndex)
    }
    return maxElements    
}

/** 
 * Solution 2: Bucket Sort
 * Time: O(n), Space: O(n)
 */
export const optimized = function(nums: number[], k:number) {
    
    const freq = new Map<number, number>()
    for (let num of nums){
        freq.set(num, (freq.get(num)?? 0) + 1)
    }

    // Group values in array by frequency, where index represents frequency
    // Frequency is bounded (<= nums.length)
    const groups = new Array(nums.length)
    freq.forEach((value, key) => {
        if (groups[value]){
            groups[value].push(key)
        } else {
            groups[value] = [key]
        }
    }) 

    // Collect elements working backwards, stop once k elements are found
    let topELs: number[] = []
    for (let i=groups.length-1; i>=0; i--){
        topELs = topELs.concat(groups[i] ?? [])
        if (topELs.length >= k){
            break
        }
    }

    return topELs.slice(0, k)
};