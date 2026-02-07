import { test, expect, describe } from 'vitest'
import { mergeIntervals } from './solution.ts'

// Helper function to test solution on an array of inputs
const expectCorrectArrays = (inputs: [[number, number][], [number, number][]][]   ) => {
    inputs.map(input => {
        expect(mergeIntervals(input[0])).toEqual(input[1])
    })
}

// Tests

describe('SMALL INPUTS', () => {

    test('Arrays with no overlapping intervals return correct results.', () => {
        const inputs = [
            [[[1,2],[3,4],[5,6]], [[1,2],[3,4],[5,6]]],
            [[[1,5],[6,10]], [[1,5],[6,10]]],   
            [[[1,4],[5,8]], [[1,4],[5,8]]],
            [[[1,3],[4,6],[7,9]], [[1,3],[4,6],[7,9]]],
            [[[1,2],[3,5],[6,8]], [[1,2],[3,5],[6,8]]]
        ] satisfies [[number, number][], [number, number][]][]   
        expectCorrectArrays(inputs)
    })

    test('Arrays with 2 overlapping intervals return correct results.', () => {
        const inputs = [
            [[[1,3],[2,6],[8,10],[15,18]], [[1,6],[8,10],[15,18]]],
            [[[1,4],[4,5]], [[1,5]]],
            [[[1,4],[0,4]], [[0,4]]],
            [[[1,4],[2,3]], [[1,4]]],
            [[[1,5],[5,6], [5,10]], [[1, 10]]]
        ] satisfies [[number, number][], [number, number][]][]
        expectCorrectArrays(inputs)
    })

    test('Arrays with multiple overlapping intervals return correct results.', () => {
        const inputs = [
            [[[1,4],[2,6],[3,5]], [[1,6]]],
            [[[1,4],[0,2],[3,5]], [[0,5]]],
            [[[1,4],[2,3],[3,5]], [[1,5]]],
            [[[2,5], [3,6],[7,10]], [[2,6], [7,10]]],
            [[[0,4], [3,5],[9,10],[2,8], [10, 11]], [[0,8], [9,11]]]
        ] satisfies [[number, number][], [number, number][]][]
        expectCorrectArrays(inputs)
    })

    test('Arrays with a single interval return correct results.', () => {
        const inputs = [
            [[[1,4]], [[1,4]]],
            [[[0,2]], [[0,2]]],
            [[[3,5]], [[3,5]]],
            [[[2,6]], [[2,6]]],
            [[[0,6]], [[0,6]]]
        ] satisfies [[number, number][], [number, number][]][]
        expectCorrectArrays(inputs)
    })
})

describe('LARGE INPUTS', () => {
    test('Function runs for large input.', () => {
        const intervals = Array.from({length: 10000}, () => {
            const start = Math.floor(Math.random() * 1000) - 500
            const end = start + Math.floor(Math.random() * 10) + 1
            return [start, end]
        }) satisfies [number, number][]
        // Test that function runs without timeout
        mergeIntervals(intervals)
    })
})
 
