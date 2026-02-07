import { test, expect, describe } from 'vitest'
import { nestedLoops, bucketSort } from './solution.ts'

// Helper function to test both functions an array of inputs
const expectCorrectArrays = (inputs: [number[], number, number[]][]) => {
    inputs.map(input => {
        expect(nestedLoops(input[0], input[1])).toEqual(input[2])
        expect(bucketSort(input[0], input[1])).toEqual(input[2])
    })
}

// Tests    

describe('SMALL INPUTS (both solutions tested)', () => {
    test('Arrays with positive numbers return correct result.', () => {
        const inputs = [
            [[1,1,1,2,2,3], 2, [1,2]],
            [[4,4,4,4,5,5,6], 3, [4,5,6]],
            [[3,3,3,3,2,2,1], 1, [3]],
            [[1,2,3,4,5], 5, [1,2,3,4,5]],
            [[5,5,5,6,6,7,7,7], 2, [5,7]]
        ] satisfies [number[], number, number[]][]
        expectCorrectArrays(inputs)
    })
    test('Arrays with negative numbers return correct result.', () => {
        const inputs = [
            [[-1,-1,-1,-2,-2,-3], 2, [-1,-2]],
            [[-4,-4,-4,-4,-5,-5,-6], 3, [-4,-5,-6]],
            [[-3,-3,-3,-3,-2,-2,-1], 1, [-3]],
            [[-1,-2,-3,-4,-5], 5, [-1,-2,-3,-4,-5]],
            [[-5,-5,-5,-6,-6,-7,-7,-7], 2, [-5,-7]]
        ] satisfies [number[], number, number[]][]
        expectCorrectArrays(inputs)
    })
})

describe('LARGE INPUTS (only optimal solution tested)', () => {
    test('Optimized solution runs for large input.', () => {
        const nums = Array.from({length: 100000}, () => {
            return Math.floor(Math.random() * 1000) - 500
        }) 
        const k = 50
        // Test that function runs without timeout
        bucketSort(nums, k)
    }) 
})