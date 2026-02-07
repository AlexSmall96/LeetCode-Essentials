/** Solution:  Sort then one pass
 *  Time: O(n*log(n)), Space: O(n)
 */
export function mergeIntervals(intervals: [number, number][]){
    
    // Avoid mutating input array
    const sorted = [...intervals].sort((a,b) => a[0] - b[0])
    const mergedIntervals = [sorted[0]]
    const n = sorted.length

    for (let i=1; i<n; i++){
        const current = sorted[i]
        const m = mergedIntervals.length
        const start = mergedIntervals[m-1][0]
        const end = mergedIntervals[m-1][1]

        if (current[0] <= end){
            mergedIntervals[m-1] = [start, Math.max(current[1], end)] // Select furthest end point
        } else {
            mergedIntervals.push(current) // No merge required
        }
    }

    return mergedIntervals
}