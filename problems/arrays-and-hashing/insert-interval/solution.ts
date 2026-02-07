type intervalType = [number, number]

/** Solution:  One pass with flags
 * Time: O(n), Space: O(n)
 */
export function insertInterval(intervals: intervalType[], newInterval: intervalType): intervalType[] {
    let inserted = false

    const merged = []

    let aboveFound = false

    for (let interval of intervals){
        // If aboveFound flag set to true, no more merging is required
        if (aboveFound){
            merged.push(interval)
            continue
        }
        if (!inserted){
            // Check relative position of intervals
            const below = interval[1] < newInterval[0]
            const above = newInterval[1] < interval[0]
            const overlap = !below && !above
            if (below){
                merged.push(interval)
            }
            if (above){
                merged.push(newInterval)
                merged.push(interval)
                inserted = true
                // Flag that interval above newInterval has been found, to immediately push interval on next iteration
                aboveFound = true
            }
            if (overlap){
                merged.push([Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])])
                inserted = true
            }
        } else {
            const m: number = merged.length
            const lastAdded = merged[m] as intervalType
            // Since intervals is sorted, from here we can assume that interval[0] >= lastAdded[0]
            if (interval[0] <= lastAdded[1]){
                merged[m] = [lastAdded[0], Math.max(lastAdded[1], interval[1])]
            } else {
                merged.push(interval)
                // Flag that interval above newInterval has been found, to immediately push interval on next iteration
                aboveFound = true
            }
        }
    }

    if (!inserted){
        merged.push(newInterval)
    }    

    return merged  as intervalType[]
}