import { test, expect } from 'vitest'
import { sortAndCompare, hashLookup} from './solution.ts'

// Helper function to make assertions on both functions for a variety of inputs
const expectCorrectBooleans = (inputs: number[][], bool: boolean) => {
    inputs.map(input => {
        expect(hashLookup(input)).toBe(bool)
        expect(sortAndCompare(input)).toBe(bool)
    })
}

// Tests

test('Array consisting of 1 duplicate returns true.', () => {
    const inputs = [
        [1,2,3,1], [1,1,2], [1,1]
    ]
    expectCorrectBooleans(inputs, true)
})

test('Array consisting of multiple duplicates returns true.', () => {
    const inputs = [
        [1,2,3,1,2], [1,2,3,1,2,3], [4,1,2,3,4,1,2,3]
    ]
    expectCorrectBooleans(inputs, true)
})

test('Array consisting of no duplicates returns false.', () => {
    const inputs = [
        [1,2,3,4], [1,2,3], [5,4,8,9,2]
    ]
    expectCorrectBooleans(inputs, false)
})

test('Neither function mutates input array when called.', () => {
    const numsWithNoDups = [1,2,3,4]
    hashLookup(numsWithNoDups)
    sortAndCompare(numsWithNoDups)
    expect(numsWithNoDups).toEqual([1,2,3,4])

    const numsWithDups = [1,1,2]
    hashLookup(numsWithDups)
    sortAndCompare(numsWithDups)
    expect(numsWithDups).toEqual([1,1,2])
})