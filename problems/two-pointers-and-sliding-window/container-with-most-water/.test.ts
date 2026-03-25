import { test, expect, describe } from 'vitest'
import { nestedLoops, moveSmallerHeight } from './solution'

const expectCorrectArea = (inputs: [number[], number][]) => {
    inputs.forEach(([heights, expected]) => {
        expect(nestedLoops(heights)).toBe(expected)
        expect(moveSmallerHeight(heights)).toBe(expected)
    })
}

describe('Positive area is returned by both solutions correctly when:', () => {
    test('Max area is between the two tallest lines.', () => {
        const inputs = [
            [[1,8,6,2,5,4,8,3,7], 49],
            [[1,2,100,100,2,1], 100],
            [[1,3,51,49,50,30], 100],
            [[100,1,1,1,2,90], 450]
        ] satisfies [number[], number][]
        expectCorrectArea(inputs)
    })
    test('Max area is between the two shortest lines.', () => {
        const inputs = [
            [[6, 6, 6, 8, 8, 6, 5], 30],
            [[3,4,4,4,3], 12],
            [[9, 10, 11, 12, 1, 1, 8], 48]
        ] satisfies [number[], number][]
        expectCorrectArea(inputs)
    })
    test('Max area is between the tallest line and the shortest line.', () => {
        const inputs = [
            [[100, 3, 1], 3],
            [[100, 1, 1], 2],
            [[1, 2, 3], 2],
        ] satisfies [number[], number][]
        expectCorrectArea(inputs)
    })
    test('Max area is between two lines that are not the tallest or shortest.', () => {
        const inputs = [
            [[1, 3, 4, 4, 3, 1], 9],
            [[1, 2, 3, 4, 5], 6],
            [[5, 4, 3, 2, 1], 6],
        ] satisfies [number[], number][]
        expectCorrectArea(inputs)
    })
    test('All heights are the same.', () => {
        const inputs = [
            [[1, 1, 1, 1], 3],
            [[2, 2, 2, 2], 6],
            [[3, 3, 3, 3], 9],
        ] satisfies [number[], number][]
        expectCorrectArea(inputs)
    })
})

describe('Both solutions return the minimum height when:', () => {
    test('Input array has length 2.', () => {
        const inputs = [
            [[1, 1], 1],
            [[2, 3], 2],
            [[6, 4], 4],
        ] satisfies [number[], number][]
        expectCorrectArea(inputs)
    })
})

describe('Both solutions return zero area when:', () => {
    test('All heights are zero.', () => {
        const inputs = [
            [[0, 0, 0, 0], 0],
            [[0, 0, 0, 0, 0], 0],
            [[0, 0], 0],
        ] satisfies [number[], number][]
        expectCorrectArea(inputs)
    })
})

describe('Optimized solution runs for large inputs.', () => {
    test('Input array has 10^5 elements.', () => {
        // Set array length to maximum allowed by problem constraints
        const heights = new Array(10**5).fill(1)
        expect(moveSmallerHeight(heights)).toBe(99999)
    })
})
