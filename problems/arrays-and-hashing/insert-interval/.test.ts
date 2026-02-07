import { test, expect, describe } from 'vitest'
import { insertInterval } from './solution.ts'

// Helper function to test solution on an array of inputs
const expectCorrectArrays = (inputs: [[number, number][], [number, number], [number, number][]][]) => {
    inputs.map(input => {
        expect(insertInterval(input[0], input[1])).toEqual(input[2])
    })
}

describe('SMALL INPUTS', () => {
    test('Arrays where newInterval does not overlap with any intervals return correct results.', () => {
        const inputs = [
            [[[1,2],[5,6]], [3,4], [[1,2],[3,4],[5,6]]],
            [[[1,5],[6,10]], [11,15], [[1,5],[6,10],[11,15]]],   
            [[[1,4],[5,8]], [0,0], [[0,0],[1,4],[5,8]]],
        ] satisfies [[number, number][], [number, number], [number, number][]][]
        expectCorrectArrays(inputs)
    })

    test('Arrays where newInterval overlaps with one interval return correct results.', () => {
        const inputs = [
            [[[1,3],[6,9]], [2,5], [[1,5],[6,9]]],
            [[[1,5],[8,10]], [4,7], [[1,7],[8,10]]],   
            [[[1,4],[5,8]], [0,2], [[0,4],[5,8]]],
        ] satisfies [[number, number][], [number, number], [number, number][]][]
        expectCorrectArrays(inputs)
    })

    test('Arrays where newInterval overlaps with multiple intervals return correct results.', () => {
        const inputs = [
            [[[1,3],[5,7],[8,10]], [2,6], [[1,7],[8,10]]],
            [[[1,5],[6,8],[9,10]], [4,9], [[1,10]]],   
            [[[1,4],[5,8],[9,11]], [0,10], [[0,11]]],
        ] satisfies [[number, number][], [number, number], [number, number][]][]
        expectCorrectArrays(inputs)
    })
    
    test('Arrays where newInterval is contained within an interval return correct results.', () => {
        const inputs = [
            [[[1,5],[6,9]], [2,3], [[1,5],[6,9]]],
            [[[1,7],[8,10]], [4,7], [[1,7],[8,10]]],
            [[[1,4],[5,10]], [6,8], [[1,4],[5,10]]],
        ] satisfies [[number, number][], [number, number], [number, number][]][]
        expectCorrectArrays(inputs)
    })

    test('Function does not mutate input arrays.', () => {
        const intervals = [[1,3],[5,7],[8,10]] as [number, number][]
        const newInterval = [2,6] as [number, number]
        insertInterval(intervals, newInterval)
        expect(intervals).toEqual([[1,3],[5,7],[8,10]])
        expect(newInterval).toEqual([2,6])
    })
})

describe('LARGE INPUTS', () => {
    test('Function handles large inputs within time limits.', () => {
        // Test with array of length 10^4, Leetcode's maximum input size for this problem
        const n = 10**4
        const intervals = [] as [number, number][]
        for (let i=0; i<n; i++){
            intervals.push([i*2, i*2+1])            
        }
        const newInterval = [n, n+1] satisfies [number, number]
        // Test that function runs without timeout
        insertInterval(intervals, newInterval)
    })
})