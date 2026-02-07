import { test, expect, describe } from 'vitest'
import { sortAndCompareSubStrings, slidingWindowFrequencies } from './solution.ts'

// Helper function to test both functions an array of inputs
const expectCorrectArrays = (inputs: [string, string, number[]][]) => {
    inputs.map(input => {
        expect(sortAndCompareSubStrings(input[0], input[1])).toEqual(input[2])
        expect(slidingWindowFrequencies(input[0], input[1])).toEqual(input[2])
    })
}

// Tests

describe('SMALL INPUTS', () => {
    test('Strings with only one anagram return correct results.', () => {
        const inputs = [
            ["cbaebabacd", "abc", [0,6]],
            ["abab", "ab", [0,1,2]],
            ["a", "a", [0]],
            ["abcd", "abc", [0]],
        ] satisfies [string, string, number[]][]
        expectCorrectArrays(inputs)
    })

    test('Strings with multiple anagrams return correct results.', () => {
        const inputs = [
            ["cbaebabacd", "abc", [0,6]],
            ["abab", "ab", [0,1,2]],
            ["aaabbb", "ab", [0,1,2,3]],
        ] satisfies [string, string, number[]][]
        expectCorrectArrays(inputs)
    })

    test('Strings with no anagrams return correct results.', () => {
        const inputs = [
            ["abcdefg", "hij", []],
            ["abcd", "efg", []],
            ["a", "b", []],
            ["a", "aa", []],
        ] satisfies [string, string, number[]][]
        expectCorrectArrays(inputs)
    })
})

describe('LARGE INPUTS', () => {
    test('Optimal solution runs for large input.', () => {
        // Test with strings of length 3*10^4, Leetcode's maximum input size for this problem
        const n = 3*10**4
        const s = Array.from({length: n}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("")
        const p = Array.from({length: 10}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("")
        slidingWindowFrequencies(s, p)
    })
})