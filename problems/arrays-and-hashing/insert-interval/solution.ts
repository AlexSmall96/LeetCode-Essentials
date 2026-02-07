type intervalType = [number, number]

/** Solution:  One pass with flags
 * Time: O(n), Space: O(n)
 */
export function insertInterval(intervals: intervalType[], newInterval: intervalType): intervalType[] {

    if (intervals.length === 0){
        return [newInterval]
    }
    let inserted = false

    const merged = [] as intervalType[]

    for (let interval of intervals){
        if (!inserted){
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
            }
            if (overlap){
                merged.push([Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])])
                inserted = true
            }
        } else {
            const m = merged.length
            const lastAdded = merged[m - 1]
            // Since intervals is sorted, from here we can assume that interval[0] >= lastAdded[0]
            if (interval[0] <= lastAdded[1]){
                merged[merged.length - 1] = [lastAdded[0], Math.max(lastAdded[1], interval[1])]
            } else {
                merged.push(interval)
            }
        }
    }

    if (!inserted){
        merged.push(newInterval)
    }

    return merged
}