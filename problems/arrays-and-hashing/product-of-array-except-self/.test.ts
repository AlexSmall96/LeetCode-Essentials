import { test, expect, describe } from 'vitest'
import { solutions } from './solution.ts'

const { nestedLoops, prefixSuffix, constantSpace } = solutions

// Helper function to test both functions an array of inputs
const expectCorrectArraysAll = (inputs: [number[], number[]][]) => {
    inputs.map(input => {
        expect(nestedLoops(input[0])).toEqual(input[1])
        expect(prefixSuffix(input[0])).toEqual(input[1])
        expect(constantSpace(input[0])).toEqual(input[1])
    })
}

// Tests
describe('SMALL INPUTS (all solutions tested)', () =>{
    test('Arrays with all positive numbers return correct result.', () => {
        const inputs = [
            [[1,2,3,4], [24,12,8,6]],
            [[5,7,4,3], [84,60,105,140]],
            [[3,3,3,4,4], [144,144,144,108,108]],
            [[1,1,8], [8,8,1]],
            [[2,6], [6,2]]
        ] satisfies [number[], number[]][]
        expectCorrectArraysAll(inputs)
    })

    test('Arrays with zeros or negative numbers return correct result.', () => {
        const inputs = [
            [[-1,1,0,-3,3], [0,0,9,0,0]],
            [[1,2,3,0], [0,0,0,6]],
            [[-1,-2,-3,-4], [-24,-12,-8,-6]],
            [[1,1,-3,-4,5], [60,60,-20,-15,12]],
            [[0,-3,4,5], [-60,0,0,0]]
        ] satisfies [number[], number[]][]    
        expectCorrectArraysAll(inputs)
    }) // Tests coercion of -0 to 0. 

    test('None of the solutions mutate input array.', () => {
        const nums = [1,2,3,4]
        nestedLoops(nums)
        prefixSuffix(nums)
        constantSpace(nums)
        expect(nums).toEqual([1,2,3,4])
    })
})

describe('LARGE INPUTS (only optimal solution tested)', () => {
    test('Optimized solution matches standard solution for large positive inputs.', () => {
        const nums = Array.from({length: 100000}, () => {
            return Math.floor(Math.random() * 10) + 1
        })
        // Obtain result from prefixSuffixSol - correct reference due to use of standard algorithm
        const expected = prefixSuffix(nums)
        const result = constantSpace(nums)
        expect(result).toEqual(expected)
    })

    test('Optimized solution matches standard solution for large inputs with zeros and negative numbers.', () => {
        const nums = Array.from({length: 100000}, () => {
            const rand = Math.floor(Math.random() * 12) - 2 
            return rand === -2 ? 0 : rand 
        })
        // Obtain result from prefixSuffixSol - correct reference due to use of standard algorithm
        const expected = prefixSuffix(nums)
        const result = constantSpace(nums)
        expect(result).toEqual(expected)
    })

    test('Optimized solution runs on large input.', () => {
        const nums = Array.from({length: 100000}, () => 2)
        constantSpace(nums)
    })
})