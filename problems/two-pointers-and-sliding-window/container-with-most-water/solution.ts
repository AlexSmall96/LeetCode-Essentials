// Helper function to calculate area between two lines at given indices
const getArea = (height: number[], left: number, right: number) => {
    const currWidth = right - left
    const currHeight = Math.min(height[left], height[right])   
    return currWidth * currHeight
}

// Solution 1: Brute force nested loops
// Time O(n^2), Space O(1)
// Solution 2: Two pointers moving smaller height
// Time O(n), Space O(1)

/**
 * Brute force nested loops
 * Time O(n^2), Space O(1)
 */
export function nestedLoops(height: number[]): number {
    let maxArea = 0

    const n = height.length

    for (let i=0; i<n; i++){
        for (let j=i+1; j<n; j++){
            const currArea = getArea(height, i, j)
            maxArea = Math.max(currArea, maxArea)
        }    
    }    

    return maxArea
}

/**
 * Two pointers moving smaller height
 * Time O(n), Space O(1)
 */
export function moveSmallerHeight(height: number[]):number {
    
    const n = height.length
    let left = 0
    let right = n-1

    let bestArea = getArea(height, left, right)

    while (left < right - 1){
        if (height[left] <= height[right]){
            left++
        } else {
            right--
        }
        const currArea = getArea(height, left, right)
        bestArea = Math.max(currArea, bestArea)
    }

    return bestArea
}