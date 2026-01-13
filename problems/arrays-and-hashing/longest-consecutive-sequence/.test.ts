import {test, describe, expect} from 'vitest';
import { sortAndCompare, sequenceCounter } from './solution';

// Helper function to test both functions an array of inputs
const expectCorrectLengths = (inputs: [number[], number][]) => {
    inputs.map(input => {
        expect(sortAndCompare(input[0])).toEqual(input[1])
        expect(sequenceCounter(input[0])).toEqual(input[1])
    })
}

// Tests

describe('SMALL INPUTS (both solutions tested)', () => {
    test('Arrays with only positive numbers return correct result.', () => {
        const inputs = [
            [[100, 4, 200, 1, 3, 2], 4],
            [[1,2,0,1], 3],
            [[9, 1, 4, 5, 6, 10, 11, 12, 13], 5],
            [[1,3,5,7,9], 1],
            [[10,11,12,13,14,15], 6]
        ] satisfies [number[], number][]
        expectCorrectLengths(inputs)
    })
    test('Arrays with only negative numbers return correct result.', () => {
        const inputs = [
            [[-100, -4, -200, -1, -3, -2], 4],
            [[-1,-2,0,-1], 3],
            [[-9, -1, -4, -5, -6, -10, -11, -12, -13], 5],
            [[-1,-3,-5,-7,-9], 1],
            [[-10,-11,-12,-13,-14,-15], 6]
        ] satisfies [number[], number][]
        expectCorrectLengths(inputs)
    })
    test('Arrays with mixed positive and negative numbers return correct result.', () => {
        const inputs = [
            [[0, -1, 1, 2, -2, 3], 6],
            [[-3, -2, -1, 0, 1, 2, 3], 7],
            [[-1, 0, 1, 50, 51, 52, -50, -49, -48], 3],
            [[10, 9, 8, -1, -2, -3, 0, 1, 2], 6],
            [[5, 4, 3, 2, 1, 0, -1, -2, -3], 9]
        ] satisfies [number[], number][]
        expectCorrectLengths(inputs)
    })
})  

describe('LARGE INPUTS (only optimal solution tested)', () => {
    test('Optimized solution produces correct result for large random input.', () => {
        const nums = Array.from({length: 100000}, () => {
            return Math.floor(Math.random() * 200000) - 100000
        })
        // Compare to brute force solution - standard algorithm but slow
        expect(sequenceCounter(nums)).toBe(sortAndCompare(nums))
    })
    test('Optimized solution runs for large input.', () => {
        const nums = Array.from(Array(10^5).keys())
        // Test that function runs without timeout
        sequenceCounter(nums)
    })
})

describe('INPUT ARRAY NOT MUTATED', () => {
    test('Neither solution mutates input array.', () => {
        const nums = [100, 4, 200, 1, 3, 2]
        sequenceCounter(nums)
        sortAndCompare(nums)
        expect(nums).toEqual([100, 4, 200, 1, 3, 2])
    })
})