import { test, expect, describe } from 'vitest'
import { nestedLoops, runningMin } from './solution'

const expectCorrectProfit = (inputs: [number[], number][]) => {
    inputs.forEach(([prices, expected]) => {
        expect(nestedLoops(prices)).toBe(expected)
        expect(runningMin(prices)).toBe(expected)
    })
}

describe('Positive profit is returned correctly by both solutions when:', () => {
    test('Best day to buy is minimum price and best day to sell is maximum price.', () => {
        const inputs = [
            [[7,1,5,3,6,4], 5],
            [[1,2,3,4,5], 4],
            [[5,4,7,10, 11], 7],
            [[8,4,5,6,20], 16]
        ] satisfies [number[], number][]
        expectCorrectProfit(inputs)
    })
    test('Maximum price is at the beginning of the array.', () => {
        const inputs = [
            [[8,1,2,4], 3],
            [[10,1,2,3], 2],
            [[20, 1, 2, 19], 18],
            [[100, 1, 2, 99], 98]
        ] satisfies [number[], number][]
        expectCorrectProfit(inputs)
    })
    test('Minimum price is at the end of the array.', () => {
        const inputs = [
            [[3,4,6,8, 1], 5],
            [[7,8,9,2], 2],
            [[10, 11, 12, 1], 2],
            [[50, 51, 52, 1], 2]
        ] satisfies [number[], number][]
        expectCorrectProfit(inputs)
    })
    test('Best day to buy is not minimum price.', () => {
        const inputs = [
            [[2,7,1,4], 5],
            [[3,10,2,3], 7],
            [[3,20,1,17], 17],
        ] satisfies [number[], number][]
        expectCorrectProfit(inputs)
    })
})

describe('Both solutions return zero profit correctly when:', () => {
    test('Prices are in descending order.', () => {
        const inputs = [
            [[7,6,4,3,1], 0],
            [[9,7,4,2,1], 0],
            [[50, 3, 2, 2, 1], 0],
            [[100, 99, 97, 97, 97], 0]
        ] satisfies [number[], number][]
        expectCorrectProfit(inputs)
    })
    test('All prices are the same.', () => {
        const inputs = [
            [[1,1,1,1], 0],
            [[5,5,5,5], 0],
            [[100, 100, 100, 100], 0],
            [[999, 999, 999, 999], 0]
        ] satisfies [number[], number][]
        expectCorrectProfit(inputs)
    })
    test('Only one price is given.', () => {
        const inputs = [[[1], 0], [[5], 0], [[100], 0], [[999], 0]] satisfies [number[], number][]
        expectCorrectProfit(inputs)
    })
})

describe('Optimized solution runs for large inputs.', () => {
    test('Input of 10^5 prices runs within time limit.', () => {
        // Set array length to maximum allowed by problem constraints
        const n = 10 ** 5
        const prices = Array.from({ length: n }, (_, i) => i + 1)
        expect(runningMin(prices)).toBe(n - 1)  
    })
})