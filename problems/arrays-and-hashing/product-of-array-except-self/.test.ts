import { test, expect } from 'vitest'
import { productExceptSelf, productExceptSelf_OptimalSpace } from './solution.ts'

// Helper function to test both functions an array of inputs
const expectCorrectArrays = (inputs: [number[], number[]][]) => {
    inputs.map(input => {
        expect(productExceptSelf(input[0])).toEqual(input[1])
        expect(productExceptSelf_OptimalSpace(input[0])).toEqual(input[1])
    })
}

// Tests

test('Arrays with all positive numbers return correct result.', () => {
    const inputs = [
        [[1,2,3,4], [24,12,8,6]],
        [[5,7,4,3], [84,60,105,140]],
        [[3,3,3,4,4], [144,144,144,108,108]],
        [[1,1,8], [8,8,1]],
        [[2,6], [6,2]]
    ] satisfies [number[], number[]][]
    expectCorrectArrays(inputs)
})

test('Arrays with zeros or negative numbers return correct result.', () => {
    const inputs = [
        [[-1,1,0,-3,3], [0,0,9,0,0]],
        [[1,2,3,0], [0,0,0,6]],
        [[-1,-2,-3,-4], [-24,-12,-8,-6]],
        [[1,1,-3,-4,5], [60,60,-20,-15,12]],
        [[0,-3,4,5], [-60,0,0,0]]
    ] satisfies [number[], number[]][]    
    expectCorrectArrays(inputs)
}) // Tests coercion of -0 to 0. 

test('Neither function mutates input array.', () => {
    const nums = [1,2,3,4]
    productExceptSelf(nums)
    productExceptSelf_OptimalSpace(nums)
    expect(nums).toEqual([1,2,3,4])
})