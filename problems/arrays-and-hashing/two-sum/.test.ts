import { test, expect } from 'vitest'
import { nestedLoops, indexHashMap} from './solution.ts'

// Helper function to make assertions on both functions
const expectCorrectIndices = (nums: number[], target:number, solution: [number, number]) => {
    expect(indexHashMap(nums, target)).toEqual(solution)
    expect(nestedLoops(nums, target)).toEqual(solution)
}

// Tests

test('Arrays with non-duplicates returns correct indices.', () => {
    expectCorrectIndices([2, 7, 11, 15], 9, [0, 1])
    expectCorrectIndices([3, 2, 4], 6, [1, 2])
    expectCorrectIndices([1, 2, 11], 12, [0, 2])
})

test('Arrays with duplicates returns correct indices.', () => {
    expectCorrectIndices([3, 3], 6, [0, 1])
    expectCorrectIndices([4, 2, 4], 8, [0, 2])
    expectCorrectIndices([1, 5, 5], 10, [1, 2])
})

test('Both functions do not mutate input array when called.', () => {
    const nums = [1, 2, 3]
    const target = 5
    indexHashMap(nums, target)
    expect(nums).toEqual([1,2, 3])
    nestedLoops(nums, target)
    expect(nums).toEqual([1,2, 3])
})
