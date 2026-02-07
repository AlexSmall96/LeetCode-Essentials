import { test, expect } from 'vitest'
import { frequencyCountsHash, sortAndCompare} from './solution.ts'

// Helper function to make assertions on both functions
const expectCorrectBoolean = (s: string, t: string, bool: boolean) => {
    expect(frequencyCountsHash(s, t)).toBe(bool)
    expect(sortAndCompare(s, t)).toBe(bool)
}

// Tests

test('Strings unequal in length return false.', () => {
    expectCorrectBoolean('ab', 'a', false)
    expectCorrectBoolean('abc', 'ab', false)
    expectCorrectBoolean('aabbccddeeffgg', 'abcdefg', false)
})

// Due to the assymetry between the two arguments in frequencyCountsHash, the below tests are both necessary.
test('First string containing a character not in second string returns false.', () => {
    expectCorrectBoolean('abbc', 'abbb', false)
    expectCorrectBoolean('ab', 'aa', false)
    expectCorrectBoolean('abcd', 'abcc', false)
})

test('Second string containing a character not in first string returns false.', () => {
    expectCorrectBoolean('abbb','abbc', false)
    expectCorrectBoolean('aa', 'ab', false)
    expectCorrectBoolean('abcc','abcd', false)
})

test('Strings that are valid anagrams return true.', () => {
    expectCorrectBoolean('typescript', 'pyerptisct', true)
    expectCorrectBoolean('car', 'arc', true)
    expectCorrectBoolean('hbngk', 'ghnkb', true)
})