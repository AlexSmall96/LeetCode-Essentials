// Solution 1: Brute force nested loops O(n^2)
// Solution 2: One pass to store prefix & suffix products, one pass for answer calculation O(n)
// Solution 3: One pass store prefix products, one pass for answer calculation O(n)

// Due to a vitest bug, -0 is treated as not equal to 0. 
// To ensure tests pass with input arrays containing 0 and negative values, solutions 2 and 3 coerce -0 into 0.

/** Solution 1: Brute force nested loops
 *  Time: O(n^2), Space: O(1)
 */ 
const bruteForce = function(nums: number[]) {
    const answer: number[] = []
    const n = nums.length

    for (let i=0; i<n; i++){
        let product = 1
        for (let j=0; j<n; j++){
            if (j !== i){
                product *= nums[j]
                product = product === 0? 0: product
            }
        }
        answer.push(product)
    }

    return answer
};

/** Solution 2: Store prefix & suffix products
 *  Time O(n), Space O(n)
 */
const prefixSuffix = function(nums: number[]) {
    const n = nums.length
    const prefixes = new Array<number>(n)
    const suffixes = new Array<number>(n)

    prefixes[0] = 1
    suffixes[n-1] = 1
    
    let prefix = 1
    let suffix = 1

    for (let i=0; i<n; i++){
        let j = n - 2 - i
        if (i >= 1){
            prefix *= nums[i-1]
            prefixes[i] = prefix        
        }
        if (j >= 0){
            suffix *= nums[j+1]
            suffixes[j] = suffix
        }
    }

    const answer = new Array<number>(n)
    for (let i=0; i<n; i++){
        answer[i] = prefixes[i] * suffixes[i]
        answer[i] = answer[i] === 0? 0: answer[i] // Convert -0 into 0
    }

    return answer
};

/** Solution 3: Prefix product in answer array
 *  Time O(n), Space O(1) (not including output array)
 */
const constantSpace = function(nums: number[]) {
    const n = nums.length
    const answer = new Array<number>(n)
    answer[0] = 1

    // Store prefix products in ouput - keeps space complexity O(1)
    for (let i=1; i<n; i++){
        answer[i] = nums[i-1]*answer[i-1]
        answer[i] = answer[i] === 0? 0: answer[i] // Convert -0 into 0
    }

    let suffix = 1
    for (let i=n-1; i>0; i--){
        suffix *= nums[i]
        answer[i-1] *= suffix
        answer[i-1] = answer[i-1] === 0? 0: answer[i-1] // Convert -0 into 0
    }

    return answer
};

export const solutions = {
    bruteForce, prefixSuffix, constantSpace
}