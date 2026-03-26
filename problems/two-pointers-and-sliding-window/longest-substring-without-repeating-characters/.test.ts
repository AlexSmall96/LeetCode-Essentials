import { test, expect, describe } from 'vitest'
import { lengthOfLongestSubstring } from './solution'

const expectCorrectLength = (inputs: [string, number][]) => {
    inputs.forEach(([s, expected]) => {
        expect(lengthOfLongestSubstring(s)).toBe(expected)
    })
}

// Tests

// Standard cases
describe('Longest substring without repeating characters is found correctly when:', () => {
    test('There are no repeating characters in the string.', () => {
        const inputs = [
            ['abcde', 5],
            ['1234567890', 10],
            ['!@#$%^&*()', 10]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
    test('There are no consecutive duplicate characters in the string.', () => {
        const inputs = [
            ['abcdeafgh', 8],
            ['optrsrtp', 5],
            ['1abc123gh', 8]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
    test('There are consecutive duplicate characters in the middle of the string.', () => {
        const inputs = [
            ['abcdeaaafghaab', 5],
            ['optrssrtp', 5],
            ['1abc1233gh', 6]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
    test('There are consecutive duplicate characters at the beginning or end of the string.', () => {
        const inputs = [
            ['aabcde', 5],
            ['abcdee', 5],
            ['aabcdepp', 6]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
    test('Only one character in the string is unique.', () => {
        const inputs = [
            ['aaaaab', 2],
            ['111112', 2],
            ['$$$$$1', 2]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
})

// Edge Cases
describe('Length of longest substring without repeating characters is 1 when:', () => {
    test('All characters in the string are the same.', () => {
        const inputs = [
            ['aaaaaa', 1],
            ['111111', 1],
            ['$$$$$$', 1]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
    test('There is only one character in the string.', () => {
        const inputs = [
            ['a', 1],
            ['1', 1],
            ['$', 1]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
})

describe('Length of longest substring without repeating characters is 0 when:', () => {
    test('Input string is empty.', () => {
        const inputs = [
            ['', 0]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
})

// Performance test
describe('Solution runs on large inputs without timeout.', () => {
    test('Input string has length 5x10^4.', () => {
        // Set length to maximum allowed by problem constraints
        const n = 5 * 10 ** 4
        const s = 'a'.repeat(n / 2) + 'b'.repeat(n / 2)
        const inputs = [
            [s, 2]
        ] satisfies [string, number][]
        expectCorrectLength(inputs)
    })
})